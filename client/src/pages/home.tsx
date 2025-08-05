import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export default function Home() {
  useSmoothScroll();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
