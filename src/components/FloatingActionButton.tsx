import { useState } from 'react';
import { Facebook, Instagram, Plus } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/visiontaubate/',
    icon: <Instagram className="h-5 w-5" />
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/visiontaubate',
    icon: <Facebook className="h-5 w-5" />
  },
  {
    label: 'WhatsApp Gráfica',
    href: 'https://api.whatsapp.com/send/?phone=5512981999857&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:',
    icon: <FaWhatsapp className="h-5 w-5" />
  },
  {
    label: 'WhatsApp Tecnologia',
    href: 'https://api.whatsapp.com/send/?phone=5512997856012&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:',
    icon: <FaWhatsapp className="h-5 w-5" />
  }
];

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen &&
        socialLinks.map((item) => {
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-lg transition-transform duration-200 hover:scale-105"
              aria-label={item.label}
            >
              <span className="text-sm font-medium text-vision-900">{item.label}</span>
              <span className="rounded-full bg-vision-50 p-2 text-vision-700">
                {item.icon}
              </span>
            </a>
          );
        })}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-vision-600 text-white shadow-xl transition-transform duration-200 hover:scale-105"
        aria-label={isOpen ? 'Fechar atalhos rápidos' : 'Abrir atalhos rápidos'}
        aria-expanded={isOpen}
      >
        <Plus className={`h-7 w-7 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} />
      </button>
    </div>
  );
};

export default FloatingActionButton;
