import React from 'react'

function Category() {
  return (
    <>
        <p className="cursor-pointer  hover:text-red-700">Home</p>
        <p className="cursor-pointer  hover:text-red-700">About Us</p>
        <p className="cursor-pointer  hover:text-red-700">Courses</p>
        <p className="cursor-pointer  hover:text-red-700">Procedure</p>
        <p className="cursor-pointer  hover:text-red-700">Contact Us</p>
        <p
          className="
          relative p-2 bg-blue-950 text-white cursor-pointer border border-transparent rounded-md 
          shadow-2xl transition-all duration-500
          hover:bg-transparent hover:text-blue-950 hover:shadow-none
          before:absolute before:top-0 before:left-0 before:w-0 before:h-[2px]
          before:bg-red-700 before:transition-all before:duration-500
          hover:before:w-full
          after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px]
          after:bg-red-700 after:transition-all after:duration-500
          hover:after:w-full
          before:shadow-[0_5px_15px_rgba(0,0,0,0.4)]
          after:shadow-[0_-5px_15px_rgba(0,0,0,0.4)]"
        >
          Institute Login
        </p>
        <p
          className="
          relative p-2 bg-blue-950 text-white cursor-pointer border border-transparent rounded-md 
          shadow-2xl transition-all duration-500
          hover:bg-transparent hover:text-blue-950 hover:shadow-none
          before:absolute before:top-0 before:left-0 before:w-0 before:h-[2px]
          before:bg-red-700 before:transition-all before:duration-500
          hover:before:w-full
          after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px]
          after:bg-red-700 after:transition-all after:duration-500
          hover:after:w-full
          before:shadow-[0_5px_15px_rgba(0,0,0,0.4)]
          after:shadow-[0_5px_15px_rgba(0,0,0,0.4)]"
             
        >
          Admin Login
        </p>
      </>
  )
}

export default Category