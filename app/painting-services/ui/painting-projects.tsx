"use client";

import { ParallaxScroll } from "./parallex-scroll";



export function PaintingProjects() {
    return <div>

        <h3 className="text-center text-[18px] md:text-[24px] font-bold pt-[4rem] mb-[-5rem]">Recent Painting Projects</h3>
        <ParallaxScroll images={images} />;
    </div>
}

const images = [
    "/white-wash/exterio-painting.jpeg",
    "/decking/de6.jpeg",
    "/painting/p2.jpeg",

    "/white-wash/outside-painting.jpeg",
    "/white-wash/roofing2.jpeg",
    "/decking/de7.jpeg",
    "/painting/p1.jpeg",
    "/white-wash/tails2.jpeg",
    "/decking/d-hero2.jpeg",
    "/painting/p2.jpeg",
    "/painting/p3.jpeg",
    "/painting/p4.jpeg",
    "/painting/p5.jpeg",
    "/white-wash/wall-painting.jpeg",

    "/white-wash/project.jpeg",
    
    "/white-wash/project4.jpeg",
    "/white-wash/roofpainting.jpeg",
  

];
