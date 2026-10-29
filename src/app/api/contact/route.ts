import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  business: z.string().trim().max(150),
  package: z.enum(["starter", "business", "premium", "custom"]),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(200).optional().default("")
});

const packageLabels = {
  starter: "Starter — from €200",
  business: "Business — from €450",
  premium: "Premium — from €900",
  custom: "Custom Project"
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {error: "Invalid form data"},
        {status: 400}
      );
    }

    const data = result.data;

    // Basic spam protection
    if (data.website) {
      return NextResponse.json({success: true});
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("Missing WEB3FORMS_ACCESS_KEY");

      return NextResponse.json(
        {error: "Contact form is not configured"},
        {status: 503}
      );
    }

    // Send the inquiry to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Ionian Digital Inquiry — ${packageLabels[data.package]}`,
        from_name: "Ionian Digital Website",
        name: data.name,
        email: data.email,
        replyto: data.email,
        business: data.business || "Not provided",
        package: packageLabels[data.package],
        message: data.message
      }),
      signal: AbortSignal.timeout(10000)
    });

    const responseText = await response.text();

    let resultData: {
      success?: boolean;
      message?: string;
    };

    try {
      resultData = JSON.parse(responseText);
    } catch {
      console.error("Web3Forms returned an unexpected response:", {
        status: response.status,
        contentType: response.headers.get("content-type"),
        responsePreview: responseText.slice(0, 200)
      });

      return NextResponse.json(
        {error: "Unexpected response from email service"},
        {status: 502}
      );
    }

    if (!response.ok || !resultData.success) {
      console.error("Web3Forms error:", {
        status: response.status,
        message: resultData.message
      });

      return NextResponse.json(
        {error: "Unable to send inquiry"},
        {status: 502}
      );
    }

    return NextResponse.json({success: true});

  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {error: "Unable to send inquiry"},
      {status: 500}
    );
  }
}