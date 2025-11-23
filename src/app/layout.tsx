import type { Metadata } from "next";
import { Bruno_Ace_SC } from "next/font/google";
import "./globals.css";
import FaviconUpdater from "@/components/FaviconUpdater";
import Loading from "@/components/Loading";
import ScrollIndicator from "@/components/ScrollIndicator";

const brunoAceSC = Bruno_Ace_SC({
  variable: "--font-bruno",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://siddhantmanna.dev";
const siteName = "Siddhant Manna - Full Stack Developer";
const siteDescription = "Professional portfolio of Siddhant Manna, a full stack developer and final-year IT student specializing in React, Next.js, Node.js, TypeScript, and modern web technologies. Explore innovative projects, technical skills, and development experience.";
const authorName = "Siddhant Manna";
const authorEmail = "official.siddhantmanna@gmail.com";
const authorLinkedIn = "https://www.linkedin.com/in/siddhant-manna/";
const authorGitHub = "https://github.com/TechnoAS";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Portfolio`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Siddhant Manna",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio",
    "Software Engineer",
    "IT Student",
    "Meghnad Saha Institute of Technology",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "Firebase",
    "Tailwind CSS",
    "Framer Motion",
    "Web Development",
    "Software Development",
    "Wildlife Photographer",
  ],
  authors: [
    { 
      name: authorName,
      url: authorLinkedIn,
    },
  ],
  creator: authorName,
  publisher: authorName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/iconLightMode.ico", type: "image/x-icon" },
      { url: "/iconDark.ico", type: "image/x-icon", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: "/iconLightMode.ico",
    apple: "/iconLightMode.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} | Professional Portfolio`,
    description: siteDescription,
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: `${authorName} - Full Stack Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Professional Portfolio`,
    description: siteDescription,
    images: ["/portfolio.png"],
    creator: "@yourusername", // Update with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Portfolio",
  classification: "Portfolio Website",
  other: {
    "theme-color": "#0C2B4E",
    "color-scheme": "dark light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${brunoAceSC.variable} antialiased`}
      >
        <Loading />
        <ScrollIndicator />
        <FaviconUpdater />
        {children}
      </body>
    </html>
  );
}
