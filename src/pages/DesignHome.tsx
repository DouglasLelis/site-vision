import SegmentNavbar from "@/components/SegmentNavbar";
import DesignHero from "@/components/heroes/DesignHero";
import Testimonials from "@/components/Testimonials";
import SegmentServicesCta from "@/components/SegmentServicesCta";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import {
  useRevealOnScroll,
  useSegmentHashScroll,
} from "@/hooks/useSegmentHashScroll";

const DesignHome = () => {
  useRevealOnScroll();
  useSegmentHashScroll();

  return (
    <div className="overflow-x-hidden">
      <SegmentNavbar segment="design" />
      <DesignHero />
      <SegmentServicesCta segment="design" />
      <Testimonials segment="design" />
      <Contact segment="design" />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default DesignHome;
