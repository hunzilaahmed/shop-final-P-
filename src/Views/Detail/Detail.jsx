import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../FireBase/firebase";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
// import { addToCart } from "../../Redux/cartSlice";

const Detail = () => {
  const dispatch=useDispatch()
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      getSingleProduct();
    }
  }, [id]);

  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, "shop Products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        setError("No such document!");
      }
    } catch (error) {
      setError("Failed to fetch data: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-solid rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="flex flex-col  md:flex-row bg-gray-50 p-6 md:p-12">
      <div className="flex justify-center mb-6 md:mb-0">
        <img
          src={product.image}
          alt={product.tittle}
          className="w-full md:w-96 h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      <div className="flex flex-col justify-center md:pl-6">
        <h1 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4 hover:text-red-500 transition-colors duration-300">
          {product.tittle}
        </h1>
        <p className="text-gray-600 mb-4">Details: {product.description}</p>
        <p className="text-lg font-semibold text-gray-900 mb-4">
          Price: ${product.price}
        </p>
        <p className="text-gray-600 mb-4">Contact: {product.contact}</p>
        <button
        onClick={()=>dispatch(addToCart(product))}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-600"
        >
          Add To cart
        </button>
      </div>
    </div>
  );
};

export default Detail;
