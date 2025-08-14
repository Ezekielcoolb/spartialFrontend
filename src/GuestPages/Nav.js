import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Marquee from "react-fast-marquee";
import { Icon } from "@iconify/react/dist/iconify.js";


const NavbarContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 10000;
  background: #f5f5dc;
  padding-bottom: 10px;
  .nav-mobile, .mobile-Contact {
    display: none !important;
  }
 
   
   .mobile-Contact {
    color: white;
    background: green;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 40px;
   }
     @media (max-width: 778px) { 
position: fixed;
height: 60px;
display: flex;
align-items: center;
padding: 30px;
 .nav-mobile {
    display: block !important;
  }
  .mobile-Contact {
    display: flex !important;
  }
   }
`;


const backgroundCycle = keyframes`
  0%   { background-color: green; }
  20%  { background-color: #8b4513; }
  40%  { background-color: #e77817; }
  60%  { background-color: #28a745; }
  80%  { background-color: #1c1c1c; }
  100% { background-color: #6e4223ff; }
`;

const TopBar = styled.div`
  width: 100%;
  color: white;
  font-size: 14px;
  padding: 8px 16px;
  display: flex;
  gap: 50px;
  /* justify-content: space-between; */
  transition: top 0.3s ease;

  animation: ${backgroundCycle} 15s linear infinite;
.company-title {
  font-weight: 600;
    font-size: 16px;
    white-space: nowrap;
}
.marquee-div {
    display: flex;
    align-items: center;
    gap: 10px;
}
  .marquee-content {
    display: flex;
    gap: 50px;
    font-weight: 400;
    font-size: 14px;
    margin-left: 50px;
  }
    @media (max-width: 778px) { 
display: none;
    }
`;

const StickyNav = styled.div`
  /* Default (desktop) styles */
  width: ${(props) => (props.isSticky ? "100%" : "50%")};
  margin: ${(props) => (props.isSticky ? "0" : "10px 0px 0px 30px")};
  background: ${(props) => (props.isSticky ? "white" : "black")};
  padding: 16px;
  display: flex;
  align-items: center;
  border-radius: ${(props) => (props.isSticky ? "0px" : "100px")};
  position: ${(props) => (props.isSticky ? "fixed" : "relative")};
  top: ${(props) => (props.isSticky ? "0" : "auto")};
  box-shadow: ${(props) => (props.isSticky ? "0 2px 10px rgba(0,0,0,0.1)" : "none")};
  transition: all 0.3s ease-in-out;
  z-index: 999;

  @media (max-width: 778px) {
    /* Ignore sticky behavior completely */
    width: 300px;
    margin: 0;
    background: #ffffff;
    color: black;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 60px;
    gap: 30px;
    left: ${(props) => (props.clicked ? "0px" : "-360px")};
    height: 100vh;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
    padding: 40px 0 0 30px;
    transition: 0.3s ease-in-out;
    z-index: 9999;
    border-radius: 0;
  }
`;



// Regular nav links
const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.isSticky ? "black" : "white")};
  margin: 0 10px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
    @media (max-width: 778px) { 
color: black;
    }
`;

// Special style for the Contact link
const ContactLink = styled(Link)`
  text-decoration: none;
  margin-left: auto;
  padding: ${(props) => (props.isSticky ? "8px 16px" : "0")};
  color: ${(props) => (props.isSticky ? "white" : (props.color || "#e77817"))};
  border: ${(props) => (props.isSticky ? "2px solid white" : "none")};
  border-radius: 100px;
  width: 120px;
   font-weight: 800;
   display: flex;
   justify-content: center;
    align-items: center;
    height: ${(props) => (props.isSticky ? "40px" : "fit-content")};
  font-weight: ${(props) => (props.isSticky ? "600" : "500")};
  transition: all 0.3s ease-in-out;
  background: ${(props) => (props.isSticky ? "green" : "transparent")};
    @media (max-width: 778px) { 
display: none;
    }
`;


const Spacer = styled.div`
  height: ${(props) => (props.isSticky ? "72px" : "0")}; // space to prevent layout shift
`;

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
 const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("home");



  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    const handleLinkClick = (link) => {
    setActiveLink(link);
   
    setClicked(prev => !prev);
  };

  const { pathname } = useLocation();
  useEffect(() => {
    setClicked(false); // Close menu when route changes
  }, [pathname]);

  const handleClick = () => {
    setClicked(prev => !prev); // Toggle open/close
  };

  return (
    <NavbarContainer>
      {!isSticky && (
        <TopBar>
          <div className="company-title">SPATIAL ECOSYSTEMS LIMITED</div>
            <Marquee speed={50} gradient={false}>
      <div className="marquee-content">
        <div className="marquee-div">
               <Icon className="icon"
                width="20px"
                height="20px"
                icon="tdesign:undertake-environment-protection"
                color="white"
              />
            Environmental Assessment & Management</div>
        <div className="marquee-div">
              <Icon className="icon"
                width="20px"
                height="20px"
                icon="material-symbols:health-and-safety-outline"
                color="white"
              />
            Health, Safety & Regulatory Compliance</div>
        <div className="marquee-div">
              <Icon className="icon"
                width="20px"
                height="20px"
                icon="ph:island-duotone"
                color="white"
              />
            Geospatial Technology & Land Use Services</div>
        <div className="marquee-div">
              <Icon className="icon"
                width="20px"
                height="20px"
                icon="ic:outline-emergency-recording"
                color="white"
              />
            Waste, Emergency, & Capacity Services</div>
      </div>
    </Marquee>

        </TopBar>
      )}
      <div style={{
display: "flex",
justifyContent: "space-between",
width:"100%"
      }}>
         <div className="nav-mobile" onClick={handleClick}>
          {clicked ? (
            <Icon
              width="30px"
              height="30px"
              icon="prime:times"
              style={{ color: "#34302F" }}
            />
          ) : (
            <Icon
              width="30px"
              height="30px"
              icon="mdi-light:menu"
              style={{ color: "#34302F" }}
            />
          )}
        </div>
 <StickyNav isSticky={isSticky} clicked={clicked}>
  <NavLink to="/" isSticky={isSticky}>Home</NavLink>
  <NavLink to="/about" isSticky={isSticky}>About</NavLink>
  <NavLink to="/services" isSticky={isSticky}>Services</NavLink>
  <NavLink to="/project" isSticky={isSticky}>Project</NavLink>
  <ContactLink to="/contact" isSticky={isSticky}>
    Contact
  </ContactLink>
</StickyNav>
 <Link className="mobile-Contact" to="/contact" >
    Contact
  </Link>
</div>

      <Spacer isSticky={isSticky} />
    </NavbarContainer>
  );
};

export default Navbar;
