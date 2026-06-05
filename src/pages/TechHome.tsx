import SegmentNavbar from "@/components/SegmentNavbar";
import TechHero from "@/components/heroes/TechHero";
import BusinessSolutions from "@/components/BusinessSolutions";
import Portfolio from "@/components/Portfolio";
import SegmentServicesCta from "@/components/SegmentServicesCta";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import {
  useRevealOnScroll,
  useSegmentHashScroll,
} from "@/hooks/useSegmentHashScroll";

const TechHome = () => {
  useRevealOnScroll();
  useSegmentHashScroll();

  return (
    <div className="overflow-x-hidden">
      <SegmentNavbar segment="tech" />
      <TechHero />
      <BusinessSolutions />
      <Portfolio segment="tech" />
      <SegmentServicesCta segment="tech" />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default TechHome;
