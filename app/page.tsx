import Image from "next/image";
import Navbar from "./components/Navbar"
import HomeHero from "./components/home-hero"
import AboutUS from "./components/about-us"
import BusinessList from "./components/all-services"
import { CardEffect } from "./components/ul/card-Effects";
import { LayoutGridPictures } from "./components/ul/small-layout";
import Footer from "./components/ul/footer";
import Mission from "./components/ul/mission";
import { PaintingProjects } from "./painting-services/ui/painting-projects";
import MostAskedPaintingQ from "./painting-services/ui/most- askedpainting";
import { NavTwo } from "./components/ul/navbar-two";
import WhatsApp from "./components/ul/whatsapp";

export default function Home() {
  return (
   <div>
<Navbar/>
<HomeHero/>
<div className="mt-[8rem] md:mt-[.4]">
<AboutUS/>
</div>
<WhatsApp/>
<BusinessList/>
<div className="flex flex-col">
  
  <h3 className="text-center text-[20px]">What Our Clients Are Saying</h3>
  <CardEffect/></div>

<PaintingProjects/>
<MostAskedPaintingQ/>
<Mission/>
<div className="py-[1rem]"></div>
<Footer/>
   </div>
  );
}
