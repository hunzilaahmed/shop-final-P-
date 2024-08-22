import React, { useEffect } from "react";
import BestSelling from "../../Components/Best Selling Product/BestSelling";
import Sale from "../../Components/Sale/Sale";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/banner.jpg";

const Home = () => {
  const navigate = useNavigate();
  const goToproducts = () => {
    navigate("/GetProducts");
  };

  return (
    <>
      <div className=" relative w-full h-screen overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={banner}
          alt="E-commerce Banner"
        />
        <div className="absolute  inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bounce-horizontal">
              Summer Sale – Up to 20% Off!
            </h1>
            <p className="text-lg md:text-xl mb-4 mt-8">
              Discover exclusive deals on your favorite products.
            </p>
            <button
              onClick={goToproducts}
              className="bg-red-600 text-white py-2 px-4 rounded transition hover:scale-105 hover:bg-slate-100 hover:text-zinc-900  duration-300 "
            >
              Shop now
            </button>
          </div>
        </div>
      </div>
      <div>
        <BestSelling />
        <Sale />
      </div>
    </>
  );
};

export default Home;
