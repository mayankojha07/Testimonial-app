import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

function Card({ review }) {
  return (
    <div className="relative flex flex-col">
      <div className="relative md:absolute top-[-7rem] mx-auto z-[10]">
        <img
          className="w-[140px] h-[140px] rounded-full object-cover aspect-square z-40 sticky"
          src={review.image}
          alt={review.name}
        />
        <div className="bg-violet-500 absolute top-[-6px] h-[140px] w-[140px] rounded-full aspect-square left-[10px] z-30"></div>
      </div>

      <div className="text-center mt-7">
        <h3 className="font-bold text-lg md:text-2xl tracking-wider capitalize">
          {review.name}
        </h3>
        <p className="text-sm uppercase text-violet-300">{review.job}</p>
      </div>

      <div className="mx-auto text-violet-400 mt-5 w-fit">
        <FaQuoteLeft />
      </div>

      <div className="mt-4 text-center text-slate-500">
        <p>{review.text}</p>
      </div>

      <div className="mx-auto text-violet-400 mt-5 mb-5 w-fit">
        <FaQuoteRight />
      </div>
    </div>
  );
}

export default Card;
