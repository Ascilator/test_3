import { useEffect, useState } from "react";

const ITEMS_PER_SCREEN = 30;

export const useScroll = () => {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_SCREEN);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    if (totalHeight - scrollPosition <= windowHeight) {
      setVisibleItems(
        (prevVisibleItems) => prevVisibleItems + ITEMS_PER_SCREEN
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { visibleItems };
};
