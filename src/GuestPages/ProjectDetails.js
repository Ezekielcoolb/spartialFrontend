import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";

import { ClipLoader } from "react-spinners";
import { fetchProjectDetails } from "../Redux/slice/homeSlice";

const DetailsRap = styled.div`
background: #000000;
  .detail-1 {
    position: relative; /* needed for pseudo-element layering */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-top: 180px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    
    min-height: 80vh;
    height: auto;
    box-sizing: border-box;
    animation: bgZoom 8s ease forwards;
    overflow: hidden;
    z-index: 1; /* ensures content stays above the overlay */
  }

  .detail-1::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 24px; /* same as parent */
    background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      /* very light gradient */ rgba(0, 0, 0, 0.3)
    );
    backdrop-filter: blur(4px); /* softer blur */
    -webkit-backdrop-filter: blur(4px);
    z-index: -1;
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
  .about-sub-left-div {
    background: #ffffff;
    width: 4px;
    height: 4px;
    border-radius: 100px;
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
  }

.detail-2-img {
  height: 700px;
}
   .detail-1 h2 {
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

  .about-sub-left-div {
    background: #ffffff;
    width: 4px;
    height: 4px;
    border-radius: 100px;
  }
  .about-sub-left p,
  .home-link {
    color: #ffffff;
    font-size: 14px !important;
    font-weight: 600 !important;
    text-decoration: none;
  }
  .details-2-upper-1 img {
    width: 20px;
    height: 23px;
  }
  .details-2-upper-1 p {
    color: #ffffff;
    font-weight: 600;
    font-size: 15px;
  }
  .details-2-upper-1 {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .details-2-upper h1 {
    color: #ffffff;
    font-weight: 700;
    font-size: 68px;
    line-height: 70px;
  }
  .details-2-upper {
    padding-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .detail-2-img-box {
    border: 1px solid #e0e0e0;
    width: 62px;
    height: 62px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detail-2-img-box img {
    width: 24px;
    height: 24px;
  }
  .details-2-middle-inner p {
    color: #8a8a8a;
    font-weight: 600;
    font-size: 15px;
  }
  .details-2-middle-inner h4 {
    color: #ffffff;
    font-weight: 600;
    font-size: 15px;
  }
  .details-2-middle-inner {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .details-2-middle-sub {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .details-2-middle {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .detail-2-img {
    width: 100%;
    max-width: 100%;
    height: 600px;
    border-radius: 30px;
  }
  .details-2 {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .detail-3-left h2 {
    color: #ffffff;
    font-weight: 400;
    font-size: 50px;
    line-height: 52px;
  }
  .detail-3-left p {
    color: #ffffffb2;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    max-width: 776px;
  }
.describe h2, .describe h4, .describe h5, 
.describe h6, .describe h1 {
font-size: 20px !important;
font-weight: 500 !important;
}
  ol,li, ul{
 color: #ffffffb2;
 list-style: none;
  font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    max-width: 776px;
}
  .detail-3-right li {
    color: #ffffffb2;
    font-weight: 600;
    line-height: 28px;
    font-size: 16px;
    max-width: 339px;
    margin-bottom: 10px;
  }
  .detail-3-left {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .detail-3-right span {
    color: #ffffff;
  }
  .detail-3-right h4 {
    color: #ffffff;
    font-size: 19px;
    font-weight: 700;
  }
  .detail-3-right {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .detail-3-right ul {
    margin-left: 40px;
  }
  .detail-3 {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin-top: 80px;
  }
  .detail-4 h2 {
    color: #ffffff !important;
    font-size: 50px;
    line-height: 52px;
    font-weight: 700;
  }
  .detail-4-sub {
    padding: 20px;
    padding-top: 80px;
    padding-bottom: 100px;
    width: 280px;
     background: linear-gradient(
  180deg,
  #8b4513 0%,   
  #025726 50%,  
  #1c1c1c 100%  
);
    display: flex;
    border-radius: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 15px;
  }
  .detail-4-sub h4 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
  }
  .detail-4-sub p {
    color: #ffffffb2;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    max-width: 198px;
  }
  .detail-4-sub-cut {
    position: absolute;
    right: 70px;
    top: 0px;
    width: 144px;
    height: 47px;
  }
  .detail-4-sub-circle {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: #cc9430;
    position: absolute;
    right: 103px;
    top: -40px;
  }
  .detail-4-sub-circle img {
    width: 40px;
    height: 40px;
  }
  .all-detail-sub-card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .detail-4 {
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin: 80px 0px;

  }
  .detail-4 h2 {
    color: #000000;
    font-size: 50px;
    font-weight: 700;
    line-height: 52px;
    border-top: 1px solid #e0e0e0;
    width: 100%;
    padding-top: 40px;
  }
  .detail-5-upper h2 {
    color: #000000;
    font-size: 50px;
    font-weight: 700;
    line-height: 52px;
  }
  .link {
    border: 1px solid #e0e0e0;
    text-decoration: none;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 700;
    width: 136px;
    height: 50px;
  }
  .link.active {
    background: #cc9430;
  }
  .detail-5-links {
    display: flex;
    gap: 10px;
  }
  .detail-5-upper {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    padding-top: 40px;
    border-top: 1px solid #e0e0e0;
  }
  .carousel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    overflow: hidden;
  }

  .carousel-item {
    flex: 0 0 60%; /* main image size */
    transition: transform 0.5s ease, filter 0.5s ease, opacity 0.5s ease;
  }

  .carousel-item img {
    width: 100%;

    border-radius: 20px;
    object-fit: cover;
  }

  /* Center (active) */
  .carousel-item.active {
    z-index: 2;
    transform: scale(1);
    filter: none;
    opacity: 1;
  }
  .carousel img {
    height: 580px !important;
    border-radius: 30px;
  }

  /* Left (previous) */
  .carousel-item.prev {
    flex: 0 0 40%; /* make neighbor wider */
    transform: scale(0.85) translateX(-0%); /* reduce push */
    filter: blur(4px);
    opacity: 0.7;
    z-index: 1;
  }

  /* Right (next) */
  .carousel-item.next {
    flex: 0 0 40%;
    transform: scale(0.85) translateX(0%);
    filter: blur(4px);
    opacity: 0.7;
    z-index: 1;
  }

  /* Animations (reuse your existing) */
  .slide-left {
    animation: slideFromLeft 0.6s ease-out forwards;
  }
  .slide-right {
    animation: slideFromRight 0.6s ease-out forwards;
  }
  .home-11 {
    position: relative;
  }
  .detail-5-image-button {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background: #cc9430;
    border: none;
    z-index: 3;
  }
  .detail-5-image-button-left {
    position: absolute;
    top: 45%;
    left: 0px;
  }
  .detail-5-image-button-right {
    position: absolute;
    top: 45%;
    right: 0px;
  }
  .drop-image-slider-image {
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .image-slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
  }
  .times-icon {
    display: flex;
    justify-content: space-between;
    width: 100%;

    padding-right: 20px;
  }

  .slide {
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .slide img {
    width: 750px;
    height: 480px; /* keep your height */
    border-radius: 30px;
    object-fit: cover;
  }

  .slide.active {
    z-index: 2;
    transform: scale(1);
    opacity: 1;
  }

  /* Animations */
  .slide-left {
    animation: slideFromLeft 0.6s ease-out forwards;
  }
  .slide-right {
    animation: slideFromRight 0.6s ease-out forwards;
  }

  @keyframes slideFromLeft {
    from {
      transform: translateX(-1000px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideFromRight {
    from {
      transform: translateX(1000px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .plan-all {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    border: 1px solid #e0e0e0;
    border-radius: 30px;
    padding: 20px;
    position: relative;
  }
  .detail-5-down {
    margin-top: 50px;
  }
  .video-home-con-header p {
    border: 1px solid #cc9430;
    width: fit-content;
    padding: 15px;
    height: 34px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #00001c;
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
  }
  .video-home-con-header h3 {
    color: #00001c;
    font-size: 50px;
    line-height: 50px;
    max-width: 554px;
    font-weight: 500;
  }
  .video-home-con-header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  .video-home-container {
    display: flex;
    flex-direction: column;
    gap: 50px;
    background: #000000;

    padding-top: 50px;
    padding-bottom: 50px;
  }
  .video-wrapper {
    width: 90vw;
    height: 480px;
  }
  .left-middle {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .left-middle-sub {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .icon-div img {
    width: 31px;
    height: 25px;
  }
  .icon-div p {
    color: #00001c;
    font-size: 14px;
    font-weight: 500;
  }
  .icon-div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 0px 20px;
  }
  .left-upper-3-inner {
    padding: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    background: #f5f5f5;

    border-radius: 12px;
  }
  .left-middle-inner img {
    width: 20px;
    height: 20px;
  }
  .left-middle-inner h6 {
    font-size: 16px;
    font-weight: 600;
    color: #00001c;
  }
  .left-middle-inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-bottom: 1px solid #00001c1a;
    padding-bottom: 15px;
  }
  .left-middle-inner-inner {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .opened-faq-head select {
    padding: 10px 12px;
    border-radius: 100px;
    width: fit-content;
    background: #f8f8fa;
    color: #353546;
    font-weight: 400;
    font-size: 14px;
  }
  .opened-faq-head {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .opened-faq-inner h5 {
    color: #353546;
    font-size: 16px;
    font-weight: 400;
  }

  .opened-faq-inner p {
    color: #00001c;
    font-size: 16px;
    font-weight: 500;
  }
  .opened-faq-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .opened-faq-total {
    border-top: 1px solid #f2f2f4;
    padding-top: 20px;
  }
  .opened-faq-body h4 {
    color: #353546;
    font-size: 16px;
    font-weight: 400;
  }
  .opened-faq {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .opened-faq-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .opened-faq-btns button {
    width: 147px;
    height: 40px;
    border: none;
    border-radius: 100px;
    font-weight: 600;
    font-size: 16x;
    cursor: pointer;
  }
  .opened-faq-btn-1 {
    background: #cc9430;
    color: #000000;
  }
  .opened-faq-btn-2 {
    background: #fff7e8;
    color: #cc9430;
  }
  .opened-faq-btns {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: auto;
  }
  .left-middle-sub {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .left-down img {
    max-width: 582px;
    height: 400px;
    border-radius: 12px;
  }
  .detail-6-right {
    width: 50%;
    border-radius: 30px;
    height: 680px;
  }
  .detail-6-right img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
  .detail-6-left {
    border: 1px solid #e0e0e0;
    padding: 20px;
    border-radius: 30px;
  }
  .detail-6 {
    display: flex;
    gap: 20px;
  }
  .detail-6-all h2 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  .detail-6-all {
    margin-top: 80px;
  }
  input,
  textarea {
    background: #f2f2f2;
    border: 1px solid #f2f2f2;
    height: 60px;
    padding-left: 15px;
    border-radius: 30px;
    width: 630px;
  }
  textarea {
    height: 200px;
    padding-top: 20px;
  }
  .detail-7-inner input {
    width: 300px;
  }
  .detail-7-inner {
    display: flex;
    gap: 15px;
  }
  .detail-7-sub {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  .schedule-btn {
    animation: pulseGlow 2s infinite;
  }
  .schedule-btn {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    color: #000000;
    background: #cc9430; /* base color */
    font-size: 13px;
    border: none;
    font-weight: 700;
    width: 188px;
    height: 60px;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease;
  }

  /* Gradient overlay with 4 colors */
  .schedule-btn::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      #b47c1f,
      /* deep bronze */ #cc9430,
      /* your base */ #523803ff,
      /* warm gold */ #816924ff /* light champagne */
    );
    transform: translateY(100%);
    transition: transform 0.4s ease-in-out;
    z-index: 0;
    border-radius: inherit;
  }

  .schedule-btn:hover::before {
    transform: translateY(0);
  }

  /* Make sure button text & icons are visible above gradient */
  .schedule-btn * {
    position: relative;
    z-index: 1;
  }

  .schedule-btn span {
    position: relative;
    z-index: 1;
  }

  .schedule-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000;
    border-radius: 100px;
    width: 50px;
    height: 50px;
  }
  .details-7 h2 {
    color: #ffffff;
    font-size: 50px;
    line-height: 52px;
    max-width: 335px;
    text-align: center;
  }
  .details-7 {
    display: flex;
    flex-direction: column;
    gap: 30px;

    align-items: center;
    margin-top: 80px;
    padding-bottom: 80px;
    border-top: 1px solid #e0e0e0;
    padding-top: 50px;
  }
  @media (max-width: 1200px) {
    .all-detail-sub-card {
        grid-template-columns: repeat(3, 1fr);
        gap: 50px;
    }
  }
   @media (max-width: 1100px) {
 .slide img {
    width: 600px;
 }
   }
   @media (max-width: 992px) {
    .detail-3 {
        flex-direction: column;
    }
    h1 {
        font-size: 50px !important;
        font-weight: 52px !important;
    }
     h2 {
        font-size: 35px !important;
        font-weight: 35px !important;
    }
     .all-detail-sub-card {
        grid-template-columns: repeat(2, 1fr);
    }
    .detail-6 {
        flex-direction: column;
    }
    .detail-6-right {
        width: 100%;
    }
   }

            @media (max-width: 800px) {
                 .slide img {
    width: 100%;
 }
            }

         @media (max-width: 700px) {
 .carousel img {
    height: 500px !important;
 }
   .carousel-item {
    flex: 0 0 90%; 
   }
   input, textarea  {
    width: 400px !important;
   }
   .detail-7-inner {
    flex-direction: column;
    gap: 20px;
   }
         }

      @media (max-width: 600px) {
    
     .all-detail-sub-card {
        grid-template-columns: repeat(1, 1fr);
    }
    .detail-5-upper {
    flex-direction: column;
    align-items: flex-start;
    
}
.detail-4-sub {
    width: 100%;
}
 .detail-4-sub-cut {
    right: 110px;
 }
  .detail-4-sub-circle  {
    right: 143px;
  }
.detail-5-image-button  {
        display: none;
    }
    .opened-faq-head, .opened-faq-btns {
        flex-wrap: wrap;
    }
   }
   @media (max-width: 500px) { 
.details-2-middle {
    flex-direction: column;
}
 .carousel img {
    height: 400px !important;
 }
 input, textarea  {
    width: 300px !important;
   }
   .carousel-item {
    flex: 0 0 100%; 
   }
     .slide img {
    height: 400px;
 }
 .slide-img img {
    object-fit: contain;

 }
 .detail-5-links {
    flex-wrap: wrap;
 }
   }

      @media (max-width: 400px) { 
 .carousel img {
    height: 350px !important;
 }
    .slide img {
    height: 350px;
 }
      }
`;

