import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BlogDetailRap = styled.div`
  background: #000000;
@media (max-width: 778px) {
  padding-top: 60px;
 }
  .detail-1 h2 {
    color: #ffffff;
    font-size: 45px;
    font-weight: 600;
    line-height: 54px;
    max-width: 802px;
  }
  .detail-1 p {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #e77817;
    font-size: 16px;
    font-weight: 500;
  }
  .detail-1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: 1px solid #ffffff1a;
  }
  .detail-2-left p {
    color: #ffffffb2;
    font-size: 16px;
    font-weight: 400;
    max-width: 680px;
    line-height: 24px;
  }
  .detail-2-left h4 {
    color: #ffffff;
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    max-width: 492px;
  }
  .detail-2-left {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .detail-2-left img {
    height: 400px;
    border-radius: 12px;
  }
  .sub-detail-1 h6 {
    color: #ffffffb2;
    font-size: 14px;
    font-weight: 400;
  }
  .sub-detail-1 p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
  }
  .sub-detail-1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .share-icon {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .sub-detail-2 h4 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    max-width: 198px;
    line-height: 22px;
  }
  .sub-detail-2 p {
    color: #ffffffb2;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    max-width: 217px;
  }
  .subscribe-btn {
    background: #ffffff;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 116px;
    height: 33px;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
  }
  .sub-detail-2 {
    background: #4254660D;
    border-radius: 8px;
    width: 278px;
    padding: 20px;
  }
  .detail-2-right {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .detail-2 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .detail-3 h3 {
    color: #ffffff;
    font-size:30px;
    font-weight: 700;
    margin-bottom: 20px;
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
    max-width: 411px;
  }
  .inner-sub-blog-2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .blog-2-sub {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
   .blog-2-sub img {
    width: 300px;
    height: 250px;
    border-radius: 12px;
   }
  .smaller-inner h4 {
    font-size: 20px !important;
    font-weight: 600 !important;
  }
  .detail-3-sub {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .detail-3 {
    padding-top: 60px;
    padding-bottom: 100px;
    margin-top: 100px;
    border-top: 1px solid #ffffff1A;
  }


  .detail-3-right-header {
    width: 100%;
    background: green;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }
  .detail-3-right-header img {
    /* width: 46px;
    height: 46px;
    border-radius: 100px; */
  }
  .detail-3-right-head h4 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
  }
  .detail-3-right-head p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }
  .detail-3-right-head {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  input,
  textarea {
    width: 300px;
    height: 50px;
    border-radius: 100px;
    padding-left: 15px;
    border: 1px solid #00001c1a;
    background: #ffffff;
  }
  textarea {
    border-radius: 12px;
    height: 120px;
  }
  button {
    background: #cc9430;

    border: none;
    width: 166px;
    height: 48px;
    border-radius: 100px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  }
  .detail-3-right-body h4 {
    font-size: 18px;
    font-weight: 600;
    color: #00001c;
  }
  .detail-3-right-body {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px;
  }
  .detail-3-right {
    background: #f7f7f7;
    border: 12px;
    height: fit-content;
  }
  .detail-3 {
    display: flex;
    gap: 20px;
    margin-top: 70px;
    padding-bottom: 100px;
    border-bottom: 1px solid #00001c1a;
    justify-content: space-between;
  }
  @media (max-width: 1130px) {
    .detail-3-sub {
        flex-wrap: wrap;
    }
  }
  @media (max-width: 992px) {
    .detail-2 {
        flex-direction: column;
    }
     .blog-2-sub img {
        width: 100%;
    }
  }

  @media (max-width: 768px) {
    
  }
  @media (max-width: 650px) {
   
  }
  @media (max-width: 550px) {
    
  }
  @media (max-width: 450px) {
   
  }
  @media (max-width: 360px)  {
   
  }
  @media (max-width: 350px) {
    
  }
`;

