
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/logodeitada.png" 
              alt="VisionTaubaté Logo" 
              className="h-10 md:h-4 lg:h-10"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#software"
              className="text-gray-700 hover:text-vision-purple transition-colors font-medium"
            >
              Software
            </a>
            <a
              href="#design"
              className="text-gray-700 hover:text-vision-pink transition-colors font-medium"
            >
              Design
            </a>
            <a
              href="#marketing"
              className="text-gray-700 hover:text-vision-orange transition-colors font-medium"
            >
              Marketing
            </a>
            <a
              href="#social"
              className="text-gray-700 hover:text-vision-teal transition-colors font-medium"
            >
              Redes Sociais
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-vision-purple transition-colors font-medium"
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="btn-primary"
            >
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-vision-purple focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 transform origin-top transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-4">
              <a
                href="#software"
                className="text-gray-700 hover:text-vision-purple transition-colors font-medium px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Software
              </a>
              <a
                href="#design"
                className="text-gray-700 hover:text-vision-pink transition-colors font-medium px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Design
              </a>
              <a
                href="#marketing"
                className="text-gray-700 hover:text-vision-orange transition-colors font-medium px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Marketing
              </a>
              <a
                href="#social"
                className="text-gray-700 hover:text-vision-teal transition-colors font-medium px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Redes Sociais
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-vision-purple transition-colors font-medium px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#contact"
                className="btn-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
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
