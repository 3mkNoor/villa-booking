"use client"
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useLenisInstance } from "./lenisContext";
import { useMenuStore } from "./useMenuStore";

export function CustomScrollbar() {
  const isOpen = useMenuStore((state)=> state.isOpen);

  const lenis = useLenisInstance();
  const progress = useMotionValue(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
  
    const updateHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);


  useEffect(() => {
    if (!lenis) return;


    const handleScroll = ({ progress: p ,velocity}: { progress: number, velocity: number }) => {

      progress.set(p);
      setIsScrolling(true);


      setIsScrolling(Math.abs(velocity) > 0.05);

    };

    lenis.on("scroll", handleScroll);
    return () => {lenis.off("scroll", handleScroll);

  }
  }, [lenis, progress]);

  const thumbHeight = 80;
  const y = useTransform(progress, [0, 1], [0, Math.max(0, viewportHeight - thumbHeight)]);
  
  return (
    <div className="fixed right-0 top-0 h-screen w-2.75 z-50 overflow-hidden ">
      <motion.div 
        style={{ y }}
        initial={{opacity: 0.5}}
        animate={{opacity: isOpen ? 0 : isScrolling ? 0.5 : 0}}
        transition={{duration: .3}}
        className="absolute top-0 right-0 cursor-grab m-0.5 w-2 h-20 bg-black opacity-50 rounded-[10px]"
      />
    </div>
  );
}