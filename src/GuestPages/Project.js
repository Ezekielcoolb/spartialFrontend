import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const BlogRap = styled.div`
  background: #000000;
@media (max-width: 778px) {
  padding-top: 60px;
 }
  .blog-1 h1 {
    color: #ffffff;
    font-size: 42px;
    font-weight: 600;
  }
  .blog-3-all {
     border-top: 1px solid #ffffff1A;
    border-bottom: 1px solid #ffffff1A;
    padding-top: 40px;
    padding-bottom: 60px;
    margin-top: 100px;
  }
  .blog-3-all  h2 {
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
    background: #0067D0;
    width: 150px;
    height: 45px;
    border-radius: 100px;
    color: #FFFFFF;
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
    .blog-3  {
        grid-template-columns: repeat(2, 1fr);
    }
     .blog-2-sub-two img, .blog-2-sub img , .blog-2-sub-two{
        width: 100% !important;
    }
  }
   @media (max-width: 900px) {
   
  }
  @media (max-width: 750px) {
    .blog-3  {
        grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (max-width: 630px) {
   
  }
  @media (max-width: 550px) {
   
  }
  @media (max-width: 450px) {
    .link-container{
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
  `

const Project = () => {
  const [activeLink, setActiveLink] = useState("all");

  const navigate = useNavigate()

const handleClick = () => {
  navigate("/project/details")
}

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <BlogRap>
      <div className="blog-1 containers">
        <h1>Latest Project</h1>
        <p>We have successfully executed numerous high-impact environmental projects across various industries and regions in Nigeria. 
            Below are some of our most recent engagements:</p>
      </div>
      <div className="link-container containers">
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
      </div>
      <div className="blog-2 containers">
        <div onClick={handleClick} className="blog-2-sub blog-2-sub-two">
          <img src="/images/image-1.jpeg" alt="" />
          <div className="inner-sub-blog-2">
            <div className="product-update">
              <p>Product updates</p>
              <span></span>
              <p>5 min</p>
            </div>
            <h4>
              Introducing Triggers 🎉: Build Wealth Doing the Things You Love
            </h4>
          </div>
        </div>
        <div className="blog-2-right">
          <div className="blog-2-sub">
            <img src="/images/image-2.jpg" alt="" />
            <div className="inner-sub-blog-2">
              <div className="product-update">
                <p>Product updates</p>
                <span></span>
                <p>5 min</p>
              </div>
              <h4>
              Streakonomics - 5 interesting Money insights to inspire you              </h4>
            </div>
          </div>
          <div className="blog-2-sub">
            <img src="/images/image-3.jpg" alt="" />
            <div className="inner-sub-blog-2">
              <div className="product-update">
                <p>Product updates</p>
                <span></span>
                <p>5 min</p>
              </div>
              <h4>
              Introducing Rooms, a collaborative space for faster, easier deals              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-3-all containers">
         <h2>Other Projects</h2>
      
      <div className="blog-3 ">
       
        <div className="blog-2-sub">
          <img src="/images/image-4.jpg" alt="" />
          <div className="inner-sub-blog-2 smaller-inner">
            <div className="product-update">
              <p>Product updates</p>
              <span></span>
              <p>5 min</p>
            </div>
            <h4>
            Introducing Rooms, a collaborative space for faster, easier deals            </h4>
          </div>
        </div>
        <div className="blog-2-sub">
          <img src="/images/image-4.jpg" alt="" />
          <div className="inner-sub-blog-2 smaller-inner">
            <div className="product-update">
              <p>Product updates</p>
              <span></span>
              <p>5 min</p>
            </div>
            <h4>
            Introducing Rooms, a collaborative space for faster, easier deals            </h4>
          </div>
        </div>
        <div className="blog-2-sub">
          <img src="/images/image-4.jpg" alt="" />
          <div className="inner-sub-blog-2 smaller-inner">
            <div className="product-update">
              <p>Product updates</p>
              <span></span>
              <p>5 min</p>
            </div>
            <h4>
            Introducing Rooms, a collaborative space for faster, easier deals            </h4>
          </div>
        </div>
        <div className="blog-2-sub">
          <img src="/images/image-4.jpg" alt="" />
          <div className="inner-sub-blog-2 smaller-inner">
            <div className="product-update">
              <p>Product updates</p>
              <span></span>
              <p>5 min</p>
            </div>
            <h4>
            Introducing Rooms, a collaborative space for faster, easier deals            </h4>
          </div>
        </div>
        <div className="blog-2-sub">
          <img src="/images/image-4.jpg" alt="" />
          <div className="inner-sub-blog-2 smaller-inner">
            <div className="product-update">
              <p>Product updates</p>
              <span></span>
              <p>5 min</p>
            </div>
            <h4>
            Introducing Rooms, a collaborative space for faster, easier deals            </h4>
          </div>
        </div>
        <div className="blog-2-sub">
          <img src="/images/image-4.jpg" alt="" />
          <div className="inner-sub-blog-2 smaller-inner">
            <div className="product-update">
              <p>Product updates</p>
              <span></span>
              <p>5 min</p>
            </div>
            <h4>
            Introducing Rooms, a collaborative space for faster, easier deals            </h4>
          </div>
        </div>
      </div>
      </div>
      {/* <div className="blog-4 containers">
        <Link className="learn-btn">Learn more</Link>
      </div> */}
    </BlogRap>
  );
};

export default Project;