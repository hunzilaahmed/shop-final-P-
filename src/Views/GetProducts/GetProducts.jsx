import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FireBase/firebase";
import "./style.css";
import { useNavigate } from "react-router-dom";

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const addToCartt = (id) => {
    navigate(`/Detail/${id}`);
  };
  const getAllProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "shop Products"));
      const productsList = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setProducts(productsList);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="max-w-7xl border-t mx-auto p-6">
      <h2 className="text-4xl text-center font-bold mb-8">Products</h2>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader border-t-4 border-red-500 border-solid rounded-full w-16 h-16"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.tittle}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Name {product.tittle}</h3>
              <p className="text-gray-600 mt-2">Price : ${product.price}</p>
              <p className="text-gray-700 mt-2">
                Details : {product.description}
              </p>
              <p className="text-gray-500 mt-4">Contact : {product.contact}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => addToCartt(product.id)}
                  className="bg-red-600 text-white py-2 px-4 rounded transition hover:scale-105 hover:bg-slate-100 hover:text-zinc-900 duration-300"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetProducts;
