import Navbar from "../components/Navbar";
import Footer from "../components/ul/footer";
import WhatsApp from "../components/ul/whatsapp";
import BathroomHero from "./bathroom-hero";
import { BathroomTypes } from "./bathroom-types";
import { BestBathroomRemodelar } from "./best-bremodelar";

export default function Home() {
  return (
   <div>
<Navbar/>
<BathroomHero/>
<BestBathroomRemodelar/>
<BathroomTypes/>
<Footer/>
<WhatsApp/>
   </div>
  );
}
