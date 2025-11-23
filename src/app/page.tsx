import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experiments from "@/components/Experiments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://siddhantmanna.dev";

export default function Home() {
  // JSON-LD Structured Data for SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Siddhant Manna",
    jobTitle: "Full Stack Developer",
    description: "Full stack developer and final-year IT student specializing in React, Next.js, Node.js, TypeScript, and modern web technologies. Also a passionate wildlife photographer.",
    url: siteUrl,
    image: `${siteUrl}/portfolio.png`,
    email: "official.siddhantmanna@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/siddhant-manna/",
      "https://github.com/TechnoAS",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Meghnad Saha Institute of Technology",
    },
    knowsAbout: [
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
      "Full Stack Development",
      "Software Engineering",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationLocation: {
        "@type": "Country",
        name: "India",
      },
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Siddhant Manna - Full Stack Developer Portfolio",
    url: siteUrl,
    description: "Professional portfolio showcasing projects, skills, and experience as a full stack developer",
    author: {
      "@type": "Person",
      name: "Siddhant Manna",
    },
    publisher: {
      "@type": "Person",
      name: "Siddhant Manna",
    },
    inLanguage: "en-US",
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteUrl}/#portfolio`,
    name: "Siddhant Manna Portfolio",
    description: "Professional portfolio website showcasing full stack development projects and skills",
    creator: {
      "@type": "Person",
      name: "Siddhant Manna",
    },
    about: {
      "@type": "Thing",
      name: "Web Development",
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      
      <main className="min-h-screen pb-20 sm:pb-24 lg:pb-0 relative">
        <SmoothScroll />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Experiments />
        <Contact />
        <Footer />
        <MobileNav />
      </main>
    </>
  );
}
