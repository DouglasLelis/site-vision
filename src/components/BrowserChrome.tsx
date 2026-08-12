import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const LIGHT_ROUTES = ["/sobre", "/metodologia"] as const;

function getChromeTheme(pathname: string) {
  if (LIGHT_ROUTES.some((route) => pathname.startsWith(route))) {
    return {
      themeColor: "#f8fafc",
      statusBarStyle: "default" as const,
      colorScheme: "light",
    };
  }

  return {
    themeColor: "#000000",
    statusBarStyle: "black-translucent" as const,
    colorScheme: "dark",
  };
}

export function BrowserChrome() {
  const { pathname } = useLocation();
  const { themeColor, statusBarStyle, colorScheme } = getChromeTheme(pathname);

  useEffect(() => {
    const { documentElement: html, body } = document;

    html.style.colorScheme = colorScheme;
    html.style.backgroundColor = themeColor;
    body.style.backgroundColor = themeColor;
    html.dataset.chromeTheme = colorScheme;

    return () => {
      html.style.colorScheme = "";
      html.style.backgroundColor = "";
      body.style.backgroundColor = "";
      delete html.dataset.chromeTheme;
    };
  }, [colorScheme, themeColor]);

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={themeColor} />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={statusBarStyle}
        />
      </Helmet>

      {/* Safari 26+ deriva a cor das barras de elementos fixed no topo/rodapé */}
      <div
        aria-hidden="true"
        className="safari-chrome-tint safari-chrome-tint-top opacity-0"
        style={{ backgroundColor: themeColor }}
      />
      <div
        aria-hidden="true"
        className="safari-chrome-tint safari-chrome-tint-bottom opacity-0"
        style={{ backgroundColor: themeColor }}
      />
    </>
  );
}
