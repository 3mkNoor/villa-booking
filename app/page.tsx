import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="relative flex justify-center items-end overflow-hidden h-[100svh] lg:h-screen">
        {/* خلفية الصورة والفيديو */}
        <Image
          src="/Hero-Landing-Page-JULY2026.webp"
          alt="villa photo"
          fill
          priority
          className="absolute object-cover object-bottom w-full h-full"
        />
        <iframe
          src="https://player.vimeo.com/video/1206065273?background=1&autoplay=1&loop=1&byline=1&title=1&dnt=1"
          className="absolute object-cover object-bottom w-auto min-w-full min-h-full max-w-none aspect-video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
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
                className="border-none! tracking-widest inline-flex items-center justify-center text-center uppercase font-medium bg-black text-white hover:bg-black/80 h-full text-base px-6 py-4 w-full"
              >
                Search Villas
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}