import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const ServiceRap = styled.div`
background: #000000;
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

  .home-2-upper-left {
    border: 1px solid #cc8825;
    border-radius: 20px;
    padding: 10px 15px;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: slideInLeft 1s ease-in-out forwards;
    height: fit-content;
    width: 130px;
  }
  .home-2-upper-left p {
    color: #ffffff !important;
    font-family: Arial, Helvetica, sans-serif !important;
    font-weight: 700 !important;
    font-size: 10px !important;
  }
  .service-upper h2 {
    font-size: 60px;
    line-height: 72px;
    max-width: 618px;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
  }
  .service-upper{
    display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  }
  .service-1 {
    display: flex;
    align-items: center;
    margin: 100px auto;
    margin-bottom: 50px;
    flex-direction: column;
  }
  .service-2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .all-services {
     padding-bottom: 100px;
    
  }
   .about-4-card{
    width: 370px;
    height: 500px;
    border-radius: 30px;
    padding: 20px;
    padding-bottom: 40px;
    display: flex;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
      z-index: 1;
  }

  .about-4-card > * {
  position: relative;
  z-index: 2; /* text and content above the overlay */
}
  .about-4-card-two > * {
  position: relative;
  z-index: 2; /* text and content above the overlay */
}

/* gradient overlay */
.about-4-card::before {
  content: "";
  position: absolute;
  inset: 0;
    color: #ffffff; /* text turns white */
  background: transparent;
  background-size: cover;
  transform: translateY(100%);
  transition: transform 0.4s ease-in-out;
  z-index: 1; /* sits below text */
  border-radius: inherit;
}

.about-4-card:hover::before {
  transform: translateY(0);
}



/* default circle */
.about-card-4-circle {
  background: #cc9430;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 5px;
  position: relative;
  z-index: 3; /* stays above overlay */
  transition: background 0.3s ease-in-out;
}

/* circle changes on card hover */
.about-4-card:hover .about-card-4-circle {
  background: #1b1f12;
}




 
  
   .about-card-4-circle-all {
    background-image: url("./images/shape.png");
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: absolute;
    right: 0px;
   margin-left: 40px;
    bottom: 0px;
    z-index: 1;
  }

  .about-card-4-circle {
    background: #cc9430;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    display: flex;
    margin-right: 5px;
    margin-bottom: 5px;
    justify-content: center;
    align-items: center;
  }
  .about-4-card {
    background: #1b1f12;


  }
 

  .about-4-card-upper-1 p,
  .about-4-card-upper-2 p {
    font-size: 12px;
    font-weight: 600;
    color: #ffffffb2;
  }
  .about-4-card-upper-2 p {
    color: #ffffffb2;
  }

  .about-4-card-upper-1 {
    border-bottom: 0.8px solid #ffffff;
    padding-bottom: 15px;
  }
  .about-4-card-upper-2 {
    border-bottom: 0.8px solid #000000;
    padding-bottom: 15px;
  }
  .about-4-card h4,
  .about-4-card-two h4 {
    font-size: 35px;
    font-weight: 600;
    line-height: 46px;
    max-width: 212px;
    color: #ffffff;
  }
  .about-4-card-two h4 {
    color: #ffffff;
  }
  .about-4-card h5,
  .about-4-card-two h5 {
    font-size: 18px;
    font-weight: 400;
    max-width: 331px;
    line-height: 26px;
    color: #ffffffb2;
  }
  .about-4-card-two h5 {
    color: #ffffff;
  }

  /* Change colors on hover */
.about-4-card:hover h4 {
  color: #ffffff; /* solid black */
}

.about-4-card-two:hover h4 {
  color: #ffffff; /* solid black */
}
.about-4-card:hover .about-4-card-upper-1 p {
    color: #cc8825;
}
.about-4-card:hover h5 {
  color: #ffffff; /* black for subtext */
}
.about-4-card-two:hover h5 {
  color: #ffffff; /* solid black */
}

.about-4-card:hover .about-4-card-upper-1 p {
  color: #cc8825; /* change number text to black */
}

.about-4-card-two:hover .about-4-card-upper-2 p {
  color: #ffffff; /* change number text to black */
}

.about-4-card:hover .about-4-card-link {
  color: #000000; /* change number text to black */
}
.about-4-card-two:hover .about-4-card-link-two {
  color: #000000; /* change number text to black */
}
  .about-4-card-link,
  .about-4-card-link-two {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
  }
  .about-4-card-link-two {
    color: #000000;
  }
  .about-4-card-down {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .about-4-card-img {
    width: 350px;
    height: 270px;
    position: absolute;
    left: -10px;
    bottom: -50px;
  }
  .about-4-down {
    display: flex;
    gap: 20px;
  }

   .pagination {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }

  .pagination button {
    background: transparent;
    border: none;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pagination button.active {
    background: #000;
    color: #fff;
  }
 @media (max-width: 1300px) {
   .service-2 {
    gap: 6px;
   }
   .about-4-card {
    width: 380px;
   }
  }

   @media (max-width: 1200px) {
   .service-2 {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
   }
   .about-4-card {
    width: 400px;
   }
  }
   @media (max-width: 900px) {
   .service-2 {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
   }
  
  }
    @media (max-width: 450px) {
  .about-4-card {
    width: 380px;
   }
  
  }

    @media (max-width: 400px) {
  .about-4-card {
    width: 350px;
   }
  
  }
    @media (max-width: 370px) {
  .about-4-card {
    width: 320px;
   }
  
  }
     @media (max-width: 340px) {
  .about-4-card {
    width: 300px;
   }
  
  }
`;

