import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import HostedEventsSection from '@/components/sections/HostedEventsSection';
import GallerySection from '@/components/sections/GallerySection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import BookingProcessSection from '@/components/sections/BookingProcessSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HostedEventsSection />
      <GallerySection />
      <WhyChooseUsSection />
      <BookingProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
