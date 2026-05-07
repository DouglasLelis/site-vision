import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSectionClick = (sectionId: string) => {
    navigate('/', { replace: true });
    setTimeout(() => {
      window.location.hash = sectionId;
    }, 0);
    setIsMobileMenuOpen(false);
  };

  const handleMenuLinkClick = () => {
    setIsMobileMenuOpen(false);
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
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/logodeitada.png" 
              alt="VisionTaubaté Logo" 
              className="h-10 md:h-4 lg:h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/segmentos/desenvolvimento-de-software"
              className="text-gray-700 hover:text-vision-purple transition-colors font-medium"
            >
              Software
            </Link>
            <Link
              to="/segmentos/comunicacao-visual"
              className="text-gray-700 hover:text-vision-pink transition-colors font-medium"
            >
              Comunicação Visual
            </Link>
            <button
              onClick={() => handleSectionClick('portfolio')}
              className="text-gray-700 hover:text-vision-purple transition-colors font-medium"
            >
              Portfólio
            </button>
            <Link
              to="/sobre"
              className="text-gray-700 hover:text-vision-purple transition-colors font-medium"
            >
              Sobre
            </Link>
            <button
              onClick={() => handleSectionClick('contact')}
              className="btn-primary"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-vision-purple focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 transform origin-top transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-4">
              <Link
                to="/segmentos/desenvolvimento-de-software"
                onClick={handleMenuLinkClick}
                className="text-gray-700 hover:text-vision-purple transition-colors font-medium px-2 py-1 text-left"
              >
                Software
              </Link>
              <Link
                to="/segmentos/comunicacao-visual"
                onClick={handleMenuLinkClick}
                className="text-gray-700 hover:text-vision-pink transition-colors font-medium px-2 py-1 text-left"
              >
                Comunicação Visual
              </Link>
              <button
                onClick={() => handleSectionClick('marketing')}
                className="text-gray-700 hover:text-vision-orange transition-colors font-medium px-2 py-1 text-left"
              >
                Marketing
              </button>
              <button
                onClick={() => handleSectionClick('social')}
                className="text-gray-700 hover:text-vision-teal transition-colors font-medium px-2 py-1 text-left"
              >
                Redes Sociais
              </button>
              <button
                onClick={() => handleSectionClick('portfolio')}
                className="text-gray-700 hover:text-vision-purple transition-colors font-medium px-2 py-1 text-left"
              >
                Portfólio
              </button>
              <Link
                to="/sobre"
                className="text-gray-700 hover:text-vision-purple transition-colors font-medium px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <button
                onClick={() => handleSectionClick('contact')}
                className="text-gray-700 hover:text-vision-purple transition-colors font-medium px-2 py-1 text-left"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
