import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import User from "../User/User";
import UserDetails from "../UserDetails/UserDetails";
import Posts from "../Posts/Posts";
import PostsDetails from "../PostsDetails/PostsDetails";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/user",
            loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
            element: <User/>
        },
        {
            path: "/user/:userId",
            loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
            element: <UserDetails/>
        },
        {
            path: "/post",
            loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
            element: <Posts/>
        },
        {
            path: "/post/:postId",
            loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
            element: <PostsDetails/>
        }
      ]
    },
    
  ]);