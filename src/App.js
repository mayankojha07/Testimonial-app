import React from "react";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="font-bold text-4xl">Our Testimonials</h1>
        <div className="bg-violet-400 h-[5px] w-1/2 mx-auto mt-1"></div>
      </div>

      <Testimonial />
    </div>
  );
};

export default App;
