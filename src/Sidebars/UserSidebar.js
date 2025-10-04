import styled from "styled-components";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppContext } from "../Context.js/Context";
const sidebarConfig = [
  {
    id: 1,
    img: "/images/home-1.png",
    imgTwo: "/images/home-2.png",
    link: "/users/dashboard",
    title: "Home Page",
  },
  {
    id: 2,
    img: "/images/pro-1.png",
    imgTwo: "/images/pro-2.png",
    link: "/users/aboutus",
    title: "About Us Page",
  },
  
 
  {
    id: 3,
    img: "/images/pay-1.png",
    imgTwo: "/images/pay-2.png",
    link: "/users/projects",
    title: "Projects",
  },

  {
    id: 3,
    img: "/images/pay-1.png",
    imgTwo: "/images/pay-2.png",
    link: "/users/services",
    title: "Services",
  },
   {
    id: 4,
    img: "/images/pay-1.png",
    imgTwo: "/images/pay-2.png",
    link: "/users/messages",
    title: "Messages",
  },
  {
    id: 5,
    img: "/images/set-1.png",
    imgTwo: "/images/set-2.png",  
    link: "/users/settings",
    title: "Web Setting",
  },
   

];

export default function UserSidebar() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { isSidebarOpen, setIsSidebarOpen, setIsProfileOpen } = useAppContext();
  const userDetails = JSON.parse(localStorage.getItem('ruaUserDetails') || '{}');
  const navigate = useNavigate()

  function handleNavClick(title) {
    setActiveTab(title);
    setIsSidebarOpen(false);
    setIsProfileOpen(false);
  }
 
  const {openSideBar} = useSelector((state)=> state.app)

  return (
    <SIDEBAR className={ openSideBar ? "open" : "close"}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px"
      }}
        className={`containery ${
          isSidebarOpen ? "opened" : "closed"
        }`}
      >
        <Link to="/">
                <div className="admin-logo-img admin-logo-user">
                  <img src="/images/nav-logo.png" alt="logo" />
                </div>
              </Link>
              
        <div className="nav-container ">
        
          <div className="wrapper ">
            <div className="nav-links ">
              {sidebarConfig.map(({ link, imgTwo, img, title }, index) => (
                <Link
                  className={`nav-link react-router-link ${
                    activeTab === title ? "active-tab" : ""
                  }`}
                  to={link}
                  key={index}
                  onClick={() => handleNavClick(title)}
                >
                    {activeTab === title ?  <img src={imgTwo} alt="..." /> :  <img src={img} alt="..." /> }
                  {title}
                </Link>
              ))}

          
            </div>
          </div>
          
         
        </div>
        <Closer
          style={{display: "flex"}}
          onClick={() => {
            setIsSidebarOpen(false);
          }}
        ></Closer>
      </div>
    </SIDEBAR>
  );
}
const SIDEBAR = styled.div`
  background: #ffffff;
  /* border: 1px solid #1122401F; */
  height: auto !important;
  padding: 20px;

  width: 18%;
  position: relative;
  z-index: 999;
 
  @media (max-width: 1024px) {
    
     width: 280px;
  height: 100vh !important;
  position: fixed;

}
.admin-logo-user {
   margin: auto !important;
  
}
.user-all-div {
    border-top: 1px solid #1122401F;
    margin-top: 20px;
}
.userName {
    
    background: #F7F7F7;

    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 20px auto;
    padding: 10px 25px;
    justify-content: center;
}
.userName h5 {
    font-size: 14px;
    font-weight: 600;
    color: #112240;

}
.userName p {
    font-size: 12px;
    font-weight: 400;
    color: #667085;


}
.online-off {
    display: flex;
    align-items: center;
    gap: 10px;
}
.user-status-icon {
    background: #379C0C;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.user-status {
    color: #7788A5;
    font-size: 12px;
    font-weight: 400;
}
  .container {
    display: flex;
    flex-direction: row;
    width: 15%;
   
    align-items: center;
    position: fixed;
    background-color: #ffffff;
    padding-right: 0 !important;
  }
  .nav-container {
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 100px;
    align-items: center;
  padding-top: 10px;

  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    width: 100%;
    align-items: center;
    padding-right: 0 !important;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    
    gap: 20px;
    width: 100% !important;
  }
  .help-center {
    width: 188px;
    height: 212px;
  }
  .help-center img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .nav-link {
    font-weight: 600 !important;
white-space: nowrap;
    color: #7788A5 !important;
    display: flex;
    font-size: 15px !important;
    justify-content: left !important;
    text-decoration: none !important;
    gap: 15px;
    align-items: center;
    &:hover {
    font-weight: 600 !important;
    

    color: #12D27D !important;
      transition: 0.3s;
    }
  }
  .active-tab {
    font-weight: 600 !important;
color: #CC9430 !important;
  }
  
  @media screen and (max-width: 1100px) {
   
    .container {
      background: white;
    }
    /* .closed {
      margin-left: -1000px;
      transition: 0.3s;
    } */
    /* .opened {
      width: 250px;
      margin-left: 0;
      transition: 0.3s;
      display: flex;
      position: fixed !important;
      z-index: 2;
    } */
  }
  @media screen and (max-width: 678px) {
    .container {
      padding-right: 0 !important;
      padding-left: 0 !important;

      background-color: transparent;
    }
    .opened {
      width: 100%;
    }
    .nav-container {
      width: 250px;
      
    }
  }
`;
const Closer = styled.div`
  display: none;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  z-index: 9999;
  @media screen and (max-width: 500px) {
    display: flex;
    height: 100%;
    width: calc(100vw - 250px);
  }
`;
