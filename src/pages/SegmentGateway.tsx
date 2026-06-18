import { useEffect } from "react";
import { motion } from "framer-motion";
import GatewayNavbar from "@/components/gateway/GatewayNavbar";
import SegmentPortal from "@/components/gateway/SegmentPortal";
import QuickContactBar from "@/components/gateway/QuickContactBar";
import { segmentBranding } from "@/data/segmentBranding";

const SegmentGateway = () => {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");

    const applyOverflow = () => {
      document.documentElement.style.overflowX = "hidden";
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = mq.matches ? "hidden" : "auto";
    };

    applyOverflow();
    mq.addEventListener("change", applyOverflow);

    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
      document.body.style.overflowY = "";
      mq.removeEventListener("change", applyOverflow);
    };
  }, []);

  return (
    <div className="relative flex flex-col min-h-dvh h-dvh w-full max-w-[100vw] bg-black text-white overflow-x-hidden overflow-y-auto md:overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(30,144,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30,144,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-vision-tech/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-vision-pink/15 rounded-full blur-3xl" />
      </div>

      <GatewayNavbar />

      <main className="relative z-10 flex flex-1 flex-col min-h-0 px-3 pt-4 pb-2 md:px-6 md:pt-8 md:pb-4">
        <div className="flex flex-1 flex-col items-center justify-center max-w-5xl mx-auto w-full min-h-0 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center shrink-0"
          >
            <img
              src={segmentBranding.tech.logos.dark}
              alt="VisionTaubaté Tech"
              className="h-12 xs:h-12 sm:h-16 md:h-32 w-auto max-w-[320px] sm:max-w-[360px] md:max-w-[480px] mx-auto mb-4 md:mb-6 object-contain"
            />
            <h1 className="text-lg sm:text-3xl md:text-5xl font-bold mb-1 md:mb-3">
              Escolha seu caminho
            </h1>
            <p className="text-gray-400 text-sm md:text-md max-w-xl mx-auto">
              Tecnologia e comunicação visual em experiências dedicadas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 w-full max-w-4xl flex-1 min-h-0 content-center md:flex-none">
            <SegmentPortal segment="tech" delay={0.15} />
            <SegmentPortal segment="design" delay={0.25} />
          </div>
        </div>
      </main>

      <QuickContactBar />
    </div>
  );
};

export default SegmentGateway;
