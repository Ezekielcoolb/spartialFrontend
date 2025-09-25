import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchHomepage, fetchObjectpage } from "../../Redux/slice/homeSlice";
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
import { updateMissionVisionAbout } from "../../Redux/slice/aboutUserSlice";

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

const MissionVisionSection = () => {
  const dispatch = useDispatch();
  const { aboutObject, loading, error } = useSelector((state) => state.content);
  const { loading: uploading } = useSelector((state) => state.upload);
  const { chooseUsLoading, chooseUsData } = useSelector((state) => state.userAbout);
const [whyChooseData, setWhyChooseData] = useState({
    title: "",
     subtitle: "",
    mission: "",
    missionContent: "",
    vision: "",
    visionContent: "",
    coreValue: "",
     coreValueContent: "",
  });
  console.log(aboutObject);

  const whyChoose = aboutObject?.missionVission;

  useEffect(() => {
    if (whyChoose) {
      setWhyChooseData({
        title: whyChoose.title || "",
        subtitle: whyChoose.subtitle || "",
        mission: whyChoose.mission || "",
        missionContent: whyChoose.missionContent || "",
        vision: whyChoose.vision || "",
        visionContent: whyChoose.visionContent || "",
        coreValue: whyChoose.coreValue || "",
        coreValueContent: whyChoose.coreValueContent || "",
      });
    }
  }, [whyChoose]);

  useEffect(() => {
    dispatch(fetchObjectpage()); // Call API on component mount
  }, [dispatch]);

   const handleSubmitWhyChoose = (e) => {
      e.preventDefault();
      dispatch(updateMissionVisionAbout(whyChooseData));
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
            <Link to="/users/aboutus">
              <Icon
                className="icon"
                width="20px"
                height="20px"
                icon="formkit:arrowleft"
                color="black"
              />
            </Link>
            <h2>About Mission and Vision Section</h2>
          </div>
        </div>
              <form>
      <div className="slider-group">
         <h3> Header Title</h3>
        
        <input
          type="text"
          placeholder=" title"
          value={whyChooseData.title}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, title: e.target.value })
          }
        />
        <label>Header Subtitle
        <input
          type="text"
          placeholder=" Subtitle"
          value={whyChooseData.subtitle}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, subtitle: e.target.value })
          }
        />
        </label>
        <label> Mission
        <input
          type="text"
          placeholder="Mission"
          value={whyChooseData.mission}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, mission: e.target.value })
          }
        />
        </label>
       
            <label>Mission Content
        <textarea
          type="text"
          placeholder=" Mission Content "
          value={whyChooseData.missionContent}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, missionContent: e.target.value })
          }
        />
        </label>
        <label> Vision
        <input
          type="text"
          placeholder="Vision"
          value={whyChooseData.vision}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, vision: e.target.value })
          }
        />
        </label>
       
        <label> Vision Content
        <textarea
          type="text"
          placeholder=" Vision Content"
          value={whyChooseData.visionContent}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, visionContent: e.target.value })
          }
        />
        </label>
        <label>Core Values
        <input
          type="text"
          placeholder="Core Values"
          value={whyChooseData.coreValue}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, coreValue: e.target.value })
          }
        />
        
     
       </label>

        <label>Core Values Content
        <textarea
          type="text"
          placeholder="Core Values Content"
          value={whyChooseData.coreValueContent}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, coreValueContent: e.target.value })
          }
        />
        
     
       </label>
         <div className="btns">
        <button className="btn-2" onClick={handleSubmitWhyChoose}>{chooseUsLoading ? (
                                  <ClipLoader color="white" size={35} />
                                ) : (
                                  "Update Counter"
                                )}</button>
        </div>
      </div>
</form>
      </div>
      {chooseUsData ? (
        <div className="dropdown-container">
          <div className="successPop">
            <p>Mission and Vision Section Updated Successfully. Thanks</p>
            <button onClick={() => dispatch(resetWhoWeAre())}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </AboutRap>
  );
};

export default MissionVisionSection;
