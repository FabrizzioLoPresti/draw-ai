"use client";
import { useState, useEffect } from "react";

type Props = {
  breakpoint: number;
};

const useScreenSize = ({ breakpoint }: Props): boolean => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < breakpoint);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isSmallScreen;
};

export default useScreenSize;