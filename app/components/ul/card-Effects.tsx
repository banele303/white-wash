"use client"

import { HoverEffect } from "./cards-effect";

export function CardEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Noluthando Nkosi",
    description:
      "It has been a pleasure working with Innocent,they are very professinal and patualy , I would recomend them for any painting project",
    link: "https://stripe.com",
  },
  {
    title: "Brian Masuku",
    description:
      "They fixed my bathroom in 45 minutes and I was I pressed how they managed to do a that fast and profesinalism",
    link: "https://netflix.com",
  },
  {
    title: "Andy Grey",
    description:
      "I would Highly recomend Innocent and the team , they were amzing in helping us what we need to add in our house and the interior paint is wanderful",
    link: "https://google.com",
  },
  {
    title: "Mavin James",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Ferdi Lamlela",
    description:
      "If you are looking for fast and clean team I would recommend Innocent and White Wash they did an amazing job",
    link: "https://amazon.com",
  },
  {
    title: "Elliza Rean",
    description:
      "Its been a pleasure working with White Wash team , they are very professional and panctualy",
    link: "https://microsoft.com",
  },
];
