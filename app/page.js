import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import BestSellers from '@/components/home/BestSellers';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BestSellers />
    </div>
  );
}