const ProjectDetails = () => {



  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const [activeLink, setActiveLink] = useState("photo");
  const [currentIndexNew, setCurrentIndexNew] = useState(0);
  
  const [currentIndexPlan, setCurrentIndexPlan] = useState(0);
  const [animation, setAnimation] = useState("");
  const [imageDrop, setImageDrop] = useState(false);
  const [planDrop, setPlanDrop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

 
 const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  });


     const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };
 

  const videosec = {
    video: "/images/video-1.mp4",
    image: "/images/image-1.jpeg",
  };

 const URL = "https://spatial-backend.onrender.com";
 
   const { homeData, homeObject, projectDetails, loading, error } = useSelector(
     (state) => state.content || []
   );
 
   console.log(projectDetails);
  
 
   const details = projectDetails?.project
     const detailImageList = details?.bannerList || []
   const location = useLocation();
   useEffect(() => {
     setTimeout(() => {
       window.scrollTo(0, 0);
       document.body.scrollTop = 0;
       document.documentElement.scrollTop = 0;
     }, 0);
   }, [location.pathname]);
 
   useEffect(() => {
    if (id) {
     dispatch(fetchProjectDetails(id)); // Call API on component mount

    }
   }, [dispatch]);
 



  
  const handleImageDrop = () => {
    setImageDrop(!imageDrop);
  };
  const handlePlanDrop = () => {
    setPlanDrop(!planDrop);
  };
  const handleNextNew = () => {
    setAnimation("slide-right");
    setCurrentIndexNew((prevIndex) => (prevIndex + 1) % detailImageList?.length);
  };
 

  const handlePrevNew = () => {
    setAnimation("slide-left");
    setCurrentIndexNew((prevIndex) =>
      prevIndex === 0 ? detailImageList?.length - 1 : prevIndex - 1
    );
  };


  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextNew(),
    onSwipedRight: () => handlePrevNew(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });


  // helpers to get prev/next images
  const prevIndex =
    (currentIndexNew - 1 + detailImageList?.length) % detailImageList?.length;
  const nextIndex = (currentIndexNew + 1) % detailImageList?.length;

  const handleClickLink = (link) => {
    setActiveLink(link);
  };
 
    function formatPrice(value) {
    if (!value) return "-";
    const num = Number(value);

    if (isNaN(num)) return value;

    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "T"; // or "K" if you prefer
    }
    return num.toString();
  }
  return (
    <DetailsRap>
     

       <div
        style={{
          backgroundColor: "#000000",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${URL}${details?.banner})`,
        }}
        className="detail-1 containers"
      >
        <h2>{details?.name}</h2>
        <div className="about-sub">
          <div className="about-sub-left">
            <Link to="/home" className="home-link">
              Home
            </Link>
            {/* <div className="about-sub-left-div"></div>
            <p>{details?.name}</p> */}
          </div>
          {/* <p>
            Whether you’re building, remodeling, buying, or selling, we bring seamless project execution under one roof.
          </p> */}
        </div>
      </div>
      <div className="details-2 containers">
        <div className="details-2-upper">
          <div className="details-2-upper-1">
            <img src="/images/icon-3.png" alt="" />
            <p>{details?.address} </p>
          </div>
          <h1>{details?.name} </h1>
        </div>
        <div className="details-2-middle">
          <div className="details-2-middle-sub">
            <div className="detail-2-img-box">
                <Icon className="icon"
                           width="20px"
                           height="20px"
                           icon="material-symbols:signal-wifi-statusbar-not-connected"
                           color="white"
                         />
            </div>
            <div className="details-2-middle-inner">
              <p>Status</p>
              <h4>{details?.projectStatus}</h4>
            </div>
          </div>
          <div className="details-2-middle-sub">
            <div className="detail-2-img-box">
                <Icon className="icon"
                           width="20px"
                           height="20px"
                           icon="fa7-solid:diagram-project"
                           color="white"
                         />
            </div>
            <div className="details-2-middle-inner">
              <p>Project Type</p>
              <h4>{details?.projectType}</h4>
            </div>
          </div>
          <div className="details-2-middle-sub">
            <div className="detail-2-img-box">
                <Icon className="icon"
                           width="20px"
                           height="20px"
                           icon="garden:original-size-fill-16"
                           color="white"
                         />
            </div>
            <div className="details-2-middle-inner">
              <p>Project Size</p>
              <h4>{details?.projectSize}</h4>
            </div>
          </div>
          <div className="details-2-middle-sub">
            <div className="detail-2-img-box">
               <Icon className="icon"
                           width="20px"
                           height="20px"
                           icon="icon-park-solid:update-rotation"
                           color="white"
                         />
            </div>
            <div className="details-2-middle-inner">
              <p>Commencement date</p>
              {/* <h4> {new Date(details?.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</h4> */}
              <h4> 
                
                 {details?.dateCreated
                      ? new Date(details.dateCreated).toLocaleDateString("en-GB")
                      : ""}
              </h4>
            </div>
          </div>
          {/* <div className="details-2-middle-sub">
            <div className="detail-2-img-box">
              <img src="/images/img-1.png" alt="" />
            </div>
            <div className="details-2-middle-inner">
              <p>Price Range</p>
              <h4>           ₦{formatPrice(details?.price_from)} - {formatPrice(details?.price_to)}</h4>
            </div>
          </div> */}
        </div>
        <img className="detail-2-img" src={`${URL}${details?.banner}`} alt="" />
      </div>
      <div className="detail-3 containers">
        <div className="detail-3-left">
          <h2>Project description</h2>
          <div className="describe"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
              dangerouslySetInnerHTML={{ __html: details?.description }}
            />
           
        </div>
        <div className="detail-3-right">
          <h4>Key Details</h4>
          <ul>
            <li>
              <span>Location: </span>
              {details?.address}
            </li>
            <li>
              <span>Category: </span>
              {details?.projectType}
            </li>
            <li>
              <span>Client Name: </span>
              {details?.client}
            </li>
            <li>
              <span>Special Features: </span>
             {details?.specialFeatures}
            </li>
           
          </ul>
        </div>
      </div>
      <div className="detail-4 containers">
        <h2>Features</h2>
        <div className="all-detail-sub-card">
          {details?.projectFeatures?.map((feature, index) => (
 <div className="detail-4-sub">
            <h4>{feature?.title}</h4>
            <p>
             {feature?.content}
            </p>
            <img className="detail-4-sub-cut" src="/images/cut-in.png" alt="" />
            <div className="detail-4-sub-circle">
              <img src="/images/img-4.png" alt="" />
            </div>
          </div>
          ))}
         
         
        </div>
      </div>
      <div className="detail-5 containers">
        <div className="detail-5-upper">
          <h2>Media</h2>
          <div className="detail-5-links">
            <Link
              className={`link ${activeLink === "photo" ? "active" : ""}`}
              onClick={() => handleClickLink("photo")}
            >
              <img src="/images/photo-icon.png" alt="" />
              Photo
            </Link>
           
            <Link
              className={`link ${activeLink === "video" ? "active" : ""}`}
              onClick={() => handleClickLink("video")}
            >
              <img src="/images/video-icon.png" alt="" />
              Videos
            </Link>
          </div>
        </div>
        <div className="detail-5-down">
          {activeLink === "photo" && (
            <>
              <div className="home-11 containers">
                <button
                  onClick={handlePrevNew}
                  className="detail-5-image-button detail-5-image-button-left"
                >
                  <Icon
                    className="icon-home-11"
                    icon="solar:arrow-left-outline"
                    width="24"
                    height="24"
                    style={{ color: "#000000", cursor: "pointer" }}
                  />
                </button>
                <div
                  onClick={handleImageDrop}
                  className="carousel"
                  {...handlers}
                >
                  {/* Previous */}
               

{/* Previous */}
{detailImageList[prevIndex] && (
  <div className="carousel-item prev">

    <img 
     src={`${URL}${detailImageList[prevIndex]}`}
     alt="Previous" />
  </div>
)}
{/* Current */}
{detailImageList[currentIndexNew] && (
  <div
    className={`carousel-item active ${animation}`}
    onAnimationEnd={() => setAnimation("")}
  >
    <img
    src={`${URL}${detailImageList[currentIndexNew]}`}
     
      alt="Current"
    />
  </div>
)}
 {/* Next */}
{detailImageList[nextIndex] && (
  <div className="carousel-item next">
    <img 
     src={`${URL}${detailImageList[nextIndex]}`}
     alt="Next" />
  </div>
)}


                </div>
                <button
                  onClick={handleNextNew}
                  className="detail-5-image-button detail-5-image-button-right"
                >
                  <Icon
                    className="icon-home-11"
                    icon="icons8:right-arrow"
                    width="24"
                    height="24"
                    style={{ color: "#000000", cursor: "pointer" }}
                  />
                </button>
              </div>
              {imageDrop ? (
                <div className="dropdown-container-two">
                  <div className="times-icon">
                    <p>Close</p>
                    <Icon
                      onClick={handleImageDrop}
                      icon="humbleicons:times"
                      width="30"
                      height="30"
                      style={{ color: "#ffffff", cursor: "pointer" }}
                    />
                  </div>
                  <div className="drop-image-slider-image">
                    <Icon
                      onClick={handlePrevNew}
                      icon="fe:arrow-left"
                      width="24"
                      height="24"
                      style={{ color: "#ffffff", cursor: "pointer" }}
                    />
                    <div className="image-slider" {...handlers}>
                      <div
                        className={`slide active ${animation}`}
                        onAnimationEnd={() => setAnimation("")}
                      >
                        <img
                          src={`${URL}${detailImageList[currentIndexNew]}`}
                          alt="Current Slide"
                        />
                      </div>
                    </div>
                    <Icon
                      onClick={handleNextNew}
                      icon="fe:arrow-right"
                      width="24"
                      height="24"
                      style={{ color: "#ffffff", cursor: "pointer" }}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          )}
          
          {activeLink === "video" && (
            <>
              <div className="video-home-container containers">
                <div
                  className="video-wrapper"
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "1110px",
                    height: "480px",
                    margin: "auto",
                    borderRadius: "12px",
                  }}
                >
                  {!isPlaying && (
                    <div
                      className="video-cover"
                      style={{
                        position: "relative",
                        cursor: "pointer",
                        height: "480px",
                        borderRadius: "12px",
backgroundImage: `url(${videosec?.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      onClick={() => setIsPlaying(true)}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "174px",
                          height: "58px",
                          display: "flex",
                          background: "#0000003D",
                          borderRadius: "2px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <span
                          style={{
                            color: "white",
                            fontSize: "20px",
                            fontWeight: "600",
                          }}
                        >
                          ▶{" "}
                        </span>
                        <p
                          style={{
                            color: "white",
                            fontSize: "20px",
                            fontWeight: "600",
                          }}
                        >
                          Play video
                        </p>
                      </div>
                    </div>
                  )}

                  {isPlaying &&
                    (details.video.includes("youtube") ||
                    details.video.includes("youtu.be") ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`${
                          details.video.includes("?")
                            ? `${details.video}&playsinline=1&autoplay=1`
                            : `${details.video}?playsinline=1&autoplay=1`
                        }`}
                        title="Video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        width="100%"
                        height="100%"
                        controls
                        playsInline
                        autoPlay
                      >
                        <source src={`${URL}${details?.video}`} />
                        Your browser does not support this video format.
                      </video>
                    ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    
      <div className="details-7">
        <h2>Request more information</h2>
        <div className="detail-7-sub">
          <div className="detail-7-inner">
            <input 
             name="last_name"
            value={formData.last_name} 
            onChange={handleChange}
            type="text" placeholder="Last Name" />
            <input 
             name="first_name"
            value={formData.first_name} 
            onChange={handleChange}
            type="text" placeholder="First Name" />
          </div>
          <input 
           name="email"
            value={formData.email} 
            onChange={handleChange}
          type="email" placeholder="Email" />
          <textarea 
           name="message"
            value={formData.message} 
            onChange={handleChange}
          type="text" placeholder="Message" />
          <button
       
            className="schedule-btn"
          >
               
            <span> Submit</span>
            <div className="schedule-circle">
              <Icon
                width="18px"
                height="18px"
                icon="tabler:arrow-up-right"
                style={{ color: "#cc9430" }}
              />
            </div>
            
          </button>
        </div>
      </div>
    </DetailsRap>
  );
};

export default ProjectDetails;
