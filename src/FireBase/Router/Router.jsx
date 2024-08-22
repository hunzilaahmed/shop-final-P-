import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Layout from "../../Views/Layout/Layout";
import Home from "../../Views/Home.jsx/Home";
import LoginPage from "../../Views/LoginPage/LoginPage";
import AddProduct from "../../Views/AddProduct/AddProduct";
import GetProducts from "../../Views/GetProducts/GetProducts";
import Register from "../../Views/Register/Register";
import ContactUs from "../../Views/ContactUs/ContactUs";
import Detail from "../../Views/Detail/Detail";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { clearUser, setUser } from "../../Redux/userslice";

export default function Router() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData.uid);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user1) => {
      if (user1) {
        dispatch(
          setUser({
            uid: user1.uid,
            email: user1.email,
          })
        );
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Login",
          element: <LoginPage />,
        },
        {
          path: "/AddProduct",
          element: user ? <AddProduct /> : <Navigate to="/Login" />,
        },
        {
          path: "/GetProducts",
          element: <GetProducts />,
        },
        {
          path: "/Register",
          element: <Register />,
        },
        {
          path: "/ContactUs",
          element: <ContactUs />,
        },
        {
          path: "/Detail/:id",
          element: <Detail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
