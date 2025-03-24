
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AtivaBot from '../components/AtivaBot';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add intersection observer to animate elements as they come into view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    // Handle hash navigation for the AtivaBot section
    const handleActivaBotScroll = () => {
      const element = document.getElementById('ativabot-anchor');
      if (element) {
        setTimeout(() => {
          const ativabotSection = document.getElementById('ativabot');
          if (ativabotSection) {
            ativabotSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Check if we need to scroll to AtivaBot section
    if (window.location.hash === '#software') {
      handleActivaBotScroll();
    }

    // Listen for hash changes
    window.addEventListener('hashchange', (e) => {
      if (e.newURL.includes('#software')) {
        handleActivaBotScroll();
      }
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleActivaBotScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <AtivaBot />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
