import React from "react";
import Category from "./Category";

function SideNav() {
  return (
    <>
      <div>
        <h1 className="text-red-700 text-2xl font-bold text-center my-1 xl:text-4xl ">
          Indian Council Of Vocational And Technical Education (ICVTE)
        </h1>
      </div>
      <div className="border-b-2"></div>
      <div className="   flex  gap-3.5 items-center text-blue-800 text-xl   xl:text-2xl justify-between ">
      <Category></Category>
      </div>
      
    </>
  );
}

export default SideNav;
