import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import reviews from "../data";
import { useState } from "react";

function Testimonial() {
  const [index, setIndex] = useState(0);

  function leftChevronHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightChevronHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white mt-10 shadow-md hover:shadow-xl rounded-md transition-all duration-200 flex flex-col items-center justify-center p-10">
      <Card review={reviews[index]} />

      <div className="flex items-center gap-4">
        <button
          className="cursor-pointer text-violet-400 hover:text-violet-500"
          onClick={leftChevronHandler}
        >
          <FaChevronLeft />
        </button>
        <button
          className="cursor-pointer text-violet-400 hover:text-violet-500"
          onClick={rightChevronHandler}
        >
          <FaChevronRight />
        </button>
      </div>

      <button
        className="bg-violet-400 hover:bg-violet-500 px-10 py-2 text-white font-bold text-lg rounded-md shadow-md hover:shadow transition-all duration-200 cursor-pointer mt-6"
        onClick={surpriseHandler}
      >
        Surprise Me
      </button>
    </div>
  );
}

export default Testimonial;
