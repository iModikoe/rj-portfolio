import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { PROFILE, SITE, TARGET_ROLES } from "@/content";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { RevealController } from "@/components/site/reveal-controller";
import { Preloader } from "@/components/site/preloader";
import { BackToTop } from "@/components/site/back-to-top";
import "./globals.css";

/** The reference sets everything in Poppins; the weights below are the ones it uses. */
const sans = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: SITE.url },
  keywords: [
    "Junior Data Scientist",
    "Business Intelligence",
    "Credit Risk Analytics",
    "SQL",
    "Python",
    "Power BI",
    "Amazon QuickSight",
    "South Africa",
  ],
  authors: [{ name: PROFILE.name, url: SITE.url }],
  creator: PROFILE.name,
  openGraph: {
    type: "profile",
    url: SITE.url,
    siteName: PROFILE.shortName,
    title: SITE.ogTitle,
    description: SITE.ogDescription,
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.ogTitle,
    description: SITE.ogDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { color: "#ffffff" },
  ],
};

/**
 * Person structured data.
 * Deliberately excludes phone number and residential address — only the city,
 * public profiles and professional topics.
 */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  alternateName: PROFILE.shortName,
  jobTitle: "Junior Data Scientist",
  description: SITE.ogDescription,
  url: SITE.url,
  image: `${SITE.url}${PROFILE.photo}`,
  email: `mailto:${PROFILE.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Centurion",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  worksFor: { "@type": "Organization", name: "Drive24 Pty Ltd" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Belgium Campus iTversity",
    address: { "@type": "PostalAddress", addressLocality: "Pretoria", addressCountry: "ZA" },
  },
  sameAs: [PROFILE.linkedin, PROFILE.github],
  knowsAbout: [
    "Data Science",
    "Business Intelligence",
    "Credit Risk Analytics",
    "Machine Learning",
    "SQL",
    "PostgreSQL",
    "Python",
    "Power BI",
    "Amazon QuickSight",
    "ETL",
    "Data Visualisation",
  ],
  seeks: TARGET_ROLES.map((role) => ({ "@type": "Demand", name: role })),
};

/**
 * Runs before first paint: applies the stored or system theme so there is no
 * flash, and marks the document as JavaScript-enabled, which is the only thing
 * that arms the scroll-reveal animations.
 */
const bootScript = `(function(){try{document.documentElement.classList.add('js')}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-accent-fg"
        >
          Skip to main content
        </a>
        <Preloader />
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
        <BackToTop />
        <RevealController />
      </body>
    </html>
  );
}
