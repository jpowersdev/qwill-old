import { useEffect, useState } from "react";

const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState();

  const handleScroll = () => setScrollTop(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollTop;
};

export { useScrollTop };
