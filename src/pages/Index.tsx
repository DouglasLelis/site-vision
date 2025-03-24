
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
    
    // Apply the observer to all elements with 'reveal' class
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    // Handle hash navigation for segments
    const handleSegmentScroll = (segmentId: string) => {
      const element = document.getElementById(segmentId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    // Check if we need to scroll to a specific segment
    const hash = window.location.hash.substring(1);
    if (['software', 'design', 'marketing', 'social'].includes(hash)) {
      handleSegmentScroll(hash);
    }

    // Special case for AtivaBot section
    if (hash === 'software') {
      const ativabotAnchor = document.getElementById('ativabot-anchor');
      if (ativabotAnchor) {
        setTimeout(() => {
          const ativabotSection = document.getElementById('ativabot');
          if (ativabotSection) {
            ativabotSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      }
    }

    // Listen for hash changes
    const hashChangeHandler = (e: HashChangeEvent) => {
      const newHash = new URL(e.newURL).hash.substring(1);
      if (['software', 'design', 'marketing', 'social'].includes(newHash)) {
        handleSegmentScroll(newHash);
        
        // Special case for AtivaBot
        if (newHash === 'software') {
          setTimeout(() => {
            const ativabotSection = document.getElementById('ativabot');
            if (ativabotSection) {
              ativabotSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 200);
        }
      }
    };

    window.addEventListener('hashchange', hashChangeHandler);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', hashChangeHandler);
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
