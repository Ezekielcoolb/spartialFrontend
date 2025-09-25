import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const DetailRap = styled.div`
background: #000000;
  .about-1 {
    background-size: cover; /* ensures the image fits */
    background-repeat: no-repeat;
    background-position: center;
    padding-top: 180px;
    /* margin: 10px;
    border-radius: 24px; */
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
    color: #191816 !important;
    font-family: Arial, Helvetica, sans-serif !important;
    font-weight: 700 !important;
    font-size: 10px !important;
  }
  .detail-left img {
    width: 100%;
    max-width: 840px;
    height: 560px;
    border-radius: 30px;
  }
  h2 {
    color: #ffffff;
    font-size: 50px !important;
  }

  p {
    color: #ffffffb2;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
  .left-1 p,
  .left-2 p {
    max-width: 826px;
  }
  .left-1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .card-circle {
    width: 80px;
    height: 80px;
    border-radius: 100px;
    background: #cc8825;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-circle img {
    width: 36px !important;
    height: 36px !important;
  }
  .left-2-card-text h4 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
  }
  .left-2-card-text p {
    color: #ffffffb2;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    max-width: 276px;
  }
  .left-2-card-text {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .left-2-card {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .left-2-sub {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .left-3-sub span {
    color: #ffffff;
    font-weight: 700;
  }
  .left-3-sub {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .left-3-sub p {
    max-width: 795px;
    line-height: 28px;
  }

  .left-3,
  .left-2,
  .left-1, .left-4, .faq-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .left-3 {
    border-top: 1px solid #e0e0e0;
    padding-top: 40px;
  }
  .faq-all  img {
    width: 36px !important;
    height: 36px !important;
  }
  .faq-text h4 {
    color: #ffffff;
    font-size: 19px;
    line-height: 28px;
    font-weight: 700;
  }
  .faq-text p {
    color: #ffffffb2;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    margin-top: 20px;
    max-width: 531px;
  }
  .faq-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .faq-sub {
    display: flex;
    gap: 20px;
  }
  .faq-all {
display: flex;
align-items: flex-start;
justify-content: space-between;
width: 100%;
padding-top: 20px;
padding-bottom: 20px;
    border-top: 1px solid #e0e0e0;

  }
  .all-details {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: 70px 0px;
  }

   .detail-right, .detail-left {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    /* Left side just scrolls normally */
.detail-left {
  flex: 2;
}

/* Right side sticky */
.detail-right {
  flex: 1;
  position: sticky;
  top: 100px; /* adjust how far from top */
  align-self: flex-start;
  height: fit-content;
}
  .right-1 h4 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    
   
  }

  .right-card {
    display: flex;
    padding: 15px;
    padding-left: 0px;
     border-bottom: 1px solid #e0e0e0;
    cursor: pointer;
   
    transition: color 0.3s ease;
   width: 100%;
    align-items: center;
    justify-content: space-between;
  }
    .right-card:hover {
    background: #cc8825;
    border-radius: 8px;
    padding-left: 15px;
  }
  .right-1 {
    padding: 30px;
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    width: 420px;
    display: flex;
    flex-direction: column;
   
    height: fit-content;
  }
  .right-2  p {
    color: #ffffff;
    font-size: 19px;
    line-height: 28px;
    font-weight: 400;
  }
    .right-2 h4 {
    color: #ffffff;
    font-size: 30px;
    line-height: 46px;
    font-weight: 700;
    border-bottom: 1px solid #cc8825;
    padding-bottom: 10px;
    }
    .call-circle {
        width: 50px;
        height: 50px;
        border-radius: 100px;
        background: #cc8825;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right-2-button {
        background: #ffffff;
        border: none;
        text-decoration: none;
        color: #000000;
        font-size: 16px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        height: 62px;
        border-radius: 100px;
        width: 205px;
    }
    .right-2 {
        display: flex;
        flex-direction:column ;
        align-items: center;
        gap: 15px;
        justify-content: center;
        width: 420px;
        height:402px ;
        border-radius: 12px;
    }

     @media (max-width: 1250px) {
.card-circle{
    width: 60px;
    height: 60px;
}
     }

      @media (max-width: 1200px) { 
.left-2-sub {
    grid-template-columns: repeat(1, 1fr);
}
      }

          @media (max-width: 992px) { 
.all-details {
    flex-direction: column;
    gap: 50px;
}
          }

           @media (max-width: 600px) {  
.detail-left img {
height: 500px;
}
           }
                  @media (max-width: 500px) {  
.detail-left img {
height: 450px;
}
.right-1, .right-2 {
    width: 90vw;
}
           }

                  @media (max-width: 400px) {  
.detail-left img {
height: 400px;
}

.card-circle{
    width: 45px;
    height: 45px;
}
.card-circle img, .faq-all  img{
    width: 26px !important;
    height: 26px !important;
}
           }
`;

