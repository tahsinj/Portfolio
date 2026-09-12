import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Honours from "@/components/Honours";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import Ticker from "@/components/Ticker";
import Toolkit from "@/components/Toolkit";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Work />
        <Experience />
        <Toolkit />
        <Honours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
