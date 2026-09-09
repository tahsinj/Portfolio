import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Work />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
