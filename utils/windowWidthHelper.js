import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [windowWidth, setwindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setwindowWidth(
        window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};
