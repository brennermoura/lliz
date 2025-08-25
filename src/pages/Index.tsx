import Header from "@/components/Header.tsx";
import Hero from "@/components/Hero.tsx";
import Services from "@/components/Services.tsx";
import Gallery from "@/components/Gallery.tsx";
import Clients from "@/components/Clients.tsx";
import FAQ from "@/components/FAQ.tsx";
import Contact from "@/components/Contact.tsx";
import Footer from "@/components/Footer.tsx";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Clients />
      {/* <Reviews /> */}
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