const ServiceDetail = () => {
  const { id } = useParams();
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const { serviceDetails, generalObject, serviceObject, loading, error } = useSelector(
    (state) => state.content
  );

  
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


  const serviceOfferDescribe = [
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

   const whyChoseDescribe = [
    {
      id: 0,
      banner: "/images/image-1.jpeg",
      title: "People",
      sub_title:
        "These services support organizations in evaluating, managing, and minimizing environmental and social impacts in compliance with national and international standards.",
    },
    {
      id: 1,
      banner: "/images/image-2.jpg",
      title: "Technology",
      sub_title:
        "Focused on developing systems and assessments that promote workplace safety, regulatory compliance, and risk management.",
    },
    {
      id: 2,
      banner: "/images/image-3.jpg",
      title: "Process",
      sub_title:
        "These services utilize advanced mapping and spatial tools to support planning, resource management, and environmental monitoring.",
    },
  ]


   const faqs = [
    {
      id: 0,
      banner: "/images/image-1.jpeg",
      title: "What do you do?",
      sub_title:
        "These services support organizations in evaluating, managing, and minimizing environmental and social impacts in compliance with national and international standards.",
    },
    {
      id: 1,
      banner: "/images/image-2.jpg",
      title: "What are your services?",
      sub_title:
        "Focused on developing systems and assessments that promote workplace safety, regulatory compliance, and risk management.",
    },
    {
      id: 2,
      banner: "/images/image-3.jpg",
      title: "How can we meet you",
      sub_title:
        "These services utilize advanced mapping and spatial tools to support planning, resource management, and environmental monitoring.",
    },
  ]

  

  const details = serviceDetails?.data;
const websetting = generalObject?.data?.websetting;
 
  const [activeIndex, setActiveIndex] = useState(0); // first FAQ open by default

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // close if clicked again
  };
  console.log(faqs);
  console.log(services);

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
    <DetailRap>
      <div
        style={{
          backgroundColor: "#000000",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/image-1.jpeg)`,
        }}
        className="about-1 containers"
      >
        <h2>Environmental Assessment & Management</h2>
        <div className="about-sub">
          <div className="about-sub-left">
            <Link to="/home" className="home-link">
              Home
            </Link>
            <div className="about-sub-left-div"></div>
            <p>Environmental Assessment & Management</p>
          </div>
        </div>
      </div>
      <div className="all-details containers">
        <div className="detail-left">
          <img
            src="/images/image-1.jpeg"
            alt="service"
          />
          <div className="left-1">
            <h2>About the service</h2>
            {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
              dangerouslySetInnerHTML={{ __html: details?.overview }}
            /> */}
            <p>These services support organizations in evaluating, managing, and minimizing environmental and social impacts in compliance with national and 
                international standards.</p>
            <p>Focused on developing systems and assessments that promote workplace safety, 
                regulatory compliance, and risk management.</p>
            <p>These services utilize advanced mapping and spatial tools to support planning, resource management,
                 and environmental monitoring.</p>
          </div>
          <div className="left-2">
            <h2>Why Choose us</h2>
            <p>Spatial Ecosystems Limited has provided services to numerous  and prestigious clients in the oil & gas, construction,  
                manufacturing, telecoms, transport and financial industries </p>
            <div className="left-2-sub">
              {whyChoseDescribe?.map((items, index) => (
                <div key={index} className="left-2-card">
                  <div className="card-circle">
                    {/* <img
                      src={`https://backoffice.sylvastarresidences.com/${items?.icon}`}
                      alt="icon"
                    /> */}
                  </div>
                  <div className="left-2-card-text">
                    <h4>{items?.title}</h4>
                    <p>{items?.sub_title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="left-3">
            <h2>Services Offered</h2>
            {serviceOfferDescribe?.map((items, index) => (
              <div className="left-3-sub">
                <Icon
                  width="30px"
                  height="30px"
                  icon="fluent-mdl2:check-mark"
                  style={{ color: "black" }}
                />
                <p>
                  <span>{items.title}: </span>
                  {items.sub_title}
                </p>
              </div>
            ))}
          </div>
          <div className="left-4">
            <h2>{details?.faq_title}</h2>
           <div className="faq-section">
      {faqs?.map((items, index) => (
        <div
          key={index}
          className="faq-all"
          onClick={() => toggleFAQ(index)}
          style={{ cursor: "pointer" }}
        >
            <div className="faq-sub">
            {activeIndex===index ? <img src="/images/dark-icon.png" alt="faq" /> : 
            <img src="/images/color-icon.png" alt="faq" />}
          
          <div className="faq-text">
            <h4>{items?.title}</h4>
            {activeIndex === index && <p>{items?.sub_title}</p>}
          </div>
</div>
          <Icon
            width="30px"
            height="30px"
            icon={activeIndex===index ? "dashicons:arrow-up-alt2": "dashicons:arrow-down-alt2"}
            style={{ color: "white" }}
          />
        </div>
      ))}
    </div>
           
          </div>
        </div>
        <div className="detail-right">
            <div className="right-1">
                <h4>More Services</h4>
                {services?.map((items) => (
                    <div onClick={() => handleClick(items.id)}  className="right-card">
                        <h4>{items.title}</h4>
                         <Icon
                  width="30px"
                  height="30px"
                  icon="iconamoon:arrow-right-2-bold"
                  style={{ color: "black" }}
                />
                        </div>
                    
                ))}
            </div>
            <div 
                     style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/images/image-2.png)`,

              }}
            className="right-2">
                <img src="/images/let-icon.png" alt="call" />
                <p>Any Question? Let's talk.</p>
                <h4>090000000</h4>
                <Link className="right-2-button" to="/contact">Get a Call Back 

                    <div className="call-circle">
                        <Icon
                  width="20px"
                  height="20px"
                    icon="iconamoon:arrow-right-2-bold"
                    style={{ color: "black" }}
                />
                    </div>
                </Link>
            </div>
        </div>    
      </div>

    </DetailRap>
  );
};
export default ServiceDetail;
