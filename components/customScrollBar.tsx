"use client"
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLenisInstance } from "./lenisContext";
import { useMenuStore } from "./useMenuStore";

export function CustomScrollbar() {
  const isOpen = useMenuStore((state)=> state.isOpen);

  const lenis = useLenisInstance();
  const progress = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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
  }, [lenis, progress, isDragging]);
  
  const thumbHeight = 80;
  const y = useTransform(progress, [0, 1], [0, Math.max(0, viewportHeight - thumbHeight)]);
  
  function updateProgressFromPointer(clientY: number) {
    if (!trackRef.current || !lenis) return;
    
    const trackRect = trackRef.current.getBoundingClientRect();
    const trackHeight = trackRect.height;
    const relativeY = clientY - trackRect.top - thumbHeight / 2;
    const newProgress = Math.min(Math.max(relativeY / (trackHeight - thumbHeight), 0), 1);
    
    progress.set(newProgress);
    
    const scrollTarget = newProgress * lenis.limit;
    lenis.scrollTo(scrollTarget, { 
      immediate: false,
      duration: 0.15,
      easing: (t) => t
    });
  }
  
  function handlePointerDown(e: React.PointerEvent) {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateProgressFromPointer(e.clientY);
  }
  
  function handlePointerMove(e: React.PointerEvent) {
    if (!isDragging) return;
    updateProgressFromPointer(e.clientY);
  }
  
  function handlePointerUp() {
    setIsDragging(false);
  }
  
  
  if (!lenis) return null;
  return (
    <div  ref={trackRef} className=" group fixed right-0 top-0 mr-1 h-dvh w-2.75 z-50 overflow-hidden" 
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div 
        style={{ y, height: thumbHeight }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        initial={{opacity: 0.5, scaleX: 0}}
        animate={{opacity: isOpen ? 0 : isScrolling || isHovering || isDragging ? 0.5 : 0, scaleX: isHovering ? 1.45 : 1}}
        transition={{duration: .3}}
        className="absolute top-0 right-0  active:cursor-grabbing cursor-grab m-0.5 w-1.75 h-20 bg-black opacity-50 rounded-[10px]"
      />
    </div>
  );
}