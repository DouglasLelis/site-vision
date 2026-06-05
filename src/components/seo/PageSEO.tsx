import { Helmet } from "react-helmet-async";
import {
  SITE_NAME,
  SITE_URL,
  CONTACT_EMAIL,
  DEFAULT_OG_IMAGE,
  formatDocumentTitle,
  absoluteUrl,
  absoluteImageUrl,
  type SeoEntry,
} from "@/config/seo";

type PageSEOProps = {
  seo: SeoEntry;
};

function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteImageUrl(DEFAULT_OG_IMAGE),
    email: CONTACT_EMAIL,
  };
}

function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

function buildWebPageSchema(seo: SeoEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo.title,
    description: seo.description,
    url: absoluteUrl(seo.path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function PageSEO({ seo }: PageSEOProps) {
  const documentTitle = formatDocumentTitle(seo.title, seo.path);
  const canonicalUrl = absoluteUrl(seo.path);
  const ogImage = absoluteImageUrl(seo.ogImage ?? DEFAULT_OG_IMAGE);

  const jsonLd =
    seo.path === "/"
      ? [buildOrganizationSchema(), buildWebSiteSchema()]
      : [buildOrganizationSchema(), buildWebPageSchema(seo)];

  return (
    <Helmet>
      <title>{documentTitle}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={documentTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={documentTitle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

type NotFoundSEOProps = {
  title: string;
  description: string;
};

export function NotFoundSEO({ title, description }: NotFoundSEOProps) {
  const documentTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{documentTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );
}
