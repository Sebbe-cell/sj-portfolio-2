import { useState, useEffect } from "react";

export const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(
        window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowHeight;
};
