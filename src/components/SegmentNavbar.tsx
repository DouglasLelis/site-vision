import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getNavbarLogo,
  segmentBranding,
  segmentPaths,
  type SiteSegment,
} from "@/data/segmentBranding";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

type SegmentNavbarProps = {
  segment: "tech" | "design";
};

const SegmentNavbar = ({ segment }: SegmentNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const { t } = useTranslation();
  
  const branding = segmentBranding[segment];
  const homePath = branding.homePath;
  const isHome = pathname === homePath || pathname === '/tech/criacao-de-sites';
  const useTransparentStyle = isHome && !isScrolled;
  
  let effectiveTheme = theme;
  if (pathname !== "/tech/criacao-de-sites") {
    effectiveTheme = (pathname.includes("design") || pathname.includes("comunicacao")) ? "light" : "dark";
  }
  if (effectiveTheme === "system") {
    effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  
  const shouldShowWhiteLogo = useTransparentStyle && effectiveTheme === "dark";
  const navbarLogo = getNavbarLogo(segment as SiteSegment, shouldShowWhiteLogo);

  const accentHover =
    segment === "tech" ? "hover:text-vision-tech" : "hover:text-vision-pink";
  const accentBtn =
    segment === "tech" ? "btn-tech" : "btn-primary";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    if (pathname !== homePath) {
      navigate(`${homePath}#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const desktopItemClass = useTransparentStyle
    ? "text-gray-800 dark:text-white font-medium transition-colors"
    : "text-gray-700 font-medium transition-colors";

  const techLinks = [
    { label: t("navbar.portfolio"), to: segmentPaths.techPortfolio },
    { label: t("navbar.services"), to: segmentPaths.techServicos },
    { label: t("navbar.solutions"), to: segmentPaths.techSolucoes },
    { label: t("navbar.methodology"), to: segmentPaths.metodologia },
    { label: t("navbar.about"), to: segmentPaths.sobre },
  ];

  const designLinks = [
    { label: t("navbar.services"), action: () => handleSectionClick("servicos") },
    { label: t("navbar.see_all"), to: segmentPaths.designServicos },
    { label: t("navbar.about"), to: segmentPaths.sobre },
  ];

  const links = segment === "tech" ? techLinks : designLinks;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to={homePath} className="flex items-center gap-2">
            <img
              src={navbarLogo}
              alt={branding.name}
              className={
                segment === "tech"
                  ? "h-8 md:h-9 lg:h-10"
                  : "h-10 md:h-4 lg:h-10"
              }
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) =>
              "to" in link && link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`${desktopItemClass} ${accentHover}`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={link.action}
                  className={`${desktopItemClass} ${accentHover}`}
                >
                  {link.label}
                </button>
              )
            )}
            <button
              onClick={() => handleSectionClick("contact")}
              className={
                useTransparentStyle
                  ? effectiveTheme === "dark"
                    ? "inline-flex items-center justify-center rounded-md border border-white/50 bg-white/10 px-4 py-2 font-medium text-white transition-colors hover:bg-white/20"
                    : accentBtn
                  : accentBtn
              }
            >
              {t("navbar.contact")}
            </button>
            <Link
              to={segmentPaths.gateway}
              className={`${desktopItemClass} opacity-70 hover:opacity-100`}
            >
              {t("navbar.home")}
            </Link>
            <LanguageSwitcher />
          </div>

          <div className="flex items-center gap-4">
            {pathname === "/tech/criacao-de-sites" && (
              <ThemeToggle 
                className={useTransparentStyle ? "text-gray-800 dark:text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"}
              />
            )}
            <button
              className={`md:hidden focus:outline-none ${
                useTransparentStyle
                  ? "text-gray-800 dark:text-white hover:opacity-80"
                  : `text-gray-700 ${accentHover}`
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              {links.map((link) =>
                "to" in link && link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-gray-700 ${accentHover} transition-colors font-medium px-2 py-1`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={link.action}
                    className={`text-gray-700 ${accentHover} transition-colors font-medium px-2 py-1 text-left`}
                  >
                    {link.label}
                  </button>
                )
              )}
              <button
                onClick={() => handleSectionClick("contact")}
                className={`text-gray-700 ${accentHover} transition-colors font-medium px-2 py-1 text-left`}
              >
                {t("navbar.contact")}
              </button>
              <Link
                to={segmentPaths.gateway}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 transition-colors font-medium px-2 py-1"
              >
                {t("navbar.home")}
              </Link>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SegmentNavbar;
