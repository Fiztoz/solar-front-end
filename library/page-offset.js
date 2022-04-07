import { useState, useEffect } from "react";

export default function usePageOffset() {
  const [offset, setOffset] = useState({ pageXOffset: null, pageYOffset: null });

  useEffect(() => {
    function getOffset() {
      const { pageXOffset: x, pageYOffset: y } = window;
      return {
        x,
        y,
      };
    }
    function handleScroll() {
      setOffset(getOffset());
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return offset;
}
