import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import image1 from "./assets/images/one.jpeg";
import image2 from "./assets/images/two.jpeg";
import image3 from "./assets/images/three.png";
import image4 from "./assets/images/four.jpeg";
import Coursecard from "./Coursecard";

// Replace with your actual images
const images = [
  {src:image1,
  heading: "Foster Skill Development:",
  para: "Provide industry-relevant skills that enhance employability and entrepreneurship opportunities."
},
   {src:image2,
    heading: "Our Mission:",
    para: "At ICVTE, our mission is to bridge the gap between education and employment by offering comprehensive vocational training programs.",
   },

   {src:image3,
    heading: "Support Economic Growth:",
    para: "Contribute to the nation’s economic development by creating a skilled workforce that meets the demands of various industries."
   }, 
   {src:image4,
    heading: "Promote Vocational Education:",
    para: "Democratize education by making it accessible to all, regardless of their socio-economic status."
   }];


const ImageSlider = () => {
  return (
    <>
    <div className="w-full  relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 8000 }}
        loop={true}
        className="custom-swiper"
      >
        {images.map((img,index) => (
          <SwiperSlide
            key={index}
            className=" relative flex items-center justify-center"
          >
            <img
              src={images[index].src}
              alt={`Slide ${index + 1}`}
              className=" w-full lg:h-[500px] xl:h-[550px] object-cover"
            />
             <div
        key={index}
        className=" lg:w-[70%] absolute bottom-10  left-0 mx-auto  text-white  bg-[#00000080] bg-opacity-5   rounded-md transition-all duration-500 transform translate-y-10 opacity-0 animate-fade-in-up md:bottom-12 lg:bottom-10"
      >
        { <div className=" p-0.5 m-2  ">
        <h1 className=" text-base  md:text-3xl md:m-2 lg:text-4xl "> {images[index].heading}</h1>
        <p className=" text-base md:text-xl lg:text-2xl"> {images[index].para}</p>
        </div> 
       }
      </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <Coursecard></Coursecard>
    </>
  );
};

export default ImageSlider;
