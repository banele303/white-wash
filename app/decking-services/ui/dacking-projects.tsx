"use client";

import { ParallaxScroll } from "./parallex-scroll";



export function DeckingProjects() {
    return <div>

        <h3 className="text-center text-[18px] md:text-[24px] font-bold md:pt-[4rem] mb-[-5rem]">Recent Painting Projects</h3>
        <ParallaxScroll images={images} />;
    </div>
}

const images = [
    "/decking/d-hero2.jpeg",
    "/decking/de1.jpeg",

    "/decking/pd3.jpeg",
    "/decking/d-hero2.jpeg",
    "/decking/de2.jpeg",
    "/decking/pd2.jpeg",
    "/decking/de2.jpeg",
    "/decking/pd1.jpeg",
    "/decking/de6.jpeg",
    "/decking/de4.jpeg",
    "/decking/de5.jpeg",
    "/decking/de7.jpeg",
    "/decking/de9.jpeg",
   

];
