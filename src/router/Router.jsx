import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Dashboard from "../dashboard/Dashboard";
import About from "../dashboard/About";
import Skills from "../dashboard/Skills";
import Education from "../dashboard/Education";
import Projects from "../dashboard/Projects";
import Contact from "../dashboard/Contact";
import Explore from "../components/Explore";
import App from "../components/App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<App></App>
        },
        
    
    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
        {
            path:'/dashboard',
            element:<Explore></Explore>
        },
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
