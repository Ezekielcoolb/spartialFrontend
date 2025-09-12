import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchObjectpage } from "../Redux/slice/homeSlice";
import { motion } from "framer-motion";

const AboutRap = styled.div`
  background: #000000;
 @media (max-width: 778px) {
  padding-top: 60px;
 }
  .about-1 {
    background-size: cover; /* ensures the image fits */
    background-repeat: no-repeat;
    background-position: center;
    padding-bottom: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    min-height: 60vh; /* fits the viewport */
    height: auto; /* allows dynamic height based on content */
    box-sizing: border-box;
    overflow: hidden; /* prevents content from overlapping */
  }
  .about-1 p {
    color: #ffffffb2;
    font-size: 20px;
    font-weight: 400;
    max-width: 311px;
    line-height: 26px;
  }
  .about-1 h2 {
    color: #ffffff;
    font-size: 50px;
    font-weight: 600;
  }
  .schedule-btn {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    color: #000000;
    background: #ffffff;
    font-size: 15px;
    font-weight: 600;
    width: 202px;
    border: 1px solid #e0e0e0;
    height: 60px;
    border-radius: 100px;
  }
  .schedule-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #cc9430;
    border-radius: 100px;
    width: 50px;
    height: 50px;
  }

  .home-2-new-upper p {
    border: 1px solid #e77817;
    border-radius: 20px;
    width: 103px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e77817;
    font-size: 15px;
    font-weight: 600;
  }
  .home-2-new-upper h3 {
    color: #ffffff;
    font-size: 50px;
    font-weight: 600;
    line-height: 50px;
    max-width: 617px;
  }
  .home-2-upper p {
    border: 1px solid #cc9430;
    border-radius: 20px;
    width: 168px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    font-size: 13px;
    font-weight: 600;
  }
  .home-2-upper h2 {
    color: #00001c;
    font-size: 50px;
    font-weight: 600;
    line-height: 50px;
    max-width: 554px;
  }
  .home-2-upper,
  .home-2-new-upper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  .home-2-new-down-inner p {
    max-width: 520px;
    color: #dedef4ff;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
  }
  .home-2-new-down-inner h4,
  .home-2-new-down-inner h2,
  .home-2-new-down-inner h3,
  .home-2-new-down-inner h5,
  .home-2-new-down-inner h6 {
    max-width: 432px;
    line-height: 23px;
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
  }
  .home-2-new-down-inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    background: #218838;
    border-radius: 12px;
    margin-left: -40px;
  }
  .home-2-new-down img {
    max-width: 660px;
    height: 550px;
    border-radius: 12px;
  }
  .home-2-new-down {
    display: flex;
    align-items: center;
  }
  .home-2-new {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: 80px 0px;
  }
  .home-3-upper p {
    border: 1px solid #e77817;
    border-radius: 100px;
    padding: 15px;
    height: 35px;
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    color: #e77817;
    font-size: 13px;
    font-weight: 600;
  }
  .home-3-upper h2 {
    color: #ffffff;
    font-size: 50px;
    font-weight: 600;
    line-height: 50px;
    max-width: 539px;
    text-align: center;
  }
  .home-3-upper {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
  .home-3-card-up h4 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
  }
  .home-3-card-up h5 {
    color: #ffffff;
    font-size: 60px;
    font-weight: 600;
    max-width: 300px;
    line-height: 60px;
  }
  .home-3-card-up p {
    color: #eae2e2ff;
    font-size: 16px;
    font-weight: 400;
    max-width: 256px;
  }
  .home-3-card-up h6 {
    color: #eae2e2ff;
    font-size: 16px;
    font-weight: 400;
    max-width: 300px;
  }
  .home-3-card-up {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .home-3-card-new {
    background: #ce6b15ff;
    width: 50%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 50px;
  }
  .home-3-card {
    width: 100%;
    height: 285px;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
  }
  .home-3-card-new img {
    width: 865px;
    height: 430px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;
  }

  .home-3-card img {
    width: 330px;
    height: 230px;
    position: absolute;
    bottom: 0px;
    right: -50px;
  }

  .home-3-down {
    display: flex;
    gap: 20px;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
  }
  .home-3-new-all {
    display: flex;
    gap: 20px;
    width: 100%;
  }
  .home-3 {
    background: #1a1a1a;
    padding-top: 70px;
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-bottom: 80px;
  }
  .about-2-left p,
  .about-4-upper p,
  .home-4-upper p {
    border: 1px solid #e77817;
    border-radius: 20px;
    width: fit-content;
    padding: 15px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e77817;
    font-size: 15px;
    font-weight: 600;
  }
  .about-4-upper h2 {
    color: #ffffff;
    font-size: 50px;
    font-weight: 600;
    line-height: 50px;
    max-width: 549px;
    text-align: center;
  }
  .about-2-left h2 {
    color: #00001c;
    font-size: 50px;
    font-weight: 600;
    line-height: 55px;
    max-width: 512px;
  }
  .about-2-left {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .about-2-right h6 {
    color: #00001c;
    font-size: 18px;
    font-weight: 600;
    line-height: 100%;
    max-width: 484px;
  }
  .about-2-right p {
    color: #72727f;
    font-size: 18px;
    font-weight: 400;
    text-align: justify;
    line-height: 100%;
    max-width: 484px;
  }
  .about-2-right {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .about-2-right-right {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .about-2 {
    background: #ffffff;

    z-index: 1000;
    display: flex;
    margin-bottom: 100px;
    justify-content: space-between;
    padding-top: 70px;
  }
  .about-3 {
    background-size: cover; /* ensures the image fits */
    background-repeat: no-repeat;
    background-position: center;
    width: 90%;
    margin: auto;
    padding-top: 100px;
    padding-bottom: 30px;
    padding-right: 30px;
    position: relative;
  }
  .about-3::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0px;
    width: 120px;
    height: 50px;
    background-color: #ffffff;
    border-bottom-right-radius: 20px;

    z-index: 2;
  }
  .about-3-card-sub h4 {
    color: #00001c;
    font-size: 40px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .about-3-card-sub p {
    color: #8a8a8a;
    font-size: 18px;
    font-weight: 500;
  }
  .about-3-card-sub {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .about-3-card {
    background: #f5f5f5;
    width: 312px;
    padding: 20px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .about-3-card-img img {
    width: 50px;
    height: 50px;
  }
  .about-3-card-img {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .about-3-inner {
    display: flex;
    gap: 20px;
  }
  .about-3-left {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
  }
  .about-4-inner p {
    color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    text-align: center;
  }
  .about-4-inner h4 {
    color: #ffffff;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
  .about-4-inner {
    background: #00001c;
    border: 1px solid #ffffff1a;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 15px;
    left: 40px;
    border-radius: 20px;
    position: absolute;
    bottom: -40px;
  }
  .about-4-sub {
    width: 390px;
    height: 500px;
    position: relative;
    cursor: pointer;
    transform: scale(0.8);
  opacity: 0;
  transition: transform 0.6s ease, opacity 0.6s ease;
  }

  
.about-4-sub.animate {
  transform: scale(1);
  opacity: 1;
}
  .about-4-sub img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .about-4-upper h4 {
    color: #00001c;
    font-size: 70px;
    font-weight: 600;
    line-height: 74px;
    max-width: 549px;
    text-align: center;
  }
  .about-4-upper {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  .about-4-down {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }
  .about-4 {
    padding: 100px 0px;
    display: flex;
     background: #1a1a1a;
    flex-direction: column;
    gap: 50px;
    align-items: center;
  }
  .home-4-upper img {
    width: 64px;
    height: 64px;
  }
  .home-4-upper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  .home-11-inner-1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  .home-11-inner-1 h2 {
    color: #34302f;
    font-size: 45px;
    font-weight: 500;
    text-align: center;
    max-width: 571px;
    margin: 0px;
  }
  .home-11-inner-2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .home-11-inner-2 img {
    width: 270px;
    height: 245px;
  }

  .logitech p {
    color: #00001c;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    line-height: 100%;
    max-width: 747px;
  }
  .logitech-sub img {
    width: 60px;
    height: 60px;
    border-radius: 100px;
  }
  .logitech-sub h4 {
    color: #00001c;
    font-size: 18px;
    font-weight: 600;
  }
  .logitech-sub h6 {
    color: #8a8a8a;
    font-size: 16px;
    font-weight: 400;
  }
  .logitech-sub {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
  }
  .logitech {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .home-11 {
    margin: 100px 0px;
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
  .home-10 {
    margin-bottom: 100px;
  }
  .home-4 {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 70px 0px;
  }
  .home-5 p {
    color: #00001c;
    font-size: 14px;
    text-align: center;
    font-weight: 600;
  }
  .home-5-img {
    width: 232px;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home-5-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .home-5-sub {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  .home-5 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-top: 1px solid #e0e0e0;
    padding-top: 50px;
    margin-top: 70px;
  }
  .about-5 {
    background: #f6f3ec;
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
    z-index: 1000;
    position: relative;
    padding-bottom: 20px;
    padding-top: 30px;
  }
  .dropdown-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3); /* Semi-transparent dark background */
  backdrop-filter: blur(2px); /* Adds a blur effect */
  z-index: 9999;
  top: 0;
  left: 0;
}
.pop-div-header-sub p {
  color: #000000B2;
  font-size: 14px;
  font-weight: 500;
}
.pop-div-header-sub h2 {
  color: #000000;
  font-size: 24px;
  font-weight: 700;
}
.pop-div-header-sub  {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.pop-div-header {
  display: flex;
  gap: 20px;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #00100B1A;
}
.email-phone p {
  color: #000000B2;
  font-size: 14px;
  font-weight: 500;

}
.email-phone h4 {
  font-size: 14px;
  font-weight: 500;
  color: #000000;

}
.email-phone {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pop-1 {
  padding: 20px 0px;
  border-bottom: 1px solid #00100B1A;
  display: flex;
  gap: 20px;
  justify-content: space-between;
}
.pop-2 h4 {
  font-size: 14px;
  font-weight: 500;
  color: #000000;
}
.pop-2 p {
  color: #000000B2;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  max-width: 473px;
}
.pop-2 {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.pop-3 button {
  width: 201px;
  height: 52px;
  border-style: none;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
.black-btn {
  background: #000000;

}
.colored-btn {
  background: #E06F29;

}
.pop-3 {
  display: flex;
  gap: 20px;
}
.pop-div-body {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.pop-div {
  background: #FFFFFF;
  box-shadow: 0px 8px 4px -4px #0000000A;

  box-shadow: 0px 20px 24px -4px #0000001A;
border-radius: 8px;
padding: 30px;  
}
 .pop-div-header img {
    width: 90px;
    height: 90px;
  }
  @media (max-width: 1200px) {
    .home-3-down {
      flex-wrap: wrap;
    }
    .home-3-card,
    .home-3-card-new {
      width: 500px;
    }
  }
  @media (max-width: 1024px) {
    .home-2-new-down {
      flex-direction: column;
    }
    .home-2-new-down-inner {
      margin-left: 0px;
      margin-top: -40px;
    }
    .home-3-new-all {
      flex-direction: column;
    }
  }
  @media (max-width: 992px) {
    .home-1-down,
    .home-2-upper,
    .home-5-sub,
    .home-6-upper-left,
    .home-6-down {
      flex-wrap: wrap;
    }
  .pop-div {
    margin: 10px;
  }
    .home-2-wrapper-mobile {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      align-items: center;
    }
    .home-2-wrapper {
      display: none;
    }
    .about-3-inner {
        flex-direction: column;
    }
    .about-3-left {
        align-items: center;
    }
    .about-4-down {
        flex-direction: column;
        gap: 70px;
    }
    .home-3-card-new, .home-3-down {
      width: 100%;
    }
    .home-3-card-up p,  .home-3-card-up h6 {
      max-width: 100%;
    }
  }
  @media (max-width: 700px) {
    .home-2-new-down img {
      max-width: 500px;
    }
  }
  @media (max-width: 600px) {
    .home-11-inner-2 {
      flex-direction: column;
      gap: 30px;
    }
    .home-3-card {
      width: 400px;
      height: 300px;
    }
    
    .home-3-card-new {
       height: 500px;
    }
    .home-3-card-new img,
    .home-3-card img {
      height: 300px;
      width: 605px;
    }

    .home-3-card img {
      right: 0px;
      left: 0px;
    }
  }

  @media (max-width: 550px) {
    .home-2-new-down img {
      max-width: 400px;
      height: 400px;
    }
  }
  @media (max-width: 450px) {
    .home-3-card
   {
      width: 330px;
      
    }
      .home-3-card-new {
height: 300px;
      }
    .home-3-card-new img,
    .home-3-card img {
      height: 250px;
      width: 505px;
    }
    .home-3-card-new {
        justify-content: flex-start;
    }
    .home-3-card-up h5 {
        font-size: 24px;
        line-height: 32px;
    }
       .about-3 {
        padding-left: 10px;
       }
       .about-3-card {
        width: 250px;
       }
        .about-4-sub {
    width: 350px;

        }
        .about-4-inner {
            left: 20px;
        }
  }

    @media (max-width: 360px) {
   .about-4-sub {
    width: 330px;

        }
         .home-3-card
   {
      width: 300px;
      
    }
     
    }
`;
const About = () => {
  const teamser = [
    {
      id: 0,
      title: "Managing Consultant ",
      certification: "Nigerian Environment Society (NES), Institute of  Safety Professionals of Nigeria (ISPON), Nigerian Red Cross Society amongst others",
      name: "EMMANUEL GEORGE",
      overview:
        "Emmanuel George is a seasoned HSE and HR professional with over 23 years’ experience in safety management, environmental compliance, and HR operations. He has led HSE system implementation, audits, risk assessments, and major projects in drilling, construction, and installation, and has facilitated numerous HSE training programs.",
      description: "Emmanuel George is the Managing Consultant for Spatial Ecosystems Limited. Emmanuel  George   has   had   more   than   23 years   experience   in   Health,   Safety   and Environmental (HSE) Management as well as in HR operations. He has had diversified and  progressive expertise in providing health, safety & environmental advice, safety  management and implementation of HSE systems. He has a success record of supervising &  managing drilling, construction and installation projects. He has been involved in the  development and implementation of HSE MS for several organisations and several studies  including EIA, EAs, HSE Audit, Resettlement Action Plan (RAP), Environmental Law Development and Analysis, HAZOP,  HAZID etc. Facilitated several HSE courses including Risk Assessment, Environmental  Awareness and Management, Fire Safety, Accident Reporting and Investigation.",
      email: "example@example.com",
      phone: "09000000000",
      image: "/images/about-2.png"
    },
      {
      id: 1,
      title: "Project Director",
      certification: "BSc in Marine Biology, MSc in Environmental Science; Pollution and Monitoring from Brunel University,  Uxbridge United Kingdom",
      name: "OYENIKE OJUOLAPE SHOBOWALE  ",
      overview: "Mrs. Oyenike Ojuolape Shobowale is a Project Director at Spatial Ecosystems Limited, specializing in environmental science and waste management. With degrees in Marine Biology and Environmental Science, she has worked in the UK and Nigeria on waste management, pollution control, and regulatory compliance, including leadership roles in MARPOL operations.",
      description: "Mrs. Oyenike Ojuolape Shobowale is a Project Director with Spatial Ecosystems Limited. She is an  Environmental Scientist/ Waste Management Specialist with comprehensive industry  knowledge of environmental management systems, technologies and regulatory issues with  emphasis on pollution and monitoring. She has a BSc in Marine Biology from the University of Lagos Akoka, Yaba, Nigeria and she  has an MSc in Environmental Science; Pollution and Monitoring from Brunel University,  Uxbridge United Kingdom. She worked as a Waste Management Advisor with Hyder Consulting (UK) Limited,  developing and implementing waste management schemes for various local government  boroughs in the UK, assisting the local councils to meet waste prevention, recycling and  landfill diversion targets. She was the Regional Manager (West), for African Circle pollution Management Limited,  overseeing the company’s MARPOL waste management operations in Lagos Ports, Free Zone  Enterprises and Lagos Offshore.",
      email: "example@example.com",
      phone: "09000000000",
      image: "/images/about-4.png"
    },
  ];
 const refs = useRef([]);
  const dispatch = useDispatch();

  const [selectedBroker, setSelectedBroker] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  
 
useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 } // triggers when 20% is visible
    );

    refs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const leftVariant = {
    hidden: { opacity: 0, x: -200, y: -100 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100, y: -100 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
  };

   const handlePop = (broker) => {
    setSelectedBroker(broker);
    setShowPopup(true);
  };

   const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <AboutRap>
      <div
  style={{
    backgroundColor: "#000000",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/image-4.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  className="about-1 containers"
>
  <h2 >About Us</h2>
</div>


      <div className="home-2-new containers">
        <div className="home-2-new-upper">
          <p>About Us</p>
          <h3>About Spatial Ecosystems Limited</h3>
        </div>
        <div className="home-2-new-down">
          <motion.img
            src="/images/image-3.jpg"
            alt=""
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          />
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="home-2-new-down-inner"
          >
            <p>
              Spatial Ecosystems Limited is a multi-national Health, Safety,
              Quality and Environmental management company incorporated to
              provide viable and sustainable solutions to individuals and
              organizations in the public and private sector.
            </p>
            <p>
              We are an indigenous firm with international affiliations with
              NEBOSH, IOSH and OSHA, using “best practices” and “best available
              techniques” in carrying out all projects in a professional and
              timely manner
            </p>
            <p>
              Our scope of operation include but are not limited to; HSE
              Consulting, HSE Training, Environmental Management Systems Audit
              and General Project Management.
            </p>
            <p>
              We execute challenging projects under the most critical
              environmental and logistical conditions in all given locations,
              combining innovation and advanced technologies to secure our
              Clients’ successes.
            </p>
          </motion.div>
        </div>
      </div>

      <div id="core-values" className="home-3 containers">
        <div className="home-3-upper">
          <p>Our core values</p>
          <h2>Global executive leadership</h2>
        </div>

        <div className="home-3-new-all ">
          {/* Top Card — Slide from top */}
          <motion.div
            className="home-3-card-new"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="home-3-card-up">
              <h5>Our Core Values, Mission and Vision</h5>
              <h6>
                A successful business is built on trust and this we communicate
                to our clients by paying close attention to their needs and
                responding with the best possible solutions in a timely,
                professional and ethical manner.
              </h6>
            </div>
          </motion.div>

          <div className="home-3-down">
            {/* Mission — Slide from left */}
            <motion.div
              style={{ background: "#8b4513" }}
              className="home-3-card-all"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <div className="home-3-card">
                <div className="home-3-card-up">
                  <h4>Our Mission</h4>
                  <p>
                    To utilize competence and skill pool through education,
                    empowerment and innovative solutions in ensuring safe,
                    healthy and quality development of our clientele at the most
                    effective cost, while upholding best practices and
                    international standards.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision — Slide from right */}
            <motion.div
              style={{ background: "#8b4513" }}
              className="home-3-card-all"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <div className="home-3-card">
                <div className="home-3-card-up">
                  <h4>Our Vision</h4>
                  <p>
                    To be the foremost organization providing effective &
                    quality services in occupational health, safety,
                    environmental management & related disciplines.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${`/images/about-1.png`})`,
        }}
        className="about-3"
      >
        <div className="about-3-left">
          <div className="about-3-card">
            <div className="about-3-card-img">
              <Icon
                className="icon"
                width="60px"
                height="60px"
                icon="bi:people-fill"
                color="black"
              />
            </div>
            <div className="about-3-card-sub">
              <h4>80,123</h4>
              <p>Customers to date</p>
            </div>
          </div>
          <div className="about-3-inner">
            <div className="about-3-card">
              <div className="about-3-card-img">
                <Icon
                  className="icon"
                  width="60px"
                  height="60px"
                  icon="fluent:people-edit-20-filled"
                  color="black"
                />
              </div>
              <div className="about-3-card-sub">
                <h4>500+</h4>
                <p>Training Conducted</p>
              </div>
            </div>
            <div className="about-3-card">
              <div className="about-3-card-img">
                <Icon
                  className="icon"
                  width="60px"
                  height="60px"
                  icon="arcticons:adobe-experience-manager"
                  color="black"
                />
              </div>
              <div className="about-3-card-sub">
                <h4>15+</h4>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="our-team" className="about-4 containers">
        <div className="about-4-upper">
          <p>Our Teams</p>
          <h2>Global executive leadership</h2>
        </div>
        <div className="about-4-down">
      {teamser?.map((item, index) => (
        <div
          key={index}
          ref={el => (refs.current[index] = el)}
          onClick={() => handlePop(item)}
          className="about-4-sub"
        >
          <img src={item.image} alt="" />
          <div className="about-4-inner">
            <p>{item?.title}</p>
            <h4>{item?.name}</h4>
          </div>
        </div>
      ))}
    </div>
      </div>
      


      {showPopup && selectedBroker && (
        <div className="dropdown-container">
          <div className="pop-div">
            <div className="pop-div-header">
              <img
                src={selectedBroker?.image}
                alt={selectedBroker?.name}
              />
              <div className="pop-div-header-sub">
                <h2>
                  {selectedBroker?.name} 
                </h2>
                <p>{selectedBroker?.title }</p>
              </div>
            </div>
            <div className="pop-div-body">
              <div className="pop-1">
                <div className="email-phone">
                  <p>Phone number:</p>
                  <h4>{selectedBroker?.phone || "N/A"}</h4>
                </div>
                <div className="email-phone">
                  <p>Email:</p>
                  <h4>{selectedBroker?.email || "N/A"}</h4>
                </div>
                <div className="email-phone">
                  <p>Certifications:</p>
                  <h4 style={{
                    maxWidth: "200px"
                  }}>{selectedBroker?.certification || "N/A"}</h4>
                </div>
              </div>
              <div className="pop-2">
                <h4>About</h4>
                <p>{selectedBroker?.overview}</p>
              </div>
              <div className="pop-3">
                <button onClick={closePopup} className="black-btn">
                  CLOSE
                </button>
               
              </div>
            </div>
          </div>
        </div>
      )}
    </AboutRap>
  );
};

export default About;
