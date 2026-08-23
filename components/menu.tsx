"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react"

export function Menu() {
  const [open, setOpen] = useState(false);
  const [interactive, setInteractive] = useState(false);

   const titles = [
  { name: "identify", image: "/mobile-one.webp" },
  { name: "advertising", image: "/archeticture.jpeg" },
  { name: "multimedia", image: "/uploads/Baillait_multimedia-420x190.jpg" },
  { name: "cgi + motion", image: "/uploads/Baillait_cgi-420x190.jpg" },
  ];

  return ( 
    <header className="fixed z-100 w-full">
      <button 
        className="group absolute right-0 top-0 m-3 rounded-full border border-black bg-white h-14 w-14  cursor-pointer z-50 duration-300  hover:text-white
        before:content-[''] before:absolute before:inset-0 before:origin-center  before:bg-black before:rounded-full before:scale-0 hover:before:scale-100 before:duration-300 before:-z-10
        " 
        onClick={() => setOpen(true)}
      >
        <span 
          className="
            relative block w-8.75 m-auto
            before:content-[''] before:block before:w-8.75 before:h-0.5 before:my-0.75 before:bg-current
            before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.215,0.61,0.355,1)]
            after:content-[''] after:block after:w-8.75 after:h-0.5 after:my-0.75 after:bg-current
            after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.215,0.61,0.355,1)]
          "
        />
      </button>

      <motion.nav 
        initial={{ height: 0 }} 
        animate={{ height: open ? "100vh" : 0 }} 
        transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1], delay: 0.1 }} 
        onAnimationComplete={() => setInteractive(open)}
        onAnimationStart={() => { if (!open) setInteractive(false); }}
        className={`fixed top-0 right-0 w-full max-h-screen bg-white z-50 flex justify-end overflow-hidden ${interactive  ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div className="w-3/16  h-screen relative shrink-0 pt-5 hidden md:flex flex-col justify-between text-xs font-mono">
          <motion.div 
            className={`
              flex  justify-between w-full h-full relative px-2.5 text-[11px] 
              before:content-[''] before:absolute before:top-0 before:right-0 before:w-px before:h-full before:bg-black
              before:origin-top before:transition-transform before:duration-600 before:[transition-delay:var(--delay)]  
              ${open ? "before:scale-y-100" : "before:scale-y-0"}
            `}
            style={{ '--delay': open ? `400ms` : "0ms" } as React.CSSProperties}
          >
            <motion.span
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: open ? 0 : "-20px", opacity: open ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: open ? 0.65 : 0 }}
            >
              <HoverFillLink href="#" fillClassName="py-0.5">Studio bllaat</HoverFillLink>
            </motion.span>

            <motion.span
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: open ? 0 : "-20px", opacity: open ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: open ? 0.65 : 0 }}
            >
              <HoverFillLink href="#" fillClassName="py-0.5">English</HoverFillLink>
            </motion.span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: open ? 1 : 0 }} 
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: open ? 0.75 : 0 }}  
            className="p-2.5"
          >
            © 2026
          </motion.p>
        </div>

        {/* 2. العمود الأيمن (13/16) */}
        <div className="relative w-full md:w-13/16  h-screen flex flex-col shrink-0 text-[13vw] md:text-[8vw] leading-[0.85] px-5 uppercase">

          {/* العناوين والروابط العلوية */}
          <div className="w-full cursor-pointer flex-1">
            {titles.map((title, index) => (
              <div 
              key={title.name} 
              className={`
                relative flex justify-between items-center w-full 
                before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-px before:bg-black
                before:origin-left before:transition-transform before:duration-600 before:[transition-delay:var(--delay)]  
                ${open ? "before:scale-x-100" : "before:scale-x-0"}
              `}
              style={{ '--delay': open ? `${300 + index * 60}ms` : "0ms" } as React.CSSProperties}
            >
              <Title name={title.name} open={open} i={index}  cn="peer" />

              <span 
                className="
                  absolute -top-px -bottom-px 
                  w-[calc(25%+0.625rem)]
                  overflow-hidden bg-black
                  scale-y-0
                  origin-bottom
                  transition-transform duration-200 ease-[cubic-bezier(0.215,0.61,0.355,1)]
                  peer-hover:scale-y-100
                  peer-hover:origin-top
                  pointer-events-none
                "
                style={{ right: "calc(100% + 1.25rem)" }}
              >
                <span 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${title.image})` }}
                />
              </span>

              {/* زر الإغلاق Exit Button */}
              {index === 0 && (
                <motion.button 
                  initial={{ top: "-150%" }} 
                  animate={{ top: open ? 0 : "-150%" }} 
                  transition={{ duration: 0.4, delay: 0.4 }} 
                  onClick={() => setOpen(false)} 
                  className={`
                    group/close absolute w-[15%] right-0 top-0 bottom-0 h-full border-none! text-black flex items-center justify-center cursor-pointer
                      
                    after:content-[''] after:absolute after:top-0 after:bottom-0 after:left-0 after:-right-5 after:bg-black after:z-0
                    after:transform after:scale-y-0 after:origin-bottom
                    after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.215,0.61,0.355,1)]
                    hover:after:scale-y-100
                    hover:after:origin-top

                    before:content-[''] before:absolute before:top-0 before:left-0 before:w-px before:h-full before:bg-black before:z-10 before:-my-4!
                    before:origin-top before:transition-transform before:duration-600 before:[transition-delay:var(--delay)]
                    group-hover/close:before:bg-white

                    ${open ? "before:scale-y-100" : "before:scale-y-0"}
                  `}
                  style={{ '--delay': open ? `400ms` : "0ms" } as React.CSSProperties}
                >
                  <svg 
                    viewBox="0 0 68 68" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-full h-full aspect-square relative z-10 p-3"
                  >
                    <path d="M1.5 1.5L67 67" className="stroke-black group-hover/close:stroke-white transition-colors duration-200" strokeWidth=".7"></path>
                    <path d="M66.5 1L0.999997 66.5" className="stroke-black group-hover/close:stroke-white transition-colors duration-200" strokeWidth=".7"></path>
                  </svg>
                </motion.button>
              )}
              </div>
            ))}

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: open ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay: open ? 0.75 : 0 }}
              className="flex text-[6vw] md:text-[2.5vw]  mt-3.5 font-normal"
            >
              <div className="w-1/2 md:w-7/13">
                <HoverFillLink fillClassName="py-2" href="#" >About</HoverFillLink>
              </div>

              <div className="w-1/2 md:w-3/13">
                <HoverFillLink href="#" fillClassName="py-2" >Let&apos;s Talk</HoverFillLink>
              </div>
            </motion.div>
          </div>

          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.6, delay: open ? 0.75 : 0 }}
          className="w-full pb-3 text-xs md:text-sm font-sans normal-case shrink-0"
          >
          <div className="flex flex-wrap md:flex-nowrap items-end justify-between gap-y-4">
            <div className="w-1/2 md:w-[calc(7/13*100%)]">
              <ul className="flex flex-col space-y-0.5 mb-5">
                <li><HoverFillLink className="inline-block" href="#">Instagram</HoverFillLink></li>
                <li><HoverFillLink className="inline-block" href="#">Behance</HoverFillLink></li>
                <li><HoverFillLink className="inline-block" href="#">Facebook</HoverFillLink></li>
                <li><HoverFillLink className="inline-block" href="#">LinkedIn</HoverFillLink></li>
              </ul>
            </div>

            <div className="w-1/2 md:hidden order-1 self-start">
              <a href="tel:+10000000000" className="group block hover:opacity-70 transition-opacity">
                +1 000 000 0000 ↗︎
              </a>
            </div>

            <address className="w-1/2 md:w-[calc(3/13*100%)] not-italic leading-snug order-2 md:order-0">
              <a href="#" className="group block hover:opacity-70 transition-opacity">
                Baillat Studio<br />
                773 rue Rachel E<br />
                Montréal, Canada ↗︎
              </a>
            </address>

            <div className="w-1/2 md:hidden order-3">
              <p>© Baillat Studio 2026</p>
            </div>

            <div className="hidden md:block  md:w-[calc(3/13*100%)]">
              <a href="tel:+10000000000" className="group block hover:opacity-70 transition-opacity">
                +1 000 000 0000 ↗︎
              </a>
            </div>
          </div>
          </motion.div>

        </div>
      </motion.nav>
    </header>
  )
}

