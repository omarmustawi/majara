import { useEffect, useState } from "react";
const useScrollY = () => {
  const [posY, setPosY] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setPosY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return posY;
};
export default useScrollY;


// import { useEffect, useState } from "react";

// const useScrollFixedBar = (scrollThreshold: number) => {
//   const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > scrollThreshold) {
//         setShowScrollTop(true);
//       } else {
//         setShowScrollTop(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrollThreshold]);

//   return showScrollTop;
// };

// export default useScrollFixedBar;
