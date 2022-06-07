import React from "react";

function SlideDiscrip({ar, en, showHide}) {
  return (
    <div onClick={showHide} >
      <div
        className=" flex justify-between text-green-600 
          bg-gradient-to-br from-green-100 to-white
          items-center border  rounded-md p-1 mb-6 shadow-md shadow-orange-100
          hover:bg-gradient-to-br hover:from-red-200 hover:to-white cursor-pointer  "
      >
        <h1 className="text-xl font-serif font-semibold">{en}</h1>
        <h1 className="text-xl font-serif font-semibold">{ar}</h1>
      </div>
    </div>
  );
}

export default SlideDiscrip;