const Services = () => {
const navigate = useNavigate();
  const dispatch = useDispatch();

  const services = [
    {
      id: 0,
      banner: "/images/image-1.jpeg",
      title: "Environmental Assessment & Management",
      sub_title:
        "These services support organizations in evaluating, managing, and minimizing environmental and social impacts in compliance with national and international standards.",
    },
    {
      id: 1,
      banner: "/images/image-2.jpg",
      title: "Health, Safety & Regulatory Compliance",
      sub_title:
        "Focused on developing systems and assessments that promote workplace safety, regulatory compliance, and risk management.",
    },
    {
      id: 2,
      banner: "/images/image-3.jpg",
      title: "Geospatial Technology & Land Use Services",
      sub_title:
        "These services utilize advanced mapping and spatial tools to support planning, resource management, and environmental monitoring.",
    },
  ]


  
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 0);
  }, [location.pathname]);

    
    
  const handleClick = (id) => {
    navigate(`/services/details/${id}`);
    window.scrollTo(0, 0); // forces scroll to top
  };

  return (
    <ServiceRap>
      <div
        style={{
          backgroundColor: "#000000",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/image-1.jpeg)`,
        }}
        className="about-1 containers"
      >
        <h2>Our Services</h2>
        <div className="about-sub">
          <div className="about-sub-left">
            <Link to="/home" className="home-link">
              Home
            </Link>
            <div className="about-sub-left-div"></div>
            <p>Services</p>
          </div>
        </div>
      </div>
      <div className="service-1 containers">
        <div className="service-upper">
          <div className="home-2-upper-left">
            <p>What We Offer </p>
          </div>
          <h2>Take a brief look at some of the services we offer</h2>
        </div>
      </div>
      <div className="all-services containers">
      <div className="service-2 ">
{services?.map((items, index) => {
  // extract the first <p> from overview
  // const firstParagraph = items?.overview?.match(/<p>(.*?)<\/p>/)?.[0] || "";

  return (
<div
  key={index}
  onClick={() => handleClick(items?.id)}
  className="about-4-card"
  style={{
    backgroundColor: "#8b4513",
    color: "#000000",
  }}
  onMouseEnter={(e) => {
    
    e.currentTarget.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${items?.banner})`;
    e.currentTarget.style.backgroundColor = "transparent";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundImage = "none";
    e.currentTarget.style.backgroundColor = "#8b4513";
  }}
>
      <div className="about-4-card-upper-1">
        <p>0{index + 1}</p>
      </div>
      <div className="about-4-card-down">
        <h4>{items?.title}</h4>
        <h5>{items?.sub_title}</h5>
        {/* <h5 dangerouslySetInnerHTML={{ __html: firstParagraph }} /> */}
      </div>
      <div className="about-card-4-circle-all">
        <div className="about-card-4-circle">
          <Icon
            width="18px"
            height="18px"
            icon="tabler:arrow-up-right"
            style={{ color: "#000000" }}
          />
        </div>
      </div>
    </div>
  );
})}


    </div>
   
    </div>

    </ServiceRap>
  );
};
export default Services;
