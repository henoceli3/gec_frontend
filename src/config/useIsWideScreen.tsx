import { useState, useEffect } from "react";

function useIsWideScreen(width: number) {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > width);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > width);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return isWideScreen;
}

export default useIsWideScreen;
