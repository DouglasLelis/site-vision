import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { segmentPaths, segmentBranding } from "@/data/segmentBranding";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: "Início", to: segmentPaths.gateway },
    { label: "Tech", to: segmentPaths.tech },
    { label: "Design", to: segmentPaths.design },
    { label: "Sobre", to: segmentPaths.sobre },
    { label: "Metodologia", to: segmentPaths.metodologia },
  ];

  return (
    <nav className="fixed w-full z-50 py-3 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to={segmentPaths.gateway} className="flex items-center gap-2">
            <img
              src={segmentBranding.general.logos.light}
              alt="VisionTaubaté"
              className="h-10 md:h-4 lg:h-10"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-gray-700 font-medium transition-colors hover:text-vision-purple"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=5512997856012&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contato
            </a>
          </div>

          <button
            className="md:hidden focus:outline-none text-gray-700 hover:text-vision-purple"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-vision-purple transition-colors font-medium px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://api.whatsapp.com/send/?phone=5512997856012&text=Gostaria%20de%20um%20or%C3%A7amento!%20Me%20chamo:"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-vision-purple transition-colors font-medium px-2 py-1"
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
