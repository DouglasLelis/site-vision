import { FaWhatsapp } from 'react-icons/fa';
import { trackConversion } from "@/utils/tracking";

export const FloatingWhatsApp = () => {
  const handleClick = () => {
    trackConversion('click_whatsapp_floating');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://api.whatsapp.com/send/?phone=5512997856012&text=Gostaria%20de%20um%20or%C3%A7amento%20para%20cria%C3%A7%C3%A3o%20de%20site!%20Me%20chamo:"
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 hover:scale-110 animate-float"
        aria-label="Falar pelo WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30"></span>
        <FaWhatsapp className="h-9 w-9 relative z-10" />
      </a>
    </div>
  );
};
