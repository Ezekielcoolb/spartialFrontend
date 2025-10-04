import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import TopLoader from "../Preload/TopLoader";
import UserMessages from "../UserPages/Messages";
import AdminSignup from "../UserPages/SignUp";
import Login from "../UserPages/Login";
import PrivateRoutes from "../UserPages/PrivateRoute";


// Layouts
const General = lazy(() => import("../Layouts/general"));
const UserDashboardLayout = lazy(() => import("../Controller.js/UserController"));

// Guest Pages
const Home = lazy(() => import("../GuestPages/Home"));
const About = lazy(() => import("../GuestPages/About"));
const Services = lazy(() => import("../GuestPages/Services"));
const Project = lazy(() => import("../GuestPages/Project"));
const ProjectDetail = lazy(() => import("../GuestPages/ProjectDetails"));
const Contact = lazy(() => import("../GuestPages/Contact"));
const ServiceDetail = lazy(() => import("../GuestPages/ServiceDetails"));

// User Pages
const DashboardHome = lazy(() => import("../UserPages/DashboardHome"));
const SliderSection = lazy(() => import("../UserPages/HomePage/SliderSection"));
const AboutSectionHome = lazy(() => import("../UserPages/HomePage/AboutSection"));
const DocumentSectionHome = lazy(() => import("../UserPages/HomePage/DocumentSection"));
const CounterSectionHome = lazy(() => import("../UserPages/HomePage/CounterSection"));
const WhyChooseSectionHome = lazy(() => import("../UserPages/HomePage/WhyChooseSection"));
const TestimonySectionHome = lazy(() => import("../UserPages/HomePage/TestimoneySection"));
const EnquirySectionHome = lazy(() => import("../UserPages/HomePage/EnqiryPage"));

const AboutusUser = lazy(() => import("../UserPages/AboutusUser"));
const AboutSectionAbout = lazy(() => import("../UserPages/AboutPage/AboutUsAbout"));
const MissionVisionSection = lazy(() => import("../UserPages/AboutPage/MissionVisionSection"));
const AboutPageCounter = lazy(() => import("../UserPages/AboutPage/AboutPageCounter"));
const AboutPageTeams = lazy(() => import("../UserPages/AboutPage/AboutPageTeams"));

const ProjectPage = lazy(() => import("../UserPages/ProjectPage"));
const ServiceUserPage = lazy(() => import("../UserPages/ServicePage"));
const WebSetting = lazy(() => import("../UserPages/WebSetting"));

export default function Routers() {
  const routes = useRoutes([
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
        { path: "/project/details/:id", element: <ProjectDetail /> },
      ],
    },

    {
      path: "/users",
      element: <PrivateRoutes />,
      children: [
        { path: "/users/dashboard", element: <DashboardHome /> },
        { path: "/users/aboutus", element: <AboutusUser /> },
        { path: "/users/homeSliderSection", element: <SliderSection /> },
        { path: "/users/homeAboutSection", element: <AboutSectionHome /> },
        { path: "/users/homeDocumentSection", element: <DocumentSectionHome /> },
        { path: "/users/homeCounterSection", element: <CounterSectionHome /> },
        { path: "/users/homeWhyChooseSection", element: <WhyChooseSectionHome /> },
        { path: "/users/homeWTestimonySection", element: <TestimonySectionHome /> },
        { path: "/users/homeEnquirySection", element: <EnquirySectionHome /> },
        { path: "/users/aboutAboutSection", element: <AboutSectionAbout /> },
        { path: "/users/aboutMissionSection", element: <MissionVisionSection /> },
        { path: "/users/aboutCounterSection", element: <AboutPageCounter /> },
        { path: "/users/aboutTeamsSection", element: <AboutPageTeams /> },
        { path: "/users/projects", element: <ProjectPage /> },
        { path: "/users/services", element: <ServiceUserPage /> },
        { path: "/users/settings", element: <WebSetting /> },
        { path: "/users/messages", element: <UserMessages /> },
      ],

      
    },
    { path: "/adminSignUp", element: <AdminSignup /> },
        { path: "/admin/login/administarator", element: <Login /> },

  ]);

  return (
    <Suspense fallback={<TopLoader />}>
      {routes}
    </Suspense>
  );
}
