import Contents from "@/components/Contents.jsx";
import Hero from "@/components/Hero.jsx";
import Msw from "@/components/Msw";
import Whyus from "@/components/Whyus.jsx";
import Paket from "@/components/Paket";
import Harga from "@/components/Harga";
import Footer from "@/components/Footer";
import Faq from "@/components/FAQ";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Contents />
      <Whyus />
      <Msw />
      <Paket />
      <Harga />
      <Faq />
      <Footer />
    </div>
  );
}