const ProjectDetail = () => {

      const videosec = {
    video: "/images/video-1.mp4",
    image: "/images/image-1.jpeg",
  };
    const [formData, setFormData] = useState({
        property_id: "",
        full_name: '',
        email: '',
        phone: '',
        message: '',
      });
    const [isPlaying, setIsPlaying] = useState(false);


       const handleChange = (e) => {
          setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
          }));
        };
      
         const handleSubmit = (e) => {
          e.preventDefault();
        };
  return (
    <BlogDetailRap>
      <div className="detail-1 containers">
        <Link to="/blog" style={{ textDecoration: "none" }}>
      
          <p>   <Icon
                width="24px"
                height="24px"
                icon="iconamoon:arrow-left-2"
                style={{ color: "#e77817" }}
              />Explore Projects</p>
        </Link>
        <h2>Introducing triggers: Build Wealth doing the things you love</h2>
      </div>
      <div className="detail-2 containers">
        <div className="detail-2-left">
          <img src="/images/image-1.jpeg" alt="" />
          <p>
            IAM for CX is the Docusign Intelligent Agreement Management (IAM)
            application for organizations looking to meet modern customer
            expectations in today’s highly competitive business landscape.
          </p>
          <p>
            We designed this application to streamline the customer journey by
            eliminating many of the redundant interactions and manual processes
            commonly found in customer agreement workflows. 
          </p>
          <h4>A clunky customer experience threatens your bottom line</h4>
          <p>
            We’ve all been there as customers: Painstakingly inputting all of
            our personal data, often redundantly, from one form to the next —
            all in a desperate bid to get the product or service we need. Not
            only is this frustrating for customers, it’s also frustrating for
            you as a business, as there are often manual, redundant processes
            rife with errors
          </p>
          <p>
            Expecting your customers to just put up with this poor experience is
            a surefire way to frustrate and ultimately lose them down the line,
            especially if the competition has a more streamlined, user-friendly
            agreement process.
          </p>
         
              <div className="video-home-container ">
        <div className="video-home-con-header">
 <h4 style={{
  marginBottom: "20px"
 }}>Benefits</h4> 
        </div>
        <div
          className="video-wrapper"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "100%",
            height: "400px",
            borderRadius: "12px",
          }}
        >
          {/* Cover Image with Play Button */}
          {!isPlaying && (
            <div
              className="video-cover"
              style={{
                position: "relative",
                cursor: "pointer",
                height: "400px",
                 borderRadius: "12px",
                backgroundImage: `url(${videosec.image})`,
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
                  background: "green",
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

          {/* Video Player */}
          {isPlaying &&
            (videosec.video.includes("youtube") ||
            videosec.video.includes("youtu.be") ? (
              <iframe
                width="100%"
                height="100%"
                src={`${
                  videosec.video.includes("?")
                    ? `${videosec.video}&playsinline=1&autoplay=1`
                    : `${videosec.video}?playsinline=1&autoplay=1`
                }`}
                title="Video"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              // For mp4 or other video formats
              <video
                width="100%"
                height="100%"
                controls
                playsInline // ✅ iPhone inline support
                autoPlay // ✅ autoplay when modal opens
              >
                <source src={videosec.video} />
                Your browser does not support this video format.
              </video>
            ))}
        </div>
      </div>
        </div>
        <div className="detail-2-right">
          <div className="detail-3-right">
          <div className="detail-3-right-header">
            <div className="detail-3-right-head">
              <h4>Admin</h4>
              <p>example.com</p>
            </div>
          </div>
          <div className="detail-3-right-body">
            <h4>Send a Message</h4>
            <input name="full_name"  value={formData.full_name} onChange={handleChange} type="text" placeholder="Your name*" />
            <input name="email"  value={formData.email} onChange={handleChange} type="email" placeholder="Your email address*" />
            <input name="phone"  value={formData.phone} onChange={handleChange} type="text" placeholder="Your phone" />
            <textarea name="message"  value={formData.message} onChange={handleChange} placeholder="Message*" />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        </div>
      </div>
      <div className="containers">

      <div className="detail-3 ">
        <div className="detail-3-sub">
            <div className="blog-2-sub">
            <img src="/images/image-1.jpeg" alt="" />
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
            <img src="/images/image-2.jpg" alt="" />
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
            <img src="/images/image-3.jpg" alt="" />
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
      </div>
    </BlogDetailRap>
  );
};

export default ProjectDetail;