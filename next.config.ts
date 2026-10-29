import type {NextConfig} from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.100.0.2", "10.5.0.2"],
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);