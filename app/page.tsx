import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
      </main>
      <Footer />
    </>
  );
}
