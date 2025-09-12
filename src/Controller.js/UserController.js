import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { useSelector } from "react-redux";

import UserSidebar from "../Sidebars/UserSidebar";
import UserNav from "../UserPages/UserNavbar";

export default function UserDashboardLayout() {
  const { openSideBar, backgroundChange } = useSelector((state) => state.app);

  return (
    <Wrapper>
      <div className="layout">
        {/* Sidebar full height on the left */}
        <aside
          className={`sidebar ${openSideBar ? "open" : ""}`}
          style={{
            // background: backgroundChange === false ? "#fff" : "black",
            // color: backgroundChange === false ? "black" : "white",
          }}
        >
          <UserSidebar />
        </aside>

        {/* Main content */}
        <main
          className="content"
          style={{
            marginLeft: openSideBar ? "250px" : "0px", // only for desktop
          }}
        >
          {/* Fixed Navbar */}
          <div className="navbar">
            <UserNav />
          </div>

          {/* Scrollable Outlet below */}
          <div className="outlet">
            <Outlet />
          </div>
        </main>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;

  .layout {
    display: flex;
    flex: 1;
    height: 100vh;
  }

  /* Sidebar default (desktop mode) */
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 250px;
    transition: width 0.3s ease;
    border-right: 1px solid #ddd;
    overflow: hidden;
  }

  /* collapsed desktop */
  .sidebar:not(.open) {
    width: 80px;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    transition: margin-left 0.3s ease;
    height: 100vh;
    background: #F7F7F7;
    overflow: hidden;
    position: relative;
  }

  .navbar {
    position: sticky;
    top: 0;
    height: 60px;
    border-bottom: 1px solid #ddd;
    background: #fff;
    flex-shrink: 0;
    z-index: 10;
  }

  .outlet {
    flex: 1;
    overflow-y: auto;
  }

  /* Tablet / Mobile (slide animation instead of collapse) */
  @media screen and (max-width: 1024px) {
    .sidebar {
      /* width: 250px; */
      /* transition: transform 0.3s ease; */
      position: absolute;
      z-index: 10000;
      top: 71px;
    }

    .sidebar.open {
    }

    .content {
      margin-left: 0 !important; /* content full width always */
    }
  }
`;
