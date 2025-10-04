import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setOpenSideBar, setOpenSideBarTwo } from "../Redux/slice/appSlice";
// import { resetUserState } from "../Redux/slice/authSlice";

const UserNavRap = styled.div`
color:  #112240;
;
  width: 100%;
  .userNavbar {
    width: 100%;

    border: 1px solid #1122401a;
    padding: 10px 20px;
    background: #ffffff;
    display: flex;
    position: relative;
    justify-content: space-between;
  }

  .logOut {
        border: 1px solid #1122401a;
color: #112240;
background: transparent;
height: 35px;
width: 120px;
display: flex;
align-items: center;
justify-content: center;
  }
  .search-bar-div {
    position: relative;
  }
  .search-bar-div input {
    width: 341px;
    height: 38px;
    border-radius: 100px;
    padding: 10px 30px;
    color: #66708580;

    background: #f7f7f7;
    border-style: none;
  }
  .user-search-icon {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  /* .notification-icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
  } */
    .notification-icon {
        position: relative;
    }
  .notification-icon img {
    width: 44px;
    height: 44px;
  }
  .nav-select {
    width: 78px;
    height: 38px;
    border-radius: 100px;
    border: 0.5px solid #d0d5dd;
  }
  .usernav-2 {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .user-mobile {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .notification-dropdown {
box-shadow: 0px 8px 24px 0px #14141414;
    box-shadow: 0px 8px 22px 0px #22304929;
    background: #ffffff;
    width: 480px;
    border-radius: 10px;
    position: absolute;
    height: 220px ;
    top: 55px;
    overflow-y: auto;
    right: 10px;
  }
  .notification-dropdown h3 {
    color: #112240;
    font-size: 600;
    font-size: 14px;
    padding: 15px;
    border-bottom: 1px solid #1122401F
  }
.notify-mess {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
  .notify-bell img {
    width: 24px;
    height: 24px;
  }
  .notify-all-divs {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }
  .notify-drop-body {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .notify-mess h4 {
    color: #00001C;
 font-size: 16px;
    font-weight: 600;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
   .notify-mess span {
       color: #353546;
 font-size: 14px;
  font-weight: 400;
   }
  .notify-mess p {
    color: #353546;
 font-size: 16px;
  font-weight: 600;
    margin: 0px;
    max-width: 396px;
  }
  .notify-drop-body p {
    color: #112240;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  @media (max-width: 768px) {
    .userNavbar {
    }
    .usernav-2 {
    }
  }
  @media (max-width: 450px)  {
    .search-bar-div input {
      width: 200px;
    }
  }
`;

const UserNav = () => {
  const dropdownRef = useRef(null);
  const { openSideBar, backgroundChange } = useSelector((state) => state.app);
  console.log(backgroundChange);
  
  const dispatch = useDispatch();
  const navigate = useNavigate()
  console.log(openSideBar);

  const ShowBar = () => {
    dispatch(setOpenSideBar());
  };
  
const [dropdownVisibility, setDropdownVisibility] = useState(false)
  const [selected, setSelected] = useState("light");

  const handleToogleDrop = () => {
    setDropdownVisibility(!dropdownVisibility)
    
  }

 

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
       
        setDropdownVisibility(false)
      }
    };
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisibility(false)
      }
    };

    if ( dropdownVisibility) {
      document.addEventListener("mousedown", handleOutsideClick);
       // Attach the event listener when the component mounts
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownVisibility]);


const handleLogOut =  () => {

  localStorage.removeItem("sylverToken");
  localStorage.removeItem("sylverUser");
//   dispatch(resetUserState())
  navigate("/login")

};

  const { pathname } = useLocation();

  
  useEffect(() => {
    dispatch(setOpenSideBarTwo());
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  return (
    <UserNavRap>
      <div className="userNavbar">
        <div className="user-mobile">
          <Icon
            className="icon-admin-menu"
            width="50px"
            height="50px"
            icon={openSideBar ? "mdi-light:menu" : "prime:times"}
            color="black"
            onClick={() => ShowBar()}
          />
          <Link to="/"></Link>
          <div className="search-bar-div">
            <input type="text" placeholder="Search properties..." />
            <Icon
              className="user-search-icon"
              icon="material-symbols-light:search"
              width="20"
              height="20"
              style={{ color: "#66708580" }}
            />
          </div>
        </div>

        <div className="usernav-2">

          {/* <button onClick={handleLogOut} className="logOut">Log Out</button> */}
         
         
        </div>
      </div>
    </UserNavRap>
  );
};
export default UserNav;
