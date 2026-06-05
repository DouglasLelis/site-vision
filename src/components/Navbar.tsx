import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getNavbarLogo, getSegmentFromPath } from '@/data/segmentBranding';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const segment = getSegmentFromPath(pathname);
  const useTransparentStyle = pathname === '/' && !isScrolled;
  const navbarLogo = getNavbarLogo(segment, useTransparentStyle);

  const desktopItemClass = useTransparentStyle
    ? 'text-white font-medium transition-colors'
    : 'text-gray-700 font-medium transition-colors';

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
              src={navbarLogo}
              alt={segment === 'tech' ? 'VisionTaubaté Tech' : 'VisionTaubaté Logo'}
              className={segment === 'tech' ? 'h-8 md:h-9 lg:h-10' : 'h-10 md:h-4 lg:h-10'}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/segmentos/desenvolvimento-de-software"
              className={`${desktopItemClass} hover:text-vision-tech`}
            >
              Software
            </Link>
            <Link
              to="/segmentos/comunicacao-visual"
              className={`${desktopItemClass} hover:text-vision-pink`}
            >
              Comunicação Visual
            </Link>
            <Link
              to="/solucoes"
              className={`${desktopItemClass} hover:text-vision-tech`}
            >
              Soluções SaaS
            </Link>
            <button
              onClick={() => handleSectionClick('portfolio')}
              className={`${desktopItemClass} hover:text-vision-purple`}
            >
              Portfólio
            </button>
            <Link
              to="/sobre"
              className={`${desktopItemClass} hover:text-vision-purple`}
            >
              Sobre
            </Link>
            <button
              onClick={() => handleSectionClick('contact')}
              className={
                useTransparentStyle
                  ? 'inline-flex items-center justify-center rounded-md border border-white/50 bg-white/10 px-4 py-2 font-medium text-white transition-colors hover:bg-white/20'
                  : 'btn-primary'
              }
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none ${
              useTransparentStyle ? 'text-white hover:text-white/80' : 'text-gray-700 hover:text-vision-purple'
            }`}
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
                className="text-gray-700 hover:text-vision-tech transition-colors font-medium px-2 py-1 text-left"
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
              <Link
                to="/solucoes"
                onClick={handleMenuLinkClick}
                className="text-gray-700 hover:text-vision-tech transition-colors font-medium px-2 py-1 text-left"
              >
                Soluções SaaS
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
