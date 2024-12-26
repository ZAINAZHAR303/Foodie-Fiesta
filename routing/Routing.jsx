import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
 
import Register from "../src/pages/Register";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import AboutUs from "../src/pages/AboutUs";
import ContactUs from "../src/pages/ContactUs";
// import Register from "../pages/register/Register";
  // import Profile from "../components/profile/Profile";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path:"/signup",
      element: <Register/> 
    },
    
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/aboutus",
      element: <AboutUs/>
    },
    {
      path:"/contact",
      element: <ContactUs/>
    }
     
  ]);
  
  export default function Routing(params) {
    return (
      <RouterProvider router={router} />
    )
  }