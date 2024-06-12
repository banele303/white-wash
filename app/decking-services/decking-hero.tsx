"use client"

import Image from "next/image";
import Link from "next/link";

import DeckingHero from "../../public/decking/d -hero1.jpeg";
import { Form } from "./form";

export default function PaintingHero() {
  const phoneNumber = '+27 83 300 0705';
  return (

    <div className="relative h-screen">

      <div className="relative h-[100vh] md:h-[100vh] w-full">
        <Image src={DeckingHero} alt="bees" className="brightness-50 md:h-[100vh] h-full w-full" />


        <div
          className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center items-center gap-8"
        >


          <div className="">

            <div className="px-[2rem]  mt-[13rem] md:mt-[6rem]">

              <div className="grid grid-cols-1  md:grid-cols-2 gap-6 pt-[7rem] md:pl-[3rem] md:h-[580px]">
                <div className="md:pl-[3rem]">
                  <h1 className="text-3xl md:text-4xl pt-[10rem] md:pt-[8rem] md:pt-[3rem] leading-9 text-slate-100 font-extrabold">
                    Unmatched Decking  Services In Gauteng
                  </h1>
                  <p className="text-[16px] md:text-2xl py-6   text-slate-200 ">
                    You can count on us for all your outdoor living needs. Our services cover everything from custom deck design and construction to repairs and upgrades
                  </p>
                  <div className="flex flex-col justify-start mt-6 px-4 md:px-[4rem] ml-[1rem] md:ml-[-4rem]">
                    <button className="bg-blue-500 no-underline group w-[18rem] cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-[18px] text-white inline-block">
                      <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </span>
                      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-900 py-4 px-1 ring-1 ring-white/10">
                        <Link
                          href={`tel:${phoneNumber}`}
                          className="text-center mx-auto text-[20px]"
                        >
                          Call +27 63 199 5124
                        </Link>
                        <svg
                          fill="none"
                          height="16"
                          viewBox="0 0 24 24"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.75 8.75L14.25 12L10.75 15.25"
                            stroke="orange"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-yellow-400/0 via-yellow-400/90 to-yellow-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </button>
                  </div>

                </div>
                <div>
                  <div>
                    <Form />
                  </div>
                </div>
              </div>


            </div>


          </div>
        </div>
      </div>


      <div>
      </div>
    </div>
  )
}