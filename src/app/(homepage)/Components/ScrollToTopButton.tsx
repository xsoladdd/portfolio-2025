import { useEffect, useState } from "react";
import {
  IoArrowUp,
  IoArrowUpCircle,
  IoArrowUpCircleOutline,
} from "react-icons/io5";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="w-[70px] h-[70px] rounded-full bg-primary/50 fixed right-6 bottom-6 flex place-content-center place-items-center text-white"
        // style={{
        //   position: "fixed",
        //   bottom: "20px",
        //   right: "20px",
        //   padding: "10px 20px",
        //   fontSize: "16px",
        //   backgroundColor: "#000",
        //   color: "#fff",
        //   border: "none",
        //   borderRadius: "5px",
        //   cursor: "pointer",
        // }}
      >
        <IoArrowUpCircleOutline size="50" />
      </button>
    )
  );
};

export default ScrollToTopButton;
