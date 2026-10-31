# 🌊 Ionian Digital

### Modern Web Design & Digital Solutions

**Ionian Digital** is a web design and development agency based in Sarandë, Albania, specializing in modern, responsive, and multilingual websites for businesses of all sizes.

Our mission is simple: **help businesses establish a powerful online presence through beautiful design, reliable technology, and affordable digital solutions.**

We work with local businesses, restaurants, hotels, tourism operators, and entrepreneurs throughout Albania and beyond.

---

## 🌐 About the Website

The Ionian Digital website serves as the official online presence and portfolio for our web development agency.

Designed with performance, accessibility, and user experience in mind, the website showcases our services, pricing, completed projects, and contact information.

### ✨ Features

* **Modern, Responsive Design** — Optimized for desktop, tablet, and mobile devices.
* **Multilingual Support** — Available in English and Albanian, with additional language support.
* **Smooth Animations** — Interactive transitions and animations powered by Motion.
* **Portfolio Showcase** — A collection of completed websites and digital design projects.
* **Transparent Pricing** — Clearly defined website packages for different business needs.
* **Contact Form** — Integrated with Web3Forms for direct email inquiries.
* **WhatsApp Integration** — Direct communication with potential clients.
* **SEO Optimization** — Localized metadata and search-engine-friendly architecture.
* **Performance Focused** — Built with modern technologies for fast loading times.

---

## 🛠️ Technology Stack

The website is built using modern web development technologies.

| Technology   | Purpose                                 |
| ------------ | --------------------------------------- |
| Next.js 16   | React framework and application routing |
| React        | Component-based user interface          |
| TypeScript   | Type-safe development                   |
| Tailwind CSS | Responsive styling                      |
| Motion       | Animations and interactive elements     |
| next-intl    | Internationalization and translations   |
| Web3Forms    | Contact form submissions                |
| Zod          | Form validation                         |
| Vercel       | Hosting and deployment                  |

---

## 📂 Project Structure

```text
ionian-digital/
│
├── public/
│   ├── images/
│   └── portfolio/
│
├── messages/
│   ├── en.json
│   └── sq.json
│
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx
│   │   │   ├── services/
│   │   │   ├── portfolio/
│   │   │   └── contact/
│   │   │
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   │
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── home/
│   │   ├── layout/
│   │   └── ui/
│   │
│   └── lib/
│       └── seo.ts
│
├── next.config.ts
├── package.json
└── README.md
```

*Directory structure represents the main project architecture and may evolve as development continues.*

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js (a version compatible with Next.js 16)
* npm
* Git

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ionian-digital
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory.

Configure the environment variables required by the contact form and any external services.

Never commit API keys or sensitive credentials to GitHub.

### 4. Start the Development Server

```bash
npm run dev
```

Open your browser and navigate to:

```text
http://localhost:3000
```

### 5. Build for Production

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## 🌍 Internationalization

Ionian Digital supports multiple languages using `next-intl`.

### Supported Languages

| Language | Locale |
| -------- | ------ |
| English  | `en`   |
| Albanian | `sq`   |

Translation files are maintained in:

```text
messages/en.json
messages/sq.json
```

This architecture allows additional languages to be integrated as the agency expands.

---

## 💼 Our Services

### 🌐 Website Design & Development

Custom-built websites designed to help businesses attract customers and grow online.

### 🌍 Multilingual Websites

Professional websites that communicate with customers in multiple languages.

### ⚡ Performance & SEO

Fast, responsive websites designed with search engine visibility and user experience in mind.

### 🔧 Website Maintenance

Ongoing updates, technical support, and website improvements.

### 🍽️ Menu Design

Professional digital and print-ready menu designs for restaurants, cafés, bars, and hospitality businesses.

---

## 💰 Website Packages

Ionian Digital offers transparent pricing for businesses at different stages of growth.

| Package          | Starting Price    |
| ---------------- | ----------------- |
| Starter          | €200              |
| Business         | €450              |
| Premium          | €900              |
| Custom Solutions | Contact for Quote |

The Starter package includes support for two languages.

Additional features and custom development are available based on individual business requirements.

---

## 🎨 Portfolio

Our portfolio highlights websites and digital projects developed for businesses across different industries.

Featured projects include:

* **Bistrica Paddleboard** — Tourism and outdoor activities.
* **Haxhi** — Business website project.
* **Vela Marine** — Marine industry website.
* **Crave Nutrition** — Nutrition and wellness website.
* **Hotel Mirë** — Multilingual hospitality website.

The portfolio also features examples of graphic design, restaurant menus, and other digital solutions.

---

## 📬 Contact

Interested in working together?

**Ionian Digital**
📍 Sarandë, Albania
📧 [ioniandigital@gmail.com](mailto:ioniandigital@gmail.com)

Contact us through our website or WhatsApp to discuss your project.

---

## 🔒 Security

* Server-side contact form processing.
* Input validation using Zod.
* Environment variables for sensitive configuration.
* Honeypot field for basic spam prevention.
* HTTPS support through production hosting.

---

## 📈 Future Improvements

Planned improvements may include:

* Additional language support.
* Expanded portfolio and case studies.
* Client testimonials.
* Enhanced SEO and local search visibility.
* Additional digital services.
* Improved analytics and performance monitoring.

---

## 👩‍💻 Development

Designed and developed by **Ionian Digital**.

Built with a focus on clean code, maintainability, performance, and modern user experiences.

---

## 📄 Copyright

© 2026 Ionian Digital. All rights reserved.

**Built with passion in Sarandë, Albania. 🌊**
