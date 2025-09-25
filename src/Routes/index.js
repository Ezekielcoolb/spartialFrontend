import { useRoutes } from "react-router-dom";
import General from "../Layouts/general";
import Home from "../GuestPages/Home";
import About from "../GuestPages/About";
import Services from "../GuestPages/Services";
import Project from "../GuestPages/Project";
import ProjectDetail from "../GuestPages/ProjectDetails";
import Contact from "../GuestPages/Contact";
import UserDashboardLayout from "../Controller.js/UserController";
import Dashboard from "../UserPages/Dashboard";
import DashboardHome from "../UserPages/DashboardHome";
import SliderSection from "../UserPages/HomePage/SliderSection";
import AboutSectionHome from "../UserPages/HomePage/AboutSection";
import DocumentSectionHome from "../UserPages/HomePage/DocumentSection";
import CounterSectionHome from "../UserPages/HomePage/CounterSection";
import WhyChooseSectionHome from "../UserPages/HomePage/WhyChooseSection";
import TestimonySectionHome from "../UserPages/HomePage/TestimoneySection";
import AboutusUser from "../UserPages/AboutusUser";
import AboutSectionAbout from "../UserPages/AboutPage/AboutUsAbout";
import MissionVisionSection from "../UserPages/AboutPage/MissionVisionSection";
import AboutPageCounter from "../UserPages/AboutPage/AboutPageCounter";
import AboutPageTeams from "../UserPages/AboutPage/AboutPageTeams";
import ProjectPage from "../UserPages/ProjectPage";
import EnquirySectionHome from "../UserPages/HomePage/EnqiryPage";
import ServiceUserPage from "../UserPages/ServicePage";
import WebSetting from "../UserPages/WebSetting";
import ServiceDetail from "../GuestPages/ServiceDetails";

export default function Routers() {
  return useRoutes([
    {
      path: "/",
      element: <General />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/services", element: <Services /> },
         { path: "/services/details/:id", element: <ServiceDetail /> },
        { path: "/project", element: <Project /> },
        { path: "/contact", element: <Contact /> },
        { path: "/project/details", element: <ProjectDetail /> },
      ],
    },

    {
      path: "/users",
      element: <UserDashboardLayout />,
      children: [
        // { path: "/users/dashboard", element: <Dashboard /> },
        { path: "/users/dashboard", element: <DashboardHome /> },
         { path: "/users/aboutus", element: <AboutusUser /> },
        { path: "/users/homeSliderSection", element: <SliderSection /> },
        { path: "/users/homeAboutSection", element: <AboutSectionHome /> },

        {
          path: "/users/homeDocumentSection",
          element: <DocumentSectionHome />,
        },
        { path: "/users/homeCounterSection", element: <CounterSectionHome /> },
        {
          path: "/users/homeWhyChooseSection",
          element: <WhyChooseSectionHome />,
        },
        {
          path: "/users/homeWTestimonySection",
          element: <TestimonySectionHome />,
        },
                 { path: "/users/aboutAboutSection", element: <AboutSectionAbout /> },
                   { path: "/users/homeEnquirySection", element: <EnquirySectionHome /> },
         { path: "/users/aboutMissionSection", element: <MissionVisionSection /> },
         { path: "/users/aboutCounterSection", element: <AboutPageCounter /> },
         { path: "/users/aboutTeamsSection", element: <AboutPageTeams /> },
         { path: "/users/projects", element: <ProjectPage /> },
         { path: "/users/services", element: <ServiceUserPage /> },
          { path: "/users/settings", element: <WebSetting /> },
      ],
    },
  ]);
}
