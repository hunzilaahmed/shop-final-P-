import React, { useState } from "react";
import { db, storage } from "../../FireBase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

const AddProduct = () => {
  const [tittle, setTittle] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const addproducts = async () => {
    setLoading(true);
    try {
      const storageRef = ref(storage, `shop-images/${image.name}`);
      await uploadBytes(storageRef, image);
      const url =await getDownloadURL(storageRef);
      const docRef = await addDoc(collection(db, "shop Products"), {
        tittle,
        price,
        contact,
        description,
        image: url,
      });
      console.log("Succesfully added");
      console.log("Document written with ID: ", docRef.id);

      setTittle("");
      setPrice("");
      setContact("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-2xl mt-12 mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Add New Product
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Product Name :
            </label>
            <input
              type="text"
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Price :
            </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Description :
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              rows="4"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Contact No :
            </label>
            <input
              type="number"
              
              onChange={(e) => setContact(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Image :
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={addproducts}
              className="bg-red-600 text-white py-2 px-4 rounded transition hover:scale-105 hover:bg-slate-100 hover:text-zinc-900  duration-300 "
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
