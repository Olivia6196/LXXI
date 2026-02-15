import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Investor from "./components/Investor";
import Services from "./components/Services";
import Pillars from "./components/Pillars";
import Career from "./components/Career";
import Sector from "./components/Sector";
import News from "./components/News";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About/>
    <Investor />
    <Services />
    <Pillars />
    <Career />
    <Sector />
    <News />
    <Contact />
    </>
  );
}
