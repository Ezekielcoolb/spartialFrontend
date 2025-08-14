import React, { useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const FooterRap = styled.div`
  background: #fffcf9;
  color: black;
  bottom: 0;
  position: relative;
  .footer-1 {
    border-bottom: 1px solid #1010101a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 20px;
    padding-top: 20px;
    gap: 10px;
    margin-bottom: 30px;
  }
  .footer-icon {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .footer-2 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .foot-dot {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;

    background: url("../images/footer-dot.png");
    z-index: 1; /* Ensure it stays below the content */
  }
.footer-link {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #524f4fff;
}
.footer-3, .footer-4 {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
 .footer-4 p {
     font-size: 16px;
    font-weight: 600;
    color: #524f4fff;
    max-width: 200px;
    
 }
  @media (max-width: 480px) {
    height: auto;
  }
`;

const Footer = () => {
      const currentYear = new Date().getFullYear();
  const socialLinks = [
    {link: "mdi:facebook"},
    {link: "mdi:twitter"},
    {link: "mdi:instagram"},
    {link: "mdi:linkedin"},
  ]
  return (
    <FooterRap>
      <div className="containers ">
        <div className=" footer-1">
          <Link to="/">
            <img
              style={{
                height: "92.62px",
                width: "218.06px", // Set a fixed width to prevent squeezing
                objectFit: "contain",
                display: "block",
                objectPosition: "top",
              }}
              src=""
              alt="..."
            />
          </Link>
          <div className="footer-icon">
            {socialLinks?.map((items) => (
              <Link to="">
                 <Icon className="icon"
                              width="30px"
                              height="30px"
                              icon={items.link}
                              color="black"
                            />
              </Link>
            ))}
          </div>
        </div>
        <div
          className=" flex flex-wrap gap-5 justify-between py-10 footer-2"
          style={{ fontFamily: "Roboto", fontSize: "16px" }}
        >
          <div style={{ lineHeight: "24px", width: "242px" }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit.</p>
          </div>
          <div
            className=" footer-3"
            style={{ fontSize: "16px", color: "#FFFFFF8C" }}
          >
            <p style={{ color: "black", fontWeight: "700", fontSize: "20px" }}>
              Explore
            </p>
            <Link className="footer-link" to="/about">About Us</Link>
            <Link className="footer-link" to="/services">Services</Link>
            <Link className="footer-link" to="/news&projects">Project</Link>
                         <Link className="footer-link" to="/privacy-policy">Privacy Policy</Link>
<Link className="footer-link" to="/terms-condition">Terms & Conditions</Link>
            <Link className="footer-link" to="/contact">Contact</Link>
           
          </div>
          <div
            className=" footer-4 "
            style={{ fontSize: "16px", color: "#FFFFFF8C" }}
          >
            <p style={{ color: "black", fontWeight: "700", fontSize: "20px" }}>
              Services
            </p>
              <p>Environmental Assessment & Management</p>
              <p>Health, Safety & Regulatory Compliance</p>
              <p>Geospatial Technology & Land Use Services</p>
          </div>
          <div
            className=" footer-4 "
            style={{ fontSize: "16px", color: "#FFFFFF8C" }}
          >
            <p style={{ color: "black", fontWeight: "700", fontSize: "20px" }}>
              Contact
            </p>
                                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
<Icon
                icon="mdi:email-open-outline"
                width="18"
                height="18"
                style={{ color: "#000000" }}
              />
            <p className="flex gap-2 items-center">
              
              spaciallimited@gmail.com 
            </p>
            </div>
                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
  <Icon
                icon="fluent:call-24-filled"
                width="18"
                height="18"
                style={{ color: "#000000" }}
              />
            <p className="flex gap-2 items-center">
            
             090000000000000
            </p>
            </div>
            <div style={{ display: "flex", gap: "10px" , alignItems: "center"}}>
                  <Icon
                icon="material-symbols:add-location-alt-outline-rounded"
                width="18"
                height="18"
                style={{ color: "#000000" }}
              />
            <p className="flex gap-2 items-center">
            
              123 Maplewood Crescent, Victoria Island, Lagos, Nigeria
            </p>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center"
          style={{
            marginTop: "70px",
            fontSize: "14px",
            textAlign: "center",
            fontFamily: "Roboto",
            fontWeight: "400",
            color: "#4a4747ff",
          }}
        >
          <p style={{ textAlign: "center" }}>
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
      <div className="foot-dot"></div>
    </FooterRap>
  );
};

export default Footer;
