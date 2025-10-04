import React, { useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGeneralpage } from "../Redux/slice/homeSlice";

const FooterRap = styled.div`
background: linear-gradient(
  135deg,
  #3c3c3cff 0%,   /* charcoal gray (softer than black) */
  #3e2723 30%,  /* deep earthy brown */
  #1b4332 65%,  /* rich forest green */
  #0f4c75 100%  /* deep teal-blue */
);


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
   .footer-2 h4,  .footer-3 h4,  .footer-4 h4 {
color: #ffffff;
  }
    .footer-2 p {
      max-width: 242px;
      line-height: 24px;
      color: #ffffffb2;
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
      color: #ffffffb2;
  }
  .footer-3,
  .footer-4 {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .footer-4 p {
    font-size: 16px;
    font-weight: 600;
    max-width: 200px;
          color: #ffffffb2;

  }
  @media (max-width: 550px) {
    height: auto;

    .footer-2 {
      flex-direction: column;
      gap: 50px;
    }
    .footer-2 p {
      max-width: 100%;
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
 const iconMap = {
  Facebook: "mdi:facebook",
  Twitter: "mdi:twitter",
  Instagram: "mdi:instagram",
  LinkedIn: "mdi:linkedin",
};


   const navigate = useNavigate();
      const dispatch = useDispatch();
      const { serviceDetails, generalObject, serviceObject, loading, error } =
        useSelector((state) => state.content);
      const URL = "https://spatial-backend.onrender.com";
  
      console.log(generalObject);
  
      const socialLinks = generalObject?.socialLinks
      
    useEffect(() => {
      dispatch(fetchGeneralpage()); // Call API on component mount
    }, [dispatch]);
  
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
              src={`${URL}${generalObject?.banner}`}
              alt="..."
            />
          </Link>
          <div className="footer-icon">
           {socialLinks?.map((item) => (
  <a
    key={item._id}
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon
      className="icon"
      width="30px"
      height="30px"
      icon={iconMap[item.title] || "mdi:web"} // fallback
      color="#ffffffb2"
    />
  </a>
))}
          </div>
        </div>
        <div
          className=" flex flex-wrap gap-5 justify-between py-10 footer-2"
          style={{ fontFamily: "Roboto", fontSize: "16px" }}
        >
            <p>
              {generalObject?.siteDescription}
            </p>
          <div
            className=" footer-3"
            style={{ fontSize: "16px"}}
          >
            <h4 style={{ fontWeight: "700", fontSize: "20px" }}>
              Explore
            </h4>
            <Link className="footer-link" to="/about">
              About Us
            </Link>
            <Link className="footer-link" to="/services">
              Services
            </Link>
            <Link className="footer-link" to="/news&projects">
              Project
            </Link>
            {/* <Link className="footer-link" to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="footer-link" to="/terms-condition">
              Terms & Conditions
            </Link> */}
            <Link className="footer-link" to="/contact">
              Contact
            </Link>
          </div>
          <div
            className=" footer-4 "
            style={{ fontSize: "16px" }}
          >
            <h4 style={{ fontWeight: "700", fontSize: "20px" }}>
              Services
            </h4>
            <p>Environmental Assessment & Management</p>
            <p>Health, Safety & Regulatory Compliance</p>
            <p>Geospatial Technology & Land Use Services</p>
          </div>
          <div
            className=" footer-4 "
            style={{ fontSize: "16px" }}
          >
            <h4 style={{  fontWeight: "700", fontSize: "20px" }}>
              Contact
            </h4>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Icon
                icon="mdi:email-open-outline"
                width="18"
                height="18"
                style={{ color: "#ffffffb2" }}
              />
              <p className="flex gap-2 items-center">
               {generalObject?.siteEmail}
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Icon
                icon="fluent:call-24-filled"
                width="18"
                height="18"
                style={{ color: "#ffffffb2" }}
              />
              <p className="flex gap-2 items-center">{generalObject?.sitePhone}</p>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Icon
                icon="material-symbols:add-location-alt-outline-rounded"
                width="18"
                height="18"
                style={{ color: "#ffffffb2" }}
              />
              <p className="flex gap-2 items-center">
                {generalObject?.siteAddress}
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
            paddingBottom: "50px",
            color: "#ffffffb2",
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
