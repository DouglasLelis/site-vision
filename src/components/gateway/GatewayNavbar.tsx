import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const GatewayNavbar = () => {
  return (
    <nav className="hidden md:block shrink-0 relative z-50 py-5">
      <div className="container mx-auto px-6 flex justify-end items-center">
        <div className="flex items-center gap-3">
          <a
            href="https://api.whatsapp.com/send/?phone=5512997856012&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            <FaWhatsapp size={16} className="text-vision-tech" />
            Tech
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5512981999857&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            <FaWhatsapp size={16} className="text-vision-pink" />
            Design
          </a>
          <a
            href="mailto:comercial@visiontaubate.com.br"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            <Mail size={16} />
            E-mail
          </a>
        </div>
      </div>
    </nav>
  );
};

export default GatewayNavbar;
