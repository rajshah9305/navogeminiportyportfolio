import { Header } from "@/components/ui/Header";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { WebGLBackground } from "@/components/ui/WebGLBackground";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

// Wrapper for the scroll reveal logic
import { PageWrapper } from "@/components/ui/PageWrapper";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <WebGLBackground />
      <Header />
      
      <PageWrapper>
        <Hero />
        <Marquee />
        <About />
        <Process />
        <Work />
        <Services />
        <Contact />
      </PageWrapper>
      
      <Footer />
    </>
  );
}
