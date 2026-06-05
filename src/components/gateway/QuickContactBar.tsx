import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const contacts = [
  {
    label: "WhatsApp Tech",
    shortLabel: "Tech",
    href: "https://api.whatsapp.com/send/?phone=5512997856012&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:",
    icon: <FaWhatsapp size={16} />,
    accent: "text-vision-tech border-vision-tech/30 hover:bg-vision-tech/10",
  },
  {
    label: "WhatsApp Design",
    shortLabel: "Design",
    href: "https://api.whatsapp.com/send/?phone=5512981999857&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:",
    icon: <FaWhatsapp size={16} />,
    accent: "text-vision-pink border-vision-pink/30 hover:bg-vision-pink/10",
  },
  {
    label: "E-mail",
    shortLabel: "E-mail",
    href: "mailto:comercial@visiontaubate.com.br",
    icon: <Mail size={16} />,
    accent: "text-white border-white/20 hover:bg-white/10",
  },
];

const QuickContactBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="shrink-0 z-20 border-t border-white/10 bg-black/80 backdrop-blur-md safe-area-bottom mb-2 md:mb-0"
    >
      <div className="container mx-auto px-3 py-2 md:px-4 md:py-4">
        <p className="text-center text-sm font-semibold text-white mb-2 md:mb-3">
          Falar agora
        </p>
        <div className="flex flex-row items-center justify-center gap-2 md:gap-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={contact.label}
              className={`inline-flex flex-1 md:flex-none items-center justify-center gap-1.5 rounded-full border px-3 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-medium transition-colors ${contact.accent}`}
            >
              {contact.icon}
              <span className="md:hidden">{contact.shortLabel}</span>
              <span className="hidden md:inline">{contact.label}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default QuickContactBar;
