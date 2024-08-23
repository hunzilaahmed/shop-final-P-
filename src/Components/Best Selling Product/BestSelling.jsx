import React from "react";

const BestSelling = () => {
  const products = [
    {
      title: "IPhone 15",
      image:
        "https://media.idownloadblog.com/wp-content/uploads/2022/09/iPhone-14-Pro-wallpaper-mockup-hero-idownloadblog.jpg",
      description:
        "The iPhone 15 supports 5G connectivity and a much sharper and brighter OLED display (versus the iPhone ",
    },
    {
      title: "BMW",
      image:
        "https://www.pixelstalk.net/wp-content/uploads/images6/Awesome-BMW-Wallpaper-HD.jpg",
      description:
        "The BMW Group is the world's leading provider of premium cars and motorcycles and of resources.",
    },
    {
      title: "Cat",
      image: "https://images6.alphacoders.com/135/thumb-1920-1354313.jpeg",
      description:
        "Cats have sharp, retractable (except in the cheetah) claws nocturnal, and their eyes are adapted for seeing in low light.",
    },
  ];

  return (
    <section className="mt-12">
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-6">
          <div className="w-20 sm:w-28 md:w-40 h-1 bg-gray-700 rounded-2xl"></div>
          <h1 className="mx-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 transition-transform duration-300 transform hover:scale-105">
            Featured Products
          </h1>
          <div className="w-20 sm:w-28 md:w-40 h-1 bg-gray-700 rounded-2xl"></div>
        </div>

        <p className="text-gray-600 text-center max-w-xl">
          Discover our best-selling products that are loved by customers for
          their quality and value.
        </p>
      </div>

      <div className="mt-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full mx-auto rounded-lg shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 bg-black h-64 mt-2 text-slate-400 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-3">{product.title}</h3>
                <p>{product.description}</p>
              </div>
              <div className="flex justify-end mt-2">
                <button className="bg-red-600 text-white py-2 px-4 rounded transition hover:scale-105 hover:bg-slate-100 hover:text-zinc-900 duration-300">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
