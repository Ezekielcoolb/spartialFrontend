import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchHomepage } from "../../Redux/slice/homeSlice";
import { resetUpload, uploadMedia } from "../../Redux/slice/uploadSlice";
import {
  resetWhoWeAre,
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
`;

const WhyChooseSectionHome = () => {
  const dispatch = useDispatch();
  const { homeObject, loading, error } = useSelector((state) => state.content);
  const { loading: uploading } = useSelector((state) => state.upload);
  const { chooseUsLoading, chooseUsData } = useSelector((state) => state.users);
const [whyChooseData, setWhyChooseData] = useState({
    heading: "",
     titleOne: "",
    subtitleOne: "",
    titleTwo: "",
    subtitleTwo: "",
    titleThree: "",
    subtitleThree: "",
  });
  console.log(homeObject);

  const whyChoose = homeObject?.whyChooseUsNew;

  useEffect(() => {
    if (whyChoose) {
      setWhyChooseData({
        heading: whyChoose.heading || "",
        titleOne: whyChoose.titleOne || "",
        subtitleOne: whyChoose.subtitleOne || "",
        titleTwo: whyChoose.titleTwo || "",
        subtitleTwo: whyChoose.subtitleTwo || "",
        titleThree: whyChoose.titleThree || "",
        subtitleThree: whyChoose.subtitleThree || "",
      });
    }
  }, [whyChoose]);

  useEffect(() => {
    dispatch(fetchHomepage()); // Call API on component mount
  }, [dispatch]);

   const handleSubmitWhyChoose = (e) => {
      e.preventDefault();
      dispatch(updateWhyChoose(whyChooseData));
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
            <h2>Home Why Choose Us Section</h2>
          </div>
        </div>
              <form>
      <div className="slider-group">
         <h3> Why Coose Us Heading</h3>
        
        <input
          type="text"
          placeholder=" Heading"
          value={whyChooseData.heading}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, heading: e.target.value })
          }
        />
       


        <h3>First Why Coose Us</h3>
        <label>Title
        <input
          type="text"
          placeholder=" Title"
          value={whyChooseData.titleOne}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, titleOne: e.target.value })
          }
        />
        </label>
        <label> Content
        <textarea
          type="text"
          placeholder="Content"
          value={whyChooseData.subtitleOne}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, subtitleOne: e.target.value })
          }
        />
        </label>
        <h3>Second Why Coose Us</h3>
            <label>Title
        <input
          type="text"
          placeholder=" Title "
          value={whyChooseData.titleTwo}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, titleTwo: e.target.value })
          }
        />
        </label>
        <label> Content
        <textarea
          type="text"
          placeholder="Content"
          value={whyChooseData.subtitleTwo}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, subtitleTwo: e.target.value })
          }
        />
        </label>
        <h3>Third Why Coose Us</h3>
        <label> Title
        <input
          type="text"
          placeholder=" Title"
          value={whyChooseData.titleThree}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, titleThree: e.target.value })
          }
        />
        </label>
        <label>Content
        <textarea
          type="text"
          placeholder="Content"
          value={whyChooseData.subtitleThree}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, subtitleThree: e.target.value })
          }
        />
     
       </label>

      
         <div className="btns">
        <button className="btn-2" onClick={handleSubmitWhyChoose}>{chooseUsLoading ? (
                                  <ClipLoader color="white" size={35} />
                                ) : (
                                  "Update Why Choose Us"
                                )}</button>
        </div>
      </div>
</form>
      </div>
      {chooseUsData ? (
        <div className="dropdown-container">
          <div className="successPop">
            <p>Home Why Choose Us Section Updated Successfully. Thanks</p>
            <button onClick={() => dispatch(resetWhoWeAre())}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </AboutRap>
  );
};

export default WhyChooseSectionHome;
