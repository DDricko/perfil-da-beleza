import HeroSection from '@/components/home/HeroSection';
import KeyTreatments from '@/components/home/KeyTreatments';
import Promotions from '@/components/home/Promotions';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <HeroSection />
      <KeyTreatments />
      <Promotions />
      <Testimonials />
    </div>
  );
}
