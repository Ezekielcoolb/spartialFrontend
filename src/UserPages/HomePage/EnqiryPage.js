import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchHomepage } from "../../Redux/slice/homeSlice";
import { resetUpload, uploadMedia } from "../../Redux/slice/uploadSlice";
import {
  resetWhoWeAre,
  updateEnquirySection,
  updateHomeCounter,
  updateWhoWeAre,
  updateWhyChoose,
} from "../../Redux/slice/userSlice";
import { ClipLoader } from "react-spinners";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const AboutRap = styled.div`
  padding: 20px;
  .slider-group {
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

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .remove-btn {
    background: transparent;
    border: none;
    position: absolute;
    top: 5px;
    right: -40px;
  }
  input,
  textarea {
    width: 600px;
    height: 40px;
    border-radius: 10px;
    padding: 0 10px;
    border: 1px solid #777373ff;
  }
  textarea {
    height: 120px;
    padding: 15px;
  }
  .btns button {
    width: 400px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
  }
  .btnses button {
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
    background: #e77817;
  }
  .btnses {
    display: flex;
    gap: 20px;
    margin: 20px 0px;
  }
  .btns {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  .btn-1 {
    background: #007bff;
  }
  .btn-2 {
    background: #28a745;
  }
  .slider-1 {
    display: flex;
    gap: 20px;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
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

    width: 600px;
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

  .upload-two-box {
    display: flex;
    flex-direction: column;
    margin: 15px 0;
  }

  .upload-two-label {
    width: 600px;
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

  .slider {
    padding: 20px 0px;
    border-bottom: 1px solid #777373ff;
  }
  .slider-upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 700px) {
    input,
    textarea,
    .upload-two-label,
    .upload-box {
      width: 500px;
    }
    .btns button {
      width: 500px;
    }
  }

  @media (max-width: 500px) {
    input,
    textarea,
    .upload-two-label,
    .upload-box,
    .btns button {
      width: 350px;
    }
  }

  @media (max-width: 410px) {
    input,
    textarea,
    .upload-two-label,
    .upload-box,
    .btns button {
      width: 300px;
    }
  }
  @media (max-width: 370px) {
    input,
    textarea,
    .upload-two-label,
    .upload-box,
    .btns button {
      width: 270px;
    }
  }
`;

const EnquirySectionHome = () => {
  const dispatch = useDispatch();
  const { homeObject, loading, error } = useSelector((state) => state.content);
  const { loading: uploading } = useSelector((state) => state.upload);
  const { enquiryLoading, enquiryData } = useSelector((state) => state.users);
  const [whyChooseData, setWhyChooseData] = useState({
    title: "",
    mainTitle: "",
    downText: "",
  });
  console.log(homeObject);

  const whyChoose = homeObject?.enquiries;

  useEffect(() => {
    if (whyChoose) {
      setWhyChooseData({
        title: whyChoose.title || "",
        mainTitle: whyChoose.mainTitle || "",
        downText: whyChoose.downText || "",
      });
    }
  }, [whyChoose]);

  useEffect(() => {
    dispatch(fetchHomepage()); // Call API on component mount
  }, [dispatch]);

  const handleSubmitWhyChoose = (e) => {
    e.preventDefault();
    dispatch(updateEnquirySection(whyChooseData));
  };

  return (
    <AboutRap>
      <div className="slider">
        <div className="slider-upper">
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
            <h2>Home Enquiry Section</h2>
          </div>
        </div>
        <form>
          <div className="slider-group">
            <label>
              Title
              <input
                type="text"
                placeholder=" Title"
                value={whyChooseData.title}
                onChange={(e) =>
                  setWhyChooseData({ ...whyChooseData, title: e.target.value })
                }
              />
            </label>
            <label>
              {" "}
              Main Title
              <input
                type="text"
                placeholder="Main Title"
                value={whyChooseData.mainTitle}
                onChange={(e) =>
                  setWhyChooseData({
                    ...whyChooseData,
                    mainTitle: e.target.value,
                  })
                }
              />
            </label>
            <label>
              {" "}
              Down Text
              <input
                type="text"
                placeholder=" Down Text "
                value={whyChooseData.downText}
                onChange={(e) =>
                  setWhyChooseData({
                    ...whyChooseData,
                    downText: e.target.value,
                  })
                }
              />
            </label>

            <div className="btns">
              <button className="btn-2" onClick={handleSubmitWhyChoose}>
                {enquiryLoading ? (
                  <ClipLoader color="white" size={35} />
                ) : (
                  "Update Enquiry Section"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      {enquiryData ? (
        <div className="dropdown-container">
          <div className="successPop">
            <p>Home Enquiry Section Updated Successfully. Thanks</p>
            <button onClick={() => dispatch(resetWhoWeAre())}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </AboutRap>
  );
};

export default EnquirySectionHome;
