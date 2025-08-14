import { useRoutes } from "react-router-dom";
import General from "../Layouts/general";
import Home from "../GuestPages/Home";
import About from "../GuestPages/About";
import Services from "../GuestPages/Services";
import Project from "../GuestPages/Project";
import ProjectDetail from "../GuestPages/ProjectDetails";
import Contact from "../GuestPages/Contact";








export default function Routers () {
    return (
        useRoutes(
            [
                {
                    path : "/",
                    element: <General />,
                    children:  [
                        {path: "/", element: <Home />},
                    {path: "/about", element: <About />},
                    {path: "/services", element: <Services />},
                    {path: "/project", element: <Project />},
                     {path: "/contact", element: <Contact />},
 {path: "/project/details", element: <ProjectDetail />},
                    ]
                },
             
              
            ]
        )
    )
}