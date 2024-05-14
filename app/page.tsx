import { Faq } from '@/components/Faq/Faq';
import { Features } from '@/components/Features/Features';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';

export default function HomePage() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
}
