import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ViewSection from '@/components/ViewSection';
import Peace from '@/components/Peace';
import Host from '@/components/Host';
import Stay from '@/components/Stay';
import Reviews from '@/components/Reviews';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ViewSection />
      <Peace />
      <Host />
      <Stay />
      <Reviews />
      <Location />
      <Footer />
    </main>
  );
}
