"use client"

import Image from "next/image";
import Link from "next/link";

import DeckingHero from "../../public/decking/de3.jpeg";
import Button from "../bathroom-remodeling/ui/button";


export default function AboutDecking() {
    const phoneNumber = '+27 83 300 0705';
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-[8rem] px-[2rem] gap-[3rem] mt-[23rem] ">

            <section>
                <h3 className="text-xl md:text-2xl py-6  font-bold  text-slate-900 ">
                    WhiteWash Decking Expects
                </h3>
                <p className="text-[16px] md:text-[17px] py-6   text-slate-700 ">

                    We offer a wide range of services tailored to meet your unique
                    outdoor living needs. From custom deck design and construction
                    to repair and upgrades, our team of experienced professionals is
                    dedicated to delivering top-quality craftsmanship and personalized
                    solutions for every project. With years of industry expertise, we take
                    pride in creating beautiful and durable outdoor spaces that exceed your
                    expectations. Contact us today to explore
                    how we can bring your vision to life and transform your outdoor living experience

                    <br />
                    <br />
                    Our decking is engineered from quality Plastic and wood
                    fibers, offers the same warmth and plush feel as treated
                    wood decking with the advantage of low maintenance, free
                    from splinters and cracking the product is designed out
                    last most harsh weather conditions. Offered in variety of
                    colours and finishes to suit your needs and likes.
                </p>
                <h3 className="text-xl md:text-2xl py-6  font-bold text-slate-200 ">
                    Why Choose WhiteWash Renovations Decking
                </h3>
                <p className="text-[16px] md:text-[17px] py-6   text-slate-200 ">

                    Composite decking can withstand temperatures between
                    40 and 60 degrees. It will not crack or splinter within 10 years\
                    and has and overall lifespan of 20 years. Low maintenance is required compared
                    to wooden products  and free of toxins and is 100% recyclable.
                </p>
                <div className="mt-[-19rem] md:mt-[-13rem]"> <Button /></div>

            </section>

            <section>

                <div className="relative h-full md:h-[500px] w-full">
                    <Image src={DeckingHero} alt="bees" className="brightness-50 md:h-[100vh] h-full w-full" />

                </div>
            </section>

        </div>
    )
}