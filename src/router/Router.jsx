import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../components/Home";
import Dashboard from "../dashboard/Dashboard";
import About from "../dashboard/About";
import Skills from "../dashboard/Skills";
import Education from "../dashboard/Education";
import Projects from "../dashboard/Projects";
import Contact from "../dashboard/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        }
    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
        {
            path:'about',
            element:<About></About>
        },
        {
            path:'skills',
            element:<Skills></Skills>
        },
        {
            path:'education',
            element:<Education></Education>
        },
        {
            path:'projects',
            element:<Projects></Projects>
        },
        {
            path:'contact',
            element:<Contact></Contact>
        },
    ]
  },
]);
export default router;
