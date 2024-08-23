import React, { useState } from "react";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdOutlineArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import logo from "../../assets/logoimg.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../FireBase/firebase";
import { removeProduct } from "../../Redux/cartSlice";
import shop from "../../assets/shop.png";

const NavBar = () => {
  const user = useSelector((state) => state.userData.uid);
  const userEmail = useSelector((state) => state.userData.email);
  const cartItems = useSelector((state) => state.cartStore.products);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleCart = () => setCartIsOpen(!cartIsOpen);
  const toggleMenu = () => setIsOpen(!isOpen);

  const logout = async () => {
    await signOut(auth);
    navigate("/Login");
    window.location.reload();
  };

  const goToAddProduct = () => navigate("/AddProduct");
  const goToHome = () => navigate("/");
  const goToProducts = () => navigate("/GetProducts");
  const goToLogin = () => navigate("/Login");
  const goToContact = () => navigate("/ContactUs");

  return (
    <nav className="py-3 text-black px-4 md:px-10 relative">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-24 h-auto md:w-28" />
          <img
            onClick={goToHome}
            src={shop}
            alt="Shop"
            className="w-32 h-auto cursor-pointer md:w-40"
          />
        </div>

        <div className="md:flex md:space-x-10 hidden">
          <div
            onClick={goToHome}
            className="hover:text-black flex cursor-pointer"
          >
            Home
            <MdOutlineArrowDropDown className="mt-[6px]" />
          </div>
          <div
            onClick={goToProducts}
            className="hover:text-black flex cursor-pointer"
          >
            Products
            <MdOutlineArrowDropDown className="mt-[6px]" />
          </div>
          <div
            onClick={goToContact}
            className="hover:text-black flex cursor-pointer"
          >
            Contact Us
            <MdOutlineArrowDropDown className="mt-[6px]" />
          </div>
          
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex">
          <button
              onClick={goToAddProduct}
              className="bg-red-500 text-white py-2 px-4 rounded transition hover:scale-105 hover:bg-slate-100 hover:text-zinc-900 duration-300"
              aria-label="Logout"
            >
              UPLOAD PRODUCTS
            </button>
          </div>
          {user ? (
            <button
              onClick={logout}
              className="bg-red-500 text-white py-2 px-4 rounded transition hover:scale-105 hover:bg-slate-100 hover:text-zinc-900 duration-300"
              aria-label="Logout"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={goToLogin}
              className="bg-red-500 text-white py-2 px-4 rounded transition hover:scale-105 hover:bg-slate-100 hover:text-zinc-900 duration-300"
              aria-label="Login"
            >
              Login
            </button>
          )}

          {user && (
            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleCart}
              >
                <TbShoppingBagCheck size={25} />
                <span className="ml-1 text-sm">{cartItems.length}</span>
              </div>
              {cartIsOpen && (
                <div className="absolute right-0 bg-white border border-gray-300 rounded-lg shadow-lg p-4 mt-2 w-64 z-10">
                  <img src={logo} alt="Logo" className="w-24 h-auto md:w-28" />
                  {cartItems.length > 0 ? (
                    <ul className="space-y-2">
                      {cartItems.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center py-2 px-3 border border-gray-200 rounded-lg"
                        >
                          <div className="flex-1">
                            <h4 className="font-medium">{item.tittle}</h4>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                          <img
                            src={item.image}
                            alt=""
                            className="w-12 h-12 ml-2 object-cover rounded-lg"
                          />
                          <button
                            onClick={() => dispatch(removeProduct(index))}
                            className="ml-2 text-red-500 hover:text-red-700"
                            aria-label="Remove item"
                          >
                            <MdClose size={20} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-gray-500">Your cart is empty.</p>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <div
            onClick={goToHome}
            className="hover:text-black flex justify-center cursor-pointer"
          >
            Home
            <MdOutlineArrowDropDown className="ml-1" />
          </div>
          <div
            onClick={goToProducts}
            className="hover:text-black flex justify-center cursor-pointer"
          >
            Products
            <MdOutlineArrowDropDown className="ml-1" />
          </div>
          <div
            onClick={goToAddProduct}
            className="hover:text-black flex justify-center cursor-pointer"
          >
            Upload Products
            <MdOutlineArrowDropDown className="ml-1" />
          </div>
          <div
            onClick={goToContact}
            className="hover:text-black flex justify-center cursor-pointer"
          >
            Contact Us
            <MdOutlineArrowDropDown className="ml-1" />
          </div>
          {/* {user && (
            <div
              onClick={logout}
              className="hover:text-black flex justify-center cursor-pointer"
            >
              Logout
              <MdOutlineArrowDropDown className="ml-1" />
            </div>
          )}
          {!user && (
            <div
              onClick={goToLogin}
              className="hover:text-black flex justify-center cursor-pointer"
            >
              Login
              <MdOutlineArrowDropDown className="ml-1" />
            </div>
          )} */}
        </div>
      )}

      <div className="text-blue-900 text-xs mt-1 hidden md:block">
        <p>{userEmail}</p>
      </div>
    </nav>
  );
};

export default NavBar;
