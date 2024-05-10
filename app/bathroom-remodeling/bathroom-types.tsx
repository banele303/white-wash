"use client";
import React from "react";


import bathroomremodelar from "../../public/bathroom/bathroomi6.jpg"
import shower from "../../public/bathroom/bathroomi5.jpg"
import bathtub from "../../public/bathroom/bathroomi7.jpg"
import bathtoShower from "../../public/bathroom/bathroomi3.jpg"
import aging from "../../public/bathroom/bathroomi4.jpg"
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import Button from "./ui/button";

export function BathroomTypes() {
    return (
        <div className="">



            <section className="bg-blue-600 py-[2rem]">
                <h3 className="text-white text-[22px]  text-center">White Wash will change the look and feel of your old bathroom with a beautiful custom bath or shower design </h3>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[2rem] px-[2rem]">

                <div className="">
                    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <h3 className="text-[23px] leading-6 text-neutral-600 dark:text-neutral-400 ">
                            Shower Remodel
                        </h3>
                        <p className="text-md leading-7 text-neutral-600 dark:text-neutral-400 py-5">
                            Transform your shower routine into a rejuvenating escape with premium shower remodel and replacement services from Long Baths. Factory certified installers bring expertise and precision to every project, ensuring a seamless shower installation that guarantees both functionality and aesthetics. Your beautiful new walk-in shower will become the focal point of your bathroom, crafted according to your specific needs in mind.
                        </p>
                        <Button />
                    </BackgroundGradient>
                </div>

                <div className="rounded-[22px] w-full p-4 sm:p-10 ">
                    <Image
                        src={shower}
                        alt="jordans"
                        height="500"
                        width="500"
                        className="object-contain rounded-md"
                    />


                </div>


            </section>




            {/* Secnd Bath*/}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[2rem] px-[2rem]">

<div className="">
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <h3 className="text-[23px] leading-6 text-neutral-600 dark:text-neutral-400 ">
        Bathtub to Shower Conversion
        </h3>
        <p className="text-md leading-7 text-neutral-600 dark:text-neutral-400 py-5">
        Redefine your bathroom with a tub to shower conversion. Traditional bathtubs can be bulky and take up a lot of space. A tub to shower conversion will not only give your bathroom a facelift, but will improve space, functionality and even safety in your bathroom. Whether your existing tub is outdated or no longer safe, Long Baths has a variety of modern and sleek walk-in shower options available to you. Increase the beauty and functionality of your bathroom — without requiring an entire bathroom remodel.
        </p>
        <Button />
    </BackgroundGradient>
</div>

<div className="rounded-[22px] w-full p-4 sm:p-10 ">
    <Image
        src={bathtoShower}
        alt="jordans"
        height="500"
        width="500"
        className="object-contain rounded-md"
    />


</div>


</section>
            {/* Thrid Bath*/}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[2rem] px-[2rem]">

<div className="">
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <h3 className="text-[23px] leading-6 text-neutral-600 dark:text-neutral-400 ">
        Bathtub Replacement
        </h3>
        <p className="text-md leading-7 text-neutral-600 dark:text-neutral-400 py-5">
        Spend less time cleaning and more time relaxing with a fresh new bathtub upgrade. Long Bath's bathtub products are non-porous, antimicrobial and engineered to be mold, mildew, soap scum, rust and stain-resistant.  Our team of experts ensures a seamless installation, transforming your bathing space into a clean and low-maintenance haven that is beautiful, durable and easy to clean.
        </p>
        <Button />
    </BackgroundGradient>
</div>

<div className="rounded-[22px] w-full p-4 sm:p-10 ">
    <Image
        src={bathtub}
        alt="jordans"
        height="500"
        width="500"
        className="object-contain rounded-md"
    />


</div>


</section>
            {/* Thrid Bath*/}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[2rem] px-[2rem]">

<div className="">
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <h3 className="text-[23px] leading-6 text-neutral-600 dark:text-neutral-400 ">
        Aging in Place
        </h3>
        <p className="text-md leading-7 text-neutral-600 dark:text-neutral-400 py-5">
        Complex drawn out aging in place bathroom remodeling is a thing of the past. With just a few small upgrades, you can make your bathroom more accessible and senior-safe. Long Baths strives to meet each customers unique needs with stylish, durable bath and shower products, designed with safety in mind. Accessibility options such as low threshhold walk-in showers, jetted tubs, grab bars, bench seats, slip-resistant shower bases and walk-in tubs ensure that all customers can bathe safely and comfortably at home.
        </p>
        <Button />
    </BackgroundGradient>
</div>

<div className="rounded-[22px] w-full p-4 sm:p-10 ">
    <Image
        src={aging}
        alt="jordans"
        height="500"
        width="500"
        className="object-contain rounded-md"
    />


</div>


</section>




<section className="bg-blue-600 py-[2rem] flex flex-col justify-center mx-auto md:px-[3rem] px-[1rem] items-center">
                <h3 className="text-white text-[22px] py-4 text-center">So what are you waiting for? CALL NOW or click the button below to get started on your bath or shower remodel today!</h3>
           <Button/>
            </section>

        </div>

    );
}
