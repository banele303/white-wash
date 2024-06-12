import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const businessList = [
    {
        title: "Custom Design And Build",
        id: 1,
        Image: "/decking/pd3.jpeg",
    },
    {
        title: "Deck Additions",
        id: 2,
        Image: "/decking/d -hero1.jpeg",
    },
    {
        title: "Deck Resurface",
        id: 2,
        Image: "/decking/d-hero3.jpeg",
    },

    {
        title: "Deck Replacement",
        id: 2,
        Image: "/decking/de4.jpeg",
    },
    {
        title: "Pool Decking",
        id: 2,
        Image: "/decking/pd3.jpeg",
    },
    {
        title: "Stair Replacement",
        id: 2,
        Image: "/decking/de3.jpeg",
    },
];

function PaintingServices() {
    return (
        <div className='mt-10 px-[2rem] md:px-[6rem]  md:mt-[15rem]'>
            <h2 className='font-bold text-[22px] py-[2rem]'>Our Awesome Decking Work</h2>
            <p className="text-[16px] md:text-[17px]">Our team of professionals work very closely with our clients to ensure their decking & cladding are of the utmost highest quality. We ensure durability & quality workmanship. Our decking is safe & Eco-friendly. Its safe to walk on as it’s non-slip & splinter free. Our products are perfect for corporate buildings & homes. We can create beautiful spaces with elegant finishes. We pay attention to detail and work within our clients budgets. </p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5 '>
                {businessList.length > 0 ? businessList.map((business, index) => (
                    <div key={business.id} className='shadow-md rounded-lg hover:shadow-lg cursor-pointer hover:shadow-primary hover:scale-105 transition-all ease-in-out'>
                        <Image src={business.Image} alt={business.title} width={500} height={200} className='h-[300px] md:h-[300px] object-cover rounded-lg' />
                        <div className='flex flex-col items-baseline p-3 gap-1'>
                            <h2 className='p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]'>{business.title}</h2>
                            <h2 className='font-bold text-lg'>{business.title}</h2>

                        </div>
                    </div>
                )) :
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <div key={index} className='w-full h-[300px] bg-slate-200 rounded-lg animate-pulse'></div>
                    ))
                }
            </div>
            <div className='py-[3rem] md:pt-[3rem]'>
                <h3 className='text-[17px] font-bold md:text-[20px] py-3'> What Is Composite Decking?</h3>
                <p className='text-[17px] leading-7'>
                    Composite decks is a durable alternative to
                    wood decking that is made of recycled plastic
                    and wood fiber. This combination creates a
                    low-maintenance deck solution that is both
                    aesthetically pleasing and resistant to water, pests,
                    bacteria, UV rays, mildew, and even fire. Unlike traditional
                    wood decks, composite decks are available in various colors,
                    shapes, textures and sizes for a customized look.
                    <br />

                    <br />

                    Not only is composite for decking low maintenance,
                    but it also requires fewer occasional repairs than
                    wooden decks. Traditional wooden decks need to be sealed
                    and stained periodically to look their best, whereas composite doesn&apos;t require such treatments.
                    In addition, composite decks won&apos;t splinter or warp due to the composites plastic
                    nature and can handle
                    rough wear and tear better than wood. With a lifespan of up to 25 years, composite decking makes an
                    excellent addition to any outdoor space while eliminating the hassle of maintaining a wood deck over time.

                </p>
                <h3 className='text-[17px] font-bold md:text-[20px] py-3 leading-7'>Our Stunning Work</h3>
                <p className='text-[17px]'>


                    At United Decking, we pride ourselves on the quality of the work we do with composite decking. We understand that a deck is more than just a space for barbecues and relaxation, it&apos;s an extension of your home or commercial building.


                </p>



            </div>


        </div>
    );
}

export default PaintingServices;
