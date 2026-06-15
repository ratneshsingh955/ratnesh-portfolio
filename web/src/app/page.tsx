import { AuroraBackground } from "@/components/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhyMe } from "@/components/sections/WhyMe";
import { FeaturedProduct } from "@/components/sections/FeaturedProduct";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Research } from "@/components/sections/Research";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <WhyMe />
        <FeaturedProduct />
        <Experience />
        <Projects />
        <TechStack />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
