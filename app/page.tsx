'use client'
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

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

      <section className="min-h-screen flex flex-col items-center gap-10 px-5 py-16 lg:gap-12 lg:pt-20 lg:pb-10">
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
      </section>

      <h1 className="text-center leading-[0.85] text-[7.5vw] sm:text-[6.5vw] uppercase ">
        <div>Luxury, Relaxation & </div>
        <div>Experience</div>
      
      </h1>

        <Section name="/1.jpg" />
      
      <section  className="h-screen bg-white">
        <div className="text-[8vw] text-center uppercase">
          <h1>top collections</h1>
        </div>
        
        <AutoCarousel 
        images={["/1.jpg", "/1.jpg", "/1.jpg", "/1.jpg"]}
        speed={60}
        gap={"clamp(0.625rem, 0.625rem + 0vw, 0.625rem)"}
        smoothing={6} 
       />
      </section>
    </>
  );
}


function Section({name} : {name?: string}) {
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
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
            <p className='w-[50vw] text-[5vw] sm:text-[2vw] self-start uppercase mix-blend-difference'>Beauty and quality need the right time to be conceived and realised even in a world that is in too much of a hurry.</p>
            <p className='text-[5vw] uppercase self-end mix-blend-difference'>Nature at its Finest</p>
        </div>
        <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
          <motion.div style={{ y }} className='relative w-full h-full'>

            <Image src={name || "/archeticture.jpeg"} fill loading="lazy" alt="image" style={{objectFit: "cover"}}/>

          </motion.div>
        </div>

      </div>

    )
  
}

interface AutoCarouselProps {
  images: string[]
  /** px/second عند عدم السحب */
  speed?: number
  /** المسافة بين الصور بالـ px */
  gap?: string
  /** معامل تباطؤ الـ momentum بعد الإفلات (0-1)، كل ما قل الرقم كل ما توقف أسرع */
  smoothing?: number
}
 
 function AutoCarousel({
  images,
  speed = 80,
  gap = '24',
  smoothing = 6,
}: AutoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const posRef = useRef(0)
  const singleSetWidthRef = useRef(0)

  const isDraggingRef = useRef(false)
  const dragLastXRef = useRef(0)
  const dragLastTimeRef = useRef(0)
  const dragVelocityRef = useRef(0)
  const currentVelocityRef = useRef(0)

  const [isDragging, setIsDragging] = useState(false)
  const [ready, setReady] = useState(false)

  const allImages = [...images, ...images]

  const applyTransform = useCallback((x: number) => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${x}px, 0, 0)`
    }
  }, [])

  // قياس عرض النسخة الواحدة بدقة
  const measure = useCallback(() => {
    if (!trackRef.current) return
    const total = trackRef.current.scrollWidth
    if (total > 0) {
      singleSetWidthRef.current = total / 2
      setReady(true)
    }
  }, [])

  useEffect(() => {
    measure()

    // ResizeObserver يضمن دقة أكبر عند تغير أحجام الشاشات المختلفة
    const observer = new ResizeObserver(() => measure())
    if (containerRef.current) observer.observe(containerRef.current)
    if (trackRef.current) observer.observe(trackRef.current)

    return () => observer.disconnect()
  }, [measure, images])

  // حلقة الحركة الرئيسية (Animation Loop)
  useEffect(() => {
    if (!ready) return
    let raf = 0
    let last = performance.now()

    function tick(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now

      const width = singleSetWidthRef.current
      if (width <= 0) {
        raf = requestAnimationFrame(tick)
        return
      }

      const target = isDraggingRef.current
        ? -speed + dragVelocityRef.current
        : -speed

      const lerpFactor = 1 - Math.exp(-smoothing * dt)
      currentVelocityRef.current +=
        (target - currentVelocityRef.current) * lerpFactor

      posRef.current += currentVelocityRef.current * dt

      // معادلة modulo آمنة لمنع التداخل عند السحب السريع
      posRef.current = ((posRef.current % width) - width) % width

      applyTransform(posRef.current)

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [ready, speed, smoothing, applyTransform])

  function onPointerDown(e: React.PointerEvent) {
    isDraggingRef.current = true
    setIsDragging(true)
    dragLastXRef.current = e.clientX
    dragLastTimeRef.current = performance.now()

    // ربط الـ Pointer Capture بالـ Container الرئيسي
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId)
    }
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!isDraggingRef.current) return

    const now = performance.now()
    const dt = Math.max((now - dragLastTimeRef.current) / 1000, 1 / 240)
    const instantVelocity = (e.clientX - dragLastXRef.current) / dt

    dragVelocityRef.current += (instantVelocity - dragVelocityRef.current) * 0.5

    dragLastXRef.current = e.clientX
    dragLastTimeRef.current = now
  }

  function onPointerUp(e: React.PointerEvent) {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    setIsDragging(false)
    dragVelocityRef.current = 0

    if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
      containerRef.current.releasePointerCapture(e.pointerId)
    }
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerLeave={onPointerUp}
      className={`relative w-full overflow-hidden select-none touch-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
    >
      <div
        ref={trackRef}
        className="flex will-change-transform"
        style={{ gap: `${gap}` }}
      >
        {allImages.map((src, i) => (
          <div
            key={`${src}-${i}`}
             className="relative aspect-4/5 w-[92vw] min-w-0 shrink-0 overflow-hidden 
             md:aspect-4/5 md:w-[32vw] md:min-w-87.5 md:max-w-137.5"
          >
              <Image
              src={src}
              alt="photo"
              fill
              sizes="(max-width: 768px) 92vw, 32vw"
              onLoad={measure}
              draggable={false}
              className={`object-cover object-center pointer-events-none transition-transform duration-800 ease-out ${
                isDragging ? "scale-95" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}