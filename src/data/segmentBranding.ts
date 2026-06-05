export type SiteSegment = "general" | "tech" | "design";

export const techRoutes = [
  "/segmentos/desenvolvimento-de-software",
  "/solucoes",
] as const;

export const designRoutes = ["/segmentos/comunicacao-visual"] as const;

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
    logos: {
      light: "/tech/logo_visiontaubate_tech_lightmode.png",
      dark: "/tech/logo_visiontaubate_tech.png",
      icon: "/tech/logo_visiontaubate_icon.png",
    },
  },
  design: {
    name: "VisionTaubaté",
    tagline: null,
    accent: "vision-pink" as const,
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
