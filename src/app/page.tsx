import { Header } from '@/layout/Header';
import { About } from '@/sections';
import { Career } from '@/sections';
import { Contacts } from '@/sections';
import { Gallery } from '@/sections';
import { Hero } from '@/sections';
import { Services } from '@/sections';

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
