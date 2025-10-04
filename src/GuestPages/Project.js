import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchProjectpage } from "../Redux/slice/homeSlice";

const BlogRap = styled.div`
  background: #000000;
  @media (max-width: 778px) {
    padding-top: 60px;
  }

  .about-1 {
    background-size: cover; /* ensures the image fits */
    background-repeat: no-repeat;
    background-position: center;
    padding-top: 180px;
    /* margin: 10px; */
    /* border-radius: 24px; */
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;

    min-height: 80vh; /* fits the viewport */
    height: auto; /* allows dynamic height based on content */
    box-sizing: border-box;
    overflow: hidden; /* prevents content from overlapping */
    /* background zoom only once */
    animation: bgZoom 8s ease forwards;
  }

  @keyframes bgZoom {
    0% {
      background-size: 100%;
      background-position: center;
    }
    100% {
      background-size: 160%;
      background-position: center;
    }
  }

  .about-1 h2 {
    color: #ffffff;
    font-size: 50px !important;
    font-weight: 600;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeSlide 1s ease forwards;
  }

  .about-sub-left-div {
    background: #ffffff;
    width: 4px;
    height: 4px;
    border-radius: 100px;
  }
  .all-patners {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 50px;
  }
  .about-sub-left {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .about-sub p {
    color: #ffffffb2;
    max-width: 374px;
    font-weight: 600;
    line-height: 32px;
    font-size: 22px;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeSlide 1s ease forwards;
  }

  .about-sub-left p,
  .home-link {
    color: #ffffff;
    font-size: 14px !important;
    font-weight: 600 !important;
    text-decoration: none;
  }
  .about-sub {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    position: relative;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeSlide 1s ease forwards;
  }

  @keyframes fadeSlide {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .blog-1 h1 {
    color: #ffffff;
    font-size: 42px;
    font-weight: 600;
  }
  .blog-3-all {
    border-top: 1px solid #ffffff1a;
    border-bottom: 1px solid #ffffff1a;
    padding-top: 40px;
    padding-bottom: 60px;
    margin-top: 100px;
  }
  .blog-3-all h2 {
    color: #ffffff;
    font-size: 35px;
    font-weight: 600;
    padding-bottom: 30px;
  }
  .blog-1 p {
    color: #ffffffb2;
    font-size: 16px;
    font-weight: 400;
    max-width: 341px;
    line-height: 22px;
  }
  .blog-1 {
    border-bottom: 1px solid #ffffff1a;
    padding-bottom: 30px;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
  .link {
    background: #ffffff0d;
    padding: 5px 15px;
    border-radius: 100px;
    color: #ffffffb2;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
  }
  .link.active {
    background: green;
    color: #ffffff;
  }
  .link-container {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 60px;
  }
  .product-update p {
    color: #ffffffb2;
    font-weight: 16px;
    font-weight: 400;
  }
  .product-update span {
    background: #d9d9d9;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
  .product-update {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .inner-sub-blog-2 h4 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    max-width: 350px;
  }
  .inner-sub-blog-2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .blog-2-sub {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    gap: 20px;
  }
  .blog-2-right {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .blog-2 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    padding-top: 80px;
  }
  .smaller-inner h4 {
    font-size: 20px !important;
    font-weight: 500 !important;
  }
  .blog-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  .learn-btn {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0067d0;
    width: 150px;
    height: 45px;
    border-radius: 100px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  }
  /* .blog-4  {
    padding-top: 70px;
    padding-bottom: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  } */
  .blog-2-sub img {
    width: 300px;
    border-radius: 12px;
  }
  .blog-2-sub-two img {
    width: 600px;

    border-radius: 12px;
  }
  @media (max-width: 1100px) {
    .blog-3 {
      grid-template-columns: repeat(2, 1fr);
    }
    .blog-2-sub-two img,
    .blog-2-sub img,
    .blog-2-sub-two {
      width: 100% !important;
    }
  }
  @media (max-width: 900px) {
  }
  @media (max-width: 750px) {
    .blog-3 {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (max-width: 630px) {
  }
  @media (max-width: 550px) {
  }
  @media (max-width: 450px) {
    .link-container {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 400px) {
    .blog-2-sub img {
      width: 300px;
    }
  }
  @media (max-width: 350px) {
  }
`;

