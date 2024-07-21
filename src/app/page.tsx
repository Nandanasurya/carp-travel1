import Header from '@/layout/Header/Header';
import About from '@/sections/About';
import Career from '@/sections/Career';
import Contacts from '@/sections/Contacts';
import Gallery from '@/sections/Gallery';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Career />
        <Gallery />
        <Contacts />
      </main>
    </>
  );
}
