import React, { useState } from "react";
import logo from "./assets/images/logo.png";
import SideNav from "./SideNav";
import Category from "./Category";
import ImageSlider from "./ImageSlider";

function Header() {

  const [counter,setCounter]=useState(false)
  function handlenavbar(){
    setCounter(!counter)
  }
  const [counter2,setCounter2]=useState(false)
  function handlenavbar2(){
    setCounter2(!counter2)
  }
  return ( 
    <div>
      <div className="flex justify-between lg:justify-normal gap-2  p-0 items-center ">
        {/* Logo */}
        <div>
          <img src={logo} alt="" className=" w-28  lg:w-40 xl:w-56" />
        </div>
        {/* Menubar */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-12 cursor-pointer lg:hidden"
            onClick={handlenavbar}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
       
        {/* Main Navbar */}
        <div className="hidden lg:flex flex-col  gap-4 p-1.5 ">
          <SideNav></SideNav>
        </div>
      </div>
      {
        counter ?<div  style={{width:"100%", height:"100vh" }}
        className={`bg-[#F5F3F3] absolute  top-0  right-full flex flex-col p-3  items-center gap-3 transform transition-transform duration-500 ease-in-out 
      ${counter2?"translate-x-0":"translate-x-full"}`}>
          <p style={{textAlign:"right", fontWeight:"bold"}} onClick={()=> setCounter(!counter)}>X</p>
         
          <Category ></Category>
         
          
          </div>:""
      }
       <ImageSlider></ImageSlider>
    </div>
   
  );
}

export default Header;