const Project = () => {
  const [activeLink, setActiveLink] = useState("all");
  const [firstProject, setFirstProject] = useState(null);

  const navigate = useNavigate();

  const URL = "https://spatial-backend.onrender.com";
  const dispatch = useDispatch();

  const { homeData, homeObject, projectObject, loading, error } = useSelector(
    (state) => state.content || []
  );

  console.log(projectObject);
  console.log(firstProject);

  const heading = projectObject?.homeHeadings;
  const projects = projectObject?.projects;
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 0);
  }, [location.pathname]);

  useEffect(() => {
    dispatch(fetchProjectpage()); // Call API on component mount
  }, [dispatch]);

  useEffect(() => {
    if (projectObject) {
      setFirstProject(projects[0]);
    }
  }, [projectObject]);

  const handleClick = (id) => {
    navigate(`/project/details/${id}`);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <BlogRap>
      <div
        style={{
          backgroundColor: "#000000",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${URL}${heading?.projectPageBanner})`,
        }}
        className="about-1 containers"
      >
        <h2>{heading?.title}</h2>
        <div className="about-sub">
          <div className="about-sub-left">
            <Link to="/home" className="home-link">
              Home
            </Link>
            <div className="about-sub-left-div"></div>
            <p>{heading?.title}</p>
          </div>
        </div>
      </div>
      {/* <div className="link-container containers">
        <Link
          className={`link ${activeLink === "all" ? "active" : ""}`}
          to="#"
          onClick={() => handleLinkClick("all")}
        >
          All
        </Link>
        <Link
          className={`link ${activeLink === "company" ? "active" : ""}`}
          to="#"
          onClick={() => handleLinkClick("company")}
        >
          Environmental Projects
        </Link>
        <Link
          className={`link ${activeLink === "technology" ? "active" : ""}`}
          to="#"
          onClick={() => handleLinkClick("technology")}
        >
          Training
        </Link>
        <Link
          className={`link ${activeLink === "other" ? "active" : ""}`}
          to="#"
          onClick={() => handleLinkClick("other")}
        >
          Others
        </Link>
      </div> */}
      <div className="blog-2 containers">
        <div
          onClick={() => handleClick(firstProject?._id)}
          className="blog-2-sub blog-2-sub-two"
        >
          <img src={`${URL}${firstProject?.banner}`} alt="" />
          <div className="inner-sub-blog-2">
            <div className="product-update">
              <p>{firstProject?.category}</p>
              <span></span>
              <p>
                {firstProject?.dateCreated
                  ? new Date(firstProject.dateCreated).toLocaleDateString(
                      "en-GB"
                    )
                  : ""}
              </p>
            </div>
            <h4> {firstProject?.name}</h4>
          </div>
        </div>
        <div className="blog-2-right">
          {projects?.slice(1, 3).map((item) => (
            <div onClick={() => handleClick(item?._id)} className="blog-2-sub">
              <img src="/images/image-2.jpg" alt="" />
              <div className="inner-sub-blog-2">
                <div className="product-update">
                  <p>{item?.category}</p>
                  <span></span>
                  <p>
                    {item?.dateCreated
                      ? new Date(item.dateCreated).toLocaleDateString("en-GB")
                      : ""}
                  </p>
                </div>
                <h4>{item?.name} </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="blog-3-all containers">
        <h2>Other Projects</h2>

        <div className="blog-3 ">
          {projects?.slice(3).map((item) => (
            <div onClick={() => handleClick(item?._id)} className="blog-2-sub">
              <img src="/images/image-2.jpg" alt="" />
              <div className="inner-sub-blog-2">
                <div className="product-update">
                  <p>{item?.category}</p>
                  <span></span>
                  <p>
                    {item?.dateCreated
                      ? new Date(item.dateCreated).toLocaleDateString("en-GB")
                      : ""}
                  </p>
                </div>
                <h4>{item?.name} </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="blog-4 containers">
        <Link className="learn-btn">Learn more</Link>
      </div> */}
    </BlogRap>
  );
};

export default Project;
