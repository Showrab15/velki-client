import  { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import './BackToTopButton.css'
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
 
  return (
    <div>
      {isVisible && (
      <button className="backToTopButton-animation bg-[#f4e5c2] text-gray-700 text-[15px]
       font-medium font-serif cursor-pointer 
      fixed right-[40px] bottom-[50px] md:bottom-[40px] md:right-[40px] rounded-md flex
       gap-3 justify-center items-center  p-2 " onClick={scrollToTop}>
     <span className="font-semibold"> <FaArrowUp /></span>
    </button>
      )}
    </div>
  );
};

export default BackToTopButton;