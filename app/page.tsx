'use client'
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  return (
    <>

      {/* main section */}
      <main className="relative h-screen w-full overflow-hidden">
        <div className="relative flex justify-center items-end overflow-hidden h-svh lg:h-screen">
          <Image
            src="/Hero-Landing-Page-JULY2026.webp"
            alt="villa photo"
            fill
            priority
            className="absolute object-cover object-bottom w-full h-full"
          />
        <video
          src="/video-1787523849933.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-bottom"
          />
          <div className="bg-black/25 absolute inset-0" />

          <div className="relative flex flex-col w-full h-full justify-end items-center p-8  gap-6 lg:pb-12 text-center text-white" style={{padding:"20px 16px"}}>
            
            <div className="flex flex-col max-w-3xl gap-10 mx-auto">
              <h1 className="font-serif text-balance leading-tight text-center text-white font-extralight tracking-normal text-4xl sm:text-5xl lg:text-6xl">
                <span className="italic">Where</span><br />
                <span className="uppercase">villa memories</span><br />
                <span className="italic">are made</span>
              </h1>
            </div>

            <div className="hidden sm:mx-auto sm:block sm:mb-10">
              <a
                href="/results"
                className="px-6 py-2 tracking-widest inline-flex items-center justify-center text-center uppercase font-medium border border-white hover:border-white/80 text-white hover:text-white/60 h-12 text-sm transition-colors"
              >
                Browse our villas
              </a>
            </div>

            <div className="w-full container sm:hidden">
              <form action="/results" method="get">
                <button
                  type="submit"
                  className="tracking-widest inline-flex items-center justify-center text-center uppercase font-medium bg-black text-white hover:bg-black/80 h-16 text-base px-6 py-4 w-full"
                >
                  Search Villas
                </button>
              </form>
            </div>

            <form className="container hidden mx-auto sm:block border-none" action="/results" method="get">
              <div className="sm:-space-x-px sm:grid sm:grid-flow-col lg:grid-cols-5 h-16">
                
                <div className="hidden sm:flex flex-1 border-l border-border">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full h-full px-6 capitalize bg-white text-black border border-gray-300"
                  >
                    <span>Destinations</span>
                    <svg className="w-4 h-4 transition-transform duration-300 shrink-0 group-data-[state=open]:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 8"><path fillRule="evenodd" clipRule="evenodd" d="M9.78701 2.96828C10.8017 1.97538 12.0223 1.0853 13.4402 0.29374L14.1118 1.49682C12.783 2.23867 11.6648 3.05862 10.7504 3.95333C9.84939 4.83417 9.06179 5.94711 8.39422 7.30414L8.20491 7.68897L6.60116 7.68897L6.41181 7.30431C5.74374 5.94721 4.95636 4.83446 4.05574 3.95357M9.78701 2.96828C8.87048 3.86425 8.07743 4.95013 7.4029 6.21712C6.72806 4.95018 5.9351 3.86435 5.01905 2.9684C4.00185 1.97402 2.76955 1.08331 1.33234 0.291809L0.667649 1.49875C2.01483 2.24068 3.14193 3.06029 4.05574 3.95357"></path></svg>

                  </button>
                </div>

                <div className="hidden md:flex flex-1 border-l border-border">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full h-full px-6 capitalize bg-white text-black border border-gray-300"
                  >
                    <span>Dates</span>
                    <svg className="w-4 h-4 transition-transform duration-300 shrink-0 group-data-[state=open]:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 8"><path fillRule="evenodd" clipRule="evenodd" d="M9.78701 2.96828C10.8017 1.97538 12.0223 1.0853 13.4402 0.29374L14.1118 1.49682C12.783 2.23867 11.6648 3.05862 10.7504 3.95333C9.84939 4.83417 9.06179 5.94711 8.39422 7.30414L8.20491 7.68897L6.60116 7.68897L6.41181 7.30431C5.74374 5.94721 4.95636 4.83446 4.05574 3.95357M9.78701 2.96828C8.87048 3.86425 8.07743 4.95013 7.4029 6.21712C6.72806 4.95018 5.9351 3.86435 5.01905 2.9684C4.00185 1.97402 2.76955 1.08331 1.33234 0.291809L0.667649 1.49875C2.01483 2.24068 3.14193 3.06029 4.05574 3.95357"></path></svg>
                  </button>
                </div>

                <div className="hidden lg:flex flex-1 border-l border-border">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full h-full px-6 capitalize bg-white text-black border border-gray-300"
                  >
                    <span>Guests</span>
                    <svg className="w-4 h-4 transition-transform duration-300 shrink-0 group-data-[state=open]:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 8"><path fillRule="evenodd" clipRule="evenodd" d="M9.78701 2.96828C10.8017 1.97538 12.0223 1.0853 13.4402 0.29374L14.1118 1.49682C12.783 2.23867 11.6648 3.05862 10.7504 3.95333C9.84939 4.83417 9.06179 5.94711 8.39422 7.30414L8.20491 7.68897L6.60116 7.68897L6.41181 7.30431C5.74374 5.94721 4.95636 4.83446 4.05574 3.95357M9.78701 2.96828C8.87048 3.86425 8.07743 4.95013 7.4029 6.21712C6.72806 4.95018 5.9351 3.86435 5.01905 2.9684C4.00185 1.97402 2.76955 1.08331 1.33234 0.291809L0.667649 1.49875C2.01483 2.24068 3.14193 3.06029 4.05574 3.95357"></path></svg>
                  </button>
                </div>

                <div className="hidden lg:flex flex-1 border-l border-border">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full h-full px-6 capitalize bg-white text-black border border-gray-300"
                  >
                    <span>Bedrooms</span>
                    <svg className="w-4 h-4 transition-transform duration-300 shrink-0 group-data-[state=open]:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 8"><path fillRule="evenodd" clipRule="evenodd" d="M9.78701 2.96828C10.8017 1.97538 12.0223 1.0853 13.4402 0.29374L14.1118 1.49682C12.783 2.23867 11.6648 3.05862 10.7504 3.95333C9.84939 4.83417 9.06179 5.94711 8.39422 7.30414L8.20491 7.68897L6.60116 7.68897L6.41181 7.30431C5.74374 5.94721 4.95636 4.83446 4.05574 3.95357M9.78701 2.96828C8.87048 3.86425 8.07743 4.95013 7.4029 6.21712C6.72806 4.95018 5.9351 3.86435 5.01905 2.9684C4.00185 1.97402 2.76955 1.08331 1.33234 0.291809L0.667649 1.49875C2.01483 2.24068 3.14193 3.06029 4.05574 3.95357"></path></svg>

                  </button>
                </div>

                <button
                  type="submit"
                  className="tracking-widest inline-flex items-center justify-center text-center uppercase font-medium bg-black text-white hover:bg-black/80 h-full text-base px-6 py-4 w-full"
                >
                  Search Villas
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* second section */}

      <section className="100vh flex flex-col items-center gap-10 px-5 py-16 lg:gap-12 lg:pt-20 lg:pb-10">
        <h1 className="text-center text-5xl text-pretty tracking-wide leading-none">Extraordinary Villas, Lifelong Memories</h1>
        <div className="flex flex-col items-start justify-center max-w-5xl gap-10 align-middle sm:grid sm:grid-cols-3">

          <div className="flex flex-col max-w-sm md:w-auto sm:row-span-1 gap-2 ">
            <div className="h-full flex items-center gap-2 align-middle leading-none">
               <span className="text-6xl italic md:text-7xl shrink-0">1.</span>
               <h3 className="text-2xl leading-snug">Exceptional, Exclusive Villas</h3>
            </div>
            <p className="text-lg md:text-xl text-pretty">Our villas are only operated exclusively through us, ensuring award-winning quality of both properties and service, and real-time availability to book online with complete confidence.</p>
          </div>

          <div className="h-full flex flex-col max-w-sm md:w-auto sm:row-span-1 gap-2 ">
            <div className="flex items-center gap-2 align-middle leading-none">
               <span className="text-6xl italic md:text-7xl shrink-0">2.</span>
               <h3 className="text-2xl leading-snug">Unrivalled Local Knowledge</h3>
            </div>
            <p className="text-lg md:text-xl text-pretty">We&apos;re locals, deeply rooted in our destinations, with a passion for sharing the places we love and know like no one else.</p>
          </div>

          <div className="h-full flex flex-col max-w-sm md:w-auto sm:row-span-1 gap-2 ">
            <div className="flex items-center gap-2 align-middle leading-none">
               <span className="text-6xl italic md:text-7xl shrink-0">3.</span>
               <h3 className="text-2xl leading-snug ">Personal <br  className="hidden sm:block"/> Service</h3>
            </div>
            <p className="text-lg md:text-xl text-pretty">Our experts have visited each villa personally, so they can listen to your needs and help you find your perfect place.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center w-11/12 gap-3 sm:gap-8 ">
          <button
            className="tracking-widest min-w-3xs inline-flex items-center justify-center text-center uppercase font-medium bg-black text-white hover:bg-black/80 h-full text-base px-6 py-4 "
          >
            Search All Villas
          </button>
          <a
            href="/results"
            className="px-6 py-4  min-w-3xs tracking-widest inline-flex items-center justify-center text-center uppercase font-medium border border-black hover:border-black/80 text-black hover:text-black/60  text-sm transition-colors"
          >
            Enquire
          </a>
        </div>
        <div className="flex justify-center gap-3 text-2xl sm:text-4xl tracking-widest ">
          <h1>Book. Stay. Relax</h1>
        </div>
      </section>

      <section className="h-screen w-screen">
        <Section />
      </section>
      
      <section  className="h-screen bg-white"></section>
    </>
  );
}


function Section() {
  const container = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: container,

      offset: ["start end", 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);
   return (

      <div
      ref={container} 
      className='relative flex items-center justify-center h-screen overflow-hidden'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
      >
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
          <motion.div style={{ y }} className='relative w-full h-full'>

            <Image src={"/archeticture.jpeg"} fill loading="lazy" alt="image" style={{objectFit: "cover"}}/>

          </motion.div>
        </div>

      </div>

    )
  
}