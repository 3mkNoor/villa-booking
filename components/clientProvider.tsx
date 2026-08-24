"use client";
import { LenisProvider, useLenisInstance } from "./lenisContext";
import { CustomScrollbar } from "./customScrollBar";
// import { MenuProvider, useMenu } from "./menuContext";
import { useEffect } from "react";
import { useMenuStore } from "./useMenuStore";

function ScrollController() {
  const isOpen = useMenuStore((state)=> state.isOpen );
  const lenis = useLenisInstance();

  useEffect(() => {
    if (!lenis) return;
    if (isOpen) lenis.stop();
    else lenis.start();
  }, [isOpen, lenis]);

  return <CustomScrollbar/>;
}

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
      <LenisProvider>
        <ScrollController />
        {children}
      </LenisProvider>
  );
}