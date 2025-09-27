import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventSchedule from '@/components/EventSchedule';
import BlogSection from '@/components/BlogSection';
import ContributionsSection from '@/components/ContributionsSection';
import SponsorsSection from '@/components/SponsorsSection';
import ImpactSection from '@/components/ImpactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EventSchedule />
      <BlogSection />
      <ContributionsSection />
      <SponsorsSection />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default Index;
