export type SiteSegment = "general" | "tech" | "design";

export const techRoutes = ["/tech"] as const;
export const designRoutes = ["/design"] as const;

export const segmentPaths = {
  gateway: "/",
  tech: "/tech",
  techServicos: "/tech/servicos",
  techSolucoes: "/tech/solucoes",
  design: "/design",
  designServicos: "/design/servicos",
  sobre: "/sobre",
  metodologia: "/metodologia",
} as const;

export function getSegmentFromPath(pathname: string): SiteSegment {
  if (techRoutes.some((route) => pathname.startsWith(route))) return "tech";
  if (designRoutes.some((route) => pathname.startsWith(route))) return "design";
  return "general";
}

export const segmentBranding = {
  tech: {
    name: "VisionTaubaté Tech",
    tagline: "INTELIGÊNCIA QUE TRANSFORMA",
    accent: "vision-tech" as const,
    homePath: segmentPaths.tech,
    logos: {
      light: "/brand/tech/logo_visiontaubate_tech_lightmode.png",
      dark: "/brand/tech/logo_visiontaubate_tech.png",
      icon: "/brand/tech/logo_visiontaubate_icon.png",
    },
  },
  design: {
    name: "VisionTaubaté",
    tagline: "Comunicação que conecta",
    accent: "vision-pink" as const,
    homePath: segmentPaths.design,
    logos: {
      light: "/lovable-uploads/logodeitada.png",
      dark: "/lgo branco vision.png",
      icon: "/lovable-uploads/favicon.png",
    },
  },
  general: {
    name: "VisionTaubaté",
    tagline: null,
    accent: "vision-purple" as const,
    homePath: segmentPaths.gateway,
    logos: {
      light: "/lovable-uploads/logodeitada.png",
      dark: "/lgo branco vision.png",
      icon: "/lovable-uploads/favicon.png",
    },
  },
} as const;

export function getNavbarLogo(
  segment: SiteSegment,
  transparent: boolean
): string {
  const branding =
    segment === "tech"
      ? segmentBranding.tech
      : segment === "design"
        ? segmentBranding.design
        : segmentBranding.general;

  return transparent ? branding.logos.dark : branding.logos.light;
}
