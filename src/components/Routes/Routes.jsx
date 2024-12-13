import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import User from "../User/User";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children: [
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/user",
            loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
            element: <User/>
        },
        {
            path: "/contact",
            element: <Contact/>
        }
      ]
    },
    
  ]);