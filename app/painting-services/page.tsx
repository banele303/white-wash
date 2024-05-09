import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/ul/footer";
import PaintingHero from "./painting-hero";
import PaintingServices from "./all-painting-services";
import MostAskedPaintingQ from "./ui/most- askedpainting";
import { PaintingProjects } from "./ui/painting-projects";


export default function Home() {
  return (
   <div>
<Navbar/>
<PaintingHero/>
<PaintingServices/>
<MostAskedPaintingQ/>
<PaintingProjects/>
<Footer/>
   </div>
  );
}
