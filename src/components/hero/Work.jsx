import React, { useState, useEffect } from "react";


const Work = () => {
    
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "20%",
      left: "44%",
      isActive: false,
      opacity: 0,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "30%",
      left: "56%",
      isActive: false,
      opacity: 0,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "40%",
      left: "53%",
      isActive: false,
      opacity: 0,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "50%",
      left: "40%",
      isActive: false,
      opacity: 0,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "60%",
      left: "55%",
      isActive: false,
      opacity: 0,
    },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      setImages((prevImages) =>
        prevImages.map((image, index) => {
          const scrollThreshold = windowHeight * (index / 6);
          const isActive = scrollPosition >= scrollThreshold;
          const opacity = isActive ? 1 : 0;

          return {
            ...image,
            isActive,
            opacity,
          };
        })
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full mt-40 mb-60"
    >
    
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[20vw] leading-none font-semibold select-none">
          Ravian
        </h1>
        <h2 className="subheading">
  Turn Data into Decisions, with our{" "}
  <span className="text-purple-500 inline-block relative">
    AI Data Scientist.
    <span className="absolute top-0 left-0 w-full h-full bg-purple-500 rounded-lg blur-2xl opacity-50 animate-pulse"></span>
  </span>
</h2>

      </div>
      <div className="relative max-w-screen-xl mx-auto text-center mt-10">
        {images.map((elem, index) => (
          <img
            key={index}
            className="absolute w-60 rounded-lg -translate-x-[50%] transition-opacity duration-500"
            src={elem.url}
            style={{ top: elem.top, left: elem.left, opacity: elem.opacity }}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Work;