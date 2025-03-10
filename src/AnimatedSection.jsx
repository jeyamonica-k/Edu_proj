import React, { useState, useEffect, useRef } from "react";

import image from "./assets/images/slide.jpeg"

const AnimatedSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Adjust visibility trigger threshold
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative flex justify-center items-center min-h-screen overflow-hidden">
      <div className="absolute top-0.5 flex flex-col md:items-center   md:flex-row ">
        
       {/* Image */}

        <div
          className={`w-[90%]  md:w-[40%] xl:w-[40%] p-4 transform transition-all duration-700 ease-in-out ml-3 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <img
            src={image} 
            alt="Feature"
            className=" w-[80%] md:w-[90%] xl:w-[60%]  transition-all duration-700 transform hover:scale-90"

          />
        </div>

        {/* description */}
        <div
          className={ ` w-[90%] md:w-[60%]  xl:w-[70%] text-justify p-6 transform transition-all duration-1000 ease-in-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          
          <h1 className="text-[#192C57] text-xl md:text-2xl  lg:text-4xl font-bold mb-2 p-3 gradient-border ">Welcome to the Indian Council of Vocational and Technical Education (ICVTE)</h1>
          <h2 className=" text-base lg:text-3xl font-medium text-gray-800 mb-2 p-3">Empowering Future Generations through Skill Development</h2>
          <p className="text-black mt-2 text-sm lg:text-xl p-3 ">
          The Indian Council of Vocational and Technical Education (ICVTE) is dedicated to transforming the landscape of vocational and technical education in India. Incorporated under the legislation of the Ministry of Corporate Affairs, Government of India, ICVTE is committed to providing high-quality vocational training programs that equip individuals with the skills and knowledge needed to excel in today’s competitive job market. Our mission is to promote vocational and technical education to ensure that every learner, irrespective of their age or background, has access to the tools necessary for personal and professional growth.
          </p>          
        </div>

        
      </div>
    </div>
  );
};

export default AnimatedSection;