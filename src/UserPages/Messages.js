import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";

import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { deleteMessage, fetchMessages } from "../Redux/slice/messageSlice";

const SliderRap = styled.div`
  padding: 30px;
  .slider-group-new {
    border: 1px solid #777373ff;
    padding: 20px;
    border-radius: 12px;
    background: #ffffff;
    width: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
.pop-message h6 {
    font-size: 14px;
    font-weight: 300;
    color: #000000;
}
.pop-message h5 {
    color: #3b3a3aff;
    font-size: 14px;
    font-weight: 500px;
    
}
.pop-message {
display: flex;
flex-direction: column;
gap: 5px;
margin-top: 15px;
}

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .slider-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .slider {
    padding: 20px 0px;
  }
  .slider-upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .btn-1,
  .btn-2 {
    width: 40px;
    height: 40px;
    border: none;
    background: #20195bff;
  }
  .btn-2 {
    background: #b14023ff;
  }
    .btn-4
   {
    height: 40px;
    border: none;
    background: #20195bff;
    color: #ffffff;
  }
  .btn-5 {
    background: #b14023ff;
    color: #ffffff;
  }
  .upper-slide button {
    background: #8b4513;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    padding: 12px 20px;
    cursor: pointer;
    width: fit-content;
    height: 48px;
    animation: fadeInUp 1s ease-out;
    animation-delay: 0.9s;

    position: relative; /* for ::before */
    overflow: hidden; /* keep overlay inside */
    z-index: 0;
  }

  .upper-slide button::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    height: 0;
    background: linear-gradient(180deg, #8b4513 0%, #025726 50%, #1c1c1c 100%);
    z-index: -1;
    transition: height 0.5s ease;
  }

  .upper-slide button:hover::before {
    height: 100%;
  }
  .upper-slide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  input,
  textarea {
    width: 400px;
    height: 40px;
    border-radius: 10px;
    padding: 0 10px;
    border: 1px solid #777373ff;
  }
  textarea {
    height: 120px;
    padding: 15px;
  }
  .upload-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .upload-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 400px;
    height: 150px;
    border: 2px dashed #aaa;
    border-radius: 10px;
    cursor: pointer;
    background: #f9f9f9;

    transition: border 0.3s ease, background 0.3s ease;
  }

  .upload-box:hover {
    border-color: #4a90e2;
    background: #f1f8ff;
  }

  .upload-content {
    text-align: center;
    color: #666;
    font-size: 14px;
  }

  .upload-icon {
    font-size: 30px;
    margin-bottom: 8px;
    display: block;
  }

  .preview-image {
    width: 200px;
    height: 200px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  .video-preview {
    width: 300px;
    height: 200px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  .upload-two-box {
    display: flex;
    flex-direction: column;
    margin: 15px 0;
  }

  .upload-two-label {
    width: 400px;
    height: 150px;
    border: 2px dashed #aaa;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: border-color 0.3s;
  }

  .upload-two-label:hover {
    border-color: #007bff;
  }

  .upload-two-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666;
    font-size: 14px;
  }

  .upload-two-content i {
    font-size: 32px;
    margin-bottom: 8px;
    color: #555;
  }
  input[type="file"] {
    display: none;
  }
  .documents {
    border-top: 1px solid #ccc;
    padding-top: 30px;
  }
  @media (max-width: 500px) {
    input,
    textarea,
    .upload-two-label,
    .upload-box {
      width: 300px;
    }
    .be-done {
      display: none;
    }
    padding: 30px 0px;
    .slider-group-two {
      margin-left: 20px;
    }
    .upper-slide {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 20px;
    }
    .btns-new {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media (max-width: 370px) {
    input,
    textarea,
    .upload-two-label,
    .upload-box {
      width: 280px;
    }
  }
`;

const UserMessages = () => {
  const dispatch = useDispatch();
  const { homeObject, loading, error } = useSelector((state) => state.content);
  const {
    items,
    sliderDelete,
  } = useSelector((state) => state.message);

const [selectedId, setSelectedId] = useState(null);
  
  
console.log(items);

  useEffect(() => {
    dispatch(fetchMessages()); // Call API on component mount
  }, [dispatch]);

   const handleClick = (id) => {
    setSelectedId(id);
  };
 

 const selectedSlide = selectedId
    ? items?.find((item) => item._id === selectedId)
    : null;

  const handleClose = () => {
    
   
  };


 

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
        dispatch(deleteMessage(id))
    }
  };

  return (
    <SliderRap>
      <div className="all-dash">
        <div className="upper-slide">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Link to="/users/dashboard">
              <Icon
                className="icon"
                width="20px"
                height="20px"
                icon="formkit:arrowleft"
                color="black"
              />
            </Link>
            <h2>Users Messages</h2>
          </div>
        </div>
       
       
        <div className="table-scroll">
          <table className="custom-table">
            <thead>
              <tr style={{ background: "#f4f4f4" }}>
                <th style={{ textAlign: "left" }}>S/N</th>
                <th style={{ textAlign: "left" }}>Name </th>
                <th className="be-done " style={{ textAlign: "left" }}>
                  Email
                </th>
                 <th className="be-done " style={{ textAlign: "left" }}>
                  Phone Number
                </th>
                <th style={{ textAlign: "left" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((items, index) => (
                <tr className="tr-hover">
                  <td>{index + 1}</td>
                  <td>{items.firstName} {items.lastName}</td>
                  <td className="be-done">{items.email}</td>
                  <td className="be-done">{items.phoneNumber}</td>
                  <td>
                    <div className="btns">
                      <button
                        onClick={() => handleClick(items._id)}
                        className="btn-1"
                      >
                        <Icon
                          className="icon"
                          width="30px"
                          height="30px"
                          icon="ooui:view-compact"
                          color="white"
                        />
                      </button>
                      <button
                        onClick={() => handleDelete(items._id)}
                        className="btn-2"
                      >
                        <Icon
                          className="icon"
                          width="30px"
                          height="30px"
                          icon="ic:baseline-delete"
                          color="white"
                        />
                      </button>
                    </div>
                  </td>
                  {/* <td>
                    <button onClick={() => handleClick(items.id)}>
                      Manage
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


 {selectedSlide ? (
        <div className="dropdown-container">
          <div className="successPop">
            <div className="successPop-div">
              <div className="slider">
                <div className="slider-upper">
                  <h2>User Message</h2>
                </div>
                <>
                <div className="pop-message">
                  <h6>Name:</h6>
                  <h5>{selectedSlide?.firstName} {selectedSlide?.firstName}</h5>
                </div>
                <div className="pop-message"> 
                  <h6>Email:</h6>
                  <h5>{selectedSlide?.email} </h5>
                </div>
                <div className="pop-message">
                  <h6>Phone Number:</h6>
                  <h5>{selectedSlide?.phoneNumber} </h5>
                </div>
                <div className="pop-message">
                  <h6>Message:</h6>
                  <h5>{selectedSlide?.message} </h5>
                </div>
                <div className="btns">
                    <button className="btn-4" onClick={() => window.location.href = `mailto:${selectedSlide?.email}`}>
        Email
      </button>
<button className="btn-4" onClick={() => window.location.href = `tel:${selectedSlide?.phoneNumber}`}>
        Call
      </button>                    <button onClick={() => setSelectedId(null)} className="btn-5">Close</button>
                </div>
                </>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
     

     
    

      {sliderDelete ? (
        <div className="dropdown-containerTwo">
          <div className="successPop">
            <p>Document Deleted Successfully. Thanks</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
     
    </SliderRap>
  );
};

export default UserMessages;