interface TitleProps {
  name: string;
  open: boolean;
  i: number;
  cn: string;
}

export function Title({ name, open, i, cn }: TitleProps) {
  return (
    <Link 
      href={"/"} 
      className={`group block relative ${i === 0 ? "w-[85%]" : "w-full"} ${cn}`}
    >
      <div 
      className={`
        relative py-2.5 flex items-center z-0 w-full

        after:content-[''] after:absolute 
        after:-top-px after:-bottom-px 
        after:-left-5.5 ${i === 0 ? "after:-right-0.5" : "after:-right-5"}
        after:bg-black after:-z-10
        after:transform after:scale-y-0 after:origin-bottom
        after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.215,0.61,0.355,1)]
        group-hover:after:scale-y-100
        group-hover:after:origin-top
        [backface-hidden] [-webkit-backface-visibility:hidden]
      `}
    >
        <div className="overflow-hidden w-full">
          <motion.div
            initial={{ y: "-200%", scaleY: 2 }}
            animate={{
              y: open ? "0%" : "-200%",
              scaleY: open ? 1 : 2,
            }}
            transition={{
              duration: 0.65,
              ease: [0.645, 0.045, 0.355, 1],
              delay: open ? -i * 0.09 + 0.5 : 0,
            }}
            className="block origin-top will-change-transform"
          >
            <span className="relative z-10 block transition-colors duration-200 group-hover:text-white">
              {name}
            </span>
          </motion.div>
        </div>
      </div>
    </Link>
  );
}


interface HoverFillLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  fillClassName?: string;
}

export function HoverFillLink({ href, children, className = "", fillClassName = "" }: HoverFillLinkProps) {
  return (
    <Link href={href} className={`group relative block ${className}`}>
      <span 
        className={`
          relative flex items-center z-0 w-full
          after:content-[''] after:absolute after:-inset-px after:bg-black after:-z-10
          after:origin-bottom after:scale-y-0
          after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.215,0.61,0.355,1)]
          group-hover:after:scale-y-100
          group-hover:after:origin-top
          ${fillClassName}
        `}
      >
        <span className="relative z-10 block transition-colors duration-200 group-hover:text-white">
          {children}
        </span>
      </span>
    </Link>
  );
}