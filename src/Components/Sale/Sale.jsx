import React from "react";

const Sale = () => {
  return (
    <section className="relative mt-32  mx-auto w-[80%]  rounded-lg h-[80vh] overflow-hidden">
      <img
        src="https://www.timeoutdubai.com/cloud/timeoutdubai/2023/05/24/Dubai-super-sale-4.jpg"
        alt="Sale Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Big Sale!
        </h2>
        <p className="text-lg md:text-xl text-center">
          Enjoy up to 50% off on selected items. Don’t miss out on the best deals!
        </p>
        <button className="bg-red-600 text-white py-2 px-4 mt-3 rounded transition hover:scale-105 hover:bg-slate-100 hover:text-zinc-900  duration-300 ">
              Go now
            </button>
      </div>
    </section>
  );
};

export default Sale;
