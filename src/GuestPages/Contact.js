import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, resetSlider } from "../Redux/slice/messageSlice";
import { ClipLoader } from "react-spinners";

const ContactRap = styled.div`
@media (max-width: 778px) {
  padding-top: 60px;
 }
  .contact-container {
    background: #000000;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    padding-right: 80px;
  }

  .left-triangle {
    clip-path: polygon(0 4%, 0 78%, 98% 39%);
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100vh;
    background-color: green;
  }
  .right-triangle {
    clip-path: polygon(24% 38%, 0 100%, 100% 100%);
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    background-color: #8b4513;
  }
   .right-polygon {
clip-path: polygon(87% 0, 100% 0%, 14% 100%, 0% 100%);
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 50vh;
    background-color: #e77817;
  }

  .contact-form-div {
    display: flex;
    z-index: 1000;
    position: relative;
    margin-right: 100px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  }
  .contact-form-div img {
    width: 300px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .contact-form {
    background: #ffffff;
    width: 500px;
    padding: 30px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .contact-form h1 {
    color: #000000;
    font-size: 30px;
    font-weight: 600;
  }

  .contact-form label {
    color: #5a5959ff;
    font-size: 16px;
    font-weight: 500;
  }
  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background: #d7d0d0;
    border: none;
    border-radius: 5px;
  }
  button {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 12px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    background: green;
  }
  .contact-icon {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #000000;
    font-size: 18px;
    font-weight: 600;
    margin: 0px;
  }
  .contact-info p {
    color: #5a5959ff;
    font-size: 14px;
    font-weight: 500;
    margin: 0px;
    max-width: 180px;
margin-left: 30px;
  }
    .contact-info h4 {
    color: #000000;
    font-size: 18px;
    font-weight: 600;
    margin: 0px;
    }
  .contact-info  {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .contact-info-div {
    padding: 30px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
background: #ffffff;
position: absolute;
left: -160px;
top: 50px;
border-radius: 20px;
z-index: 9999;
  }
  .all-contact-form {
    position: relative;
  }

 .dropdown-contain {
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
  }

  .dropdown-div {
    background: #ffffff;
    width: fit-content;
    height: fit-content;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .cancel-btn {
    width: 150px;
    height: 50px;
    background: #160009;
    color: #ffffff;
    border: none;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .dropdown-div p {
    font-size: 20px;
    color: #34302f;
    font-weight: 500;
    max-width: 400px;
    text-align: center;
  }
  @media (max-width: 1200px)  {
 .contact-info-div {

  left: -100px;
 }
  .contact-form-div {
    margin-right: 60px;

  }
  }

  @media (max-width: 1050px) {
.contact-info-div {
  left: 10px;
}

  .contact-form-div {
    margin-right: 0px;
    margin-left: 70px;

  }
  }
    @media (max-width: 992px) {
  .contact-form {
    background: #ffffff;
    width: 400px;
  }
  .contact-form-div img {
    width: 250px;
  }
  }
     @media (max-width: 800px) {
 .contact-form-div img, .contact-info-div {
  display: none;
 }

    .contact-container {
  
    justify-content: center;
    }

  
  .contact-form {
   
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    
        border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  }
 @media (max-width: 450px) {
 .contact-form {
  width: 300px;
 }
 }
  @media (max-width: 350px) {
 .contact-form {
  width: 260px;
 }
 }
`;

const Contact = () => {
const dispatch = useDispatch()
   const { successContact, submitloading, error } = useSelector(
      (state) => state.message || []
    );
    console.log(successContact);
    console.log(error);
    

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });



  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(addMessage(form));
  };

  const handleRest = () => {
    setForm({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
dispatch(resetSlider())
  };
  return (
    <ContactRap>
      <div className="contact-container">
        <div className="left-triangle"></div>
        <div className="right-triangle"></div>
        <div className="right-polygon"></div>
        <div className="all-contact-form">
          <div className="contact-form-div">
            <img src="/images/contact-img.jpeg" alt="Contact Us" />
            <div className="contact-form">
              <h1>Contact Us</h1>
              <form onSubmit={handleSubmit}>
                <div className="input-div">
                  <label>
                    First Name
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    Last Name
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                    />
                  </label>
                   <label>
                    Phone Number
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="input-div">
                  <label>
                    Email Address
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="input-div">
                  <label>
                    Message
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </label>
                </div>
                
                  <button type="submit">
               {submitloading ? <ClipLoader size={18} color="#fff" /> : "Submit"} </button>
              </form>
            </div>
           
          </div>
          <div className="contact-info-div">
            <div className="contact-info">
              <div className="contact-icon">
                <Icon
                  icon="mingcute:location-line"
                  width="20"
                  height="20"
                  style={{ color: "#56BF2A" }}
                />
                Location
              </div>
              <p>No. 2, Green house Abiola farm, Ayobo Lagos.</p>
            </div>

            <div className="contact-info">
              <div className="contact-icon">
                <Icon
                  icon="ic:outline-email"
                  width="20"
                  height="20"
                  style={{ color: "#56BF2A" }}
                />
                Email
              </div>
                              <p>example@example.com</p>

            </div>
            <div className="contact-info">
              <div className="contact-icon">
                <Icon
                  icon="solar:phone-calling-linear"
                  width="20"
                  height="20"
                  style={{ color: "#56BF2A" }}
                />
                Call Us
              </div>
                              <p>09000000000</p>

            </div>
          </div>
        </div>
      </div>
      {successContact ? (
        <div className="dropdown-contain">
          <div className="dropdown-div">
            <p>Thank you for contacting us! We will get back to you soon.</p>
            <button onClick={handleRest} className="cancel-btn">
              Close
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </ContactRap>
  );
};

export default Contact;
