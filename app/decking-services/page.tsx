import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/ul/footer";
import PaintingHero from "./decking-hero";
import DeckingServices from "./all-decking-services";
import MostAskedPaintingQ from "./ui/most- askedpainting";
import { DeckingProjects } from "./ui/dacking-projects";
import AboutDecking from "./about-decking";


export default function Home() {
  return (
    <div>
      <Navbar />
      <PaintingHero />
      <AboutDecking />
      <DeckingServices />

      <DeckingProjects />
      <Footer />
    </div>
  );
}
