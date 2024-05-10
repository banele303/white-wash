import Link from "next/link";


export default function Button() {
    const phoneNumber = '+27 83 300 0705';
  return (
   <div>
  <div className="flex flex-col justify-start mt-2 px-4 md:px-[4rem]">
                    <button className="bg-blue-400 no-underline group w-[15rem] cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-md p-px text-xs font-semibold leading-6 text-white inline-block">
                      <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </span>
                      <div className="relative flex space-x-2 items-center z-10 rounded-md bg-blue-400 py-4 px-1 ring-1 ring-white/10">
                        <Link
                          href={`tel:${phoneNumber}`}
                          className="text-center mx-auto"
                        >
                        FREE IN-HOME ESTIMATE
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
  );
}
