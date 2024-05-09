"use client";
import React from "react";

import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import bathroomremodelar from "../../public/bathroom/bathroomi6.jpg"

export function BestBathroomRemodelar() {
    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-[2rem] md:px-[4rem] py-8">
            <div>
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                    <Image
                        src={bathroomremodelar}
                        alt="jordans"
                        height="400"
                        width="400"
                        className="object-contain"
                    />
                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                        Air Jordan 4 Retro Reimagined
                    </p>

                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Take your bathroom from outdated to outstanding. Call now or fill out the quick form to schedule your FREE in-home design consultation today
                    </p>
                    <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                        <span>Get A Quote</span>

                    </button>
                </BackgroundGradient>
            </div>

        </div>
    );
}
