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
    "/white-wash/interior-painting.jpeg",
    "/white-wash/interior-painting2.jpeg",

    "/white-wash/outside-painting.jpeg",
    "/white-wash/plastering.jpeg",
    "/white-wash/roofing2.jpeg",
    "/white-wash/tails2.jpeg",
    "/white-wash/wall-painting.jpeg",
    "/white-wash/waterproofing.jpeg",
    "/white-wash/project.jpeg",
    "/white-wash/project2.jpeg",
    "/white-wash/project3.jpeg",
    "/white-wash/project4.jpeg",
    "/white-wash/roofpainting.jpeg",
    "/white-wash/paintingproject.jpeg",

];
