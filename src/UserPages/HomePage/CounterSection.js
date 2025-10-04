import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchHomepage } from "../../Redux/slice/homeSlice";
import { resetUpload, uploadMedia } from "../../Redux/slice/uploadSlice";
import {
  resetWhoWeAre,
  updateHomeCounter,
  updateWhoWeAre,
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

const CounterSectionHome = () => {
  const dispatch = useDispatch();
  const { homeObject, loading, error } = useSelector((state) => state.content);
  const { loading: uploading } = useSelector((state) => state.upload);
  const { counterLoading, counterData } = useSelector((state) => state.users);
  const [homeCounterData, setHomeCounterData] = useState({
    title: "",
    projectDone: "",
    yearsOfExperience: "",
    awardWinning: "",
    satisfiedCustomers: "",
    subtitle: "",
  });
  console.log(counterData);

  const counters = homeObject?.counter;

  useEffect(() => {
    if (counters) {
      setHomeCounterData({
        title: counters.title || "",
        subtitle: counters.subtitle || "",
        yearsOfExperience: counters.yearsOfExperience || "",
        awardWinning: counters.awardWinning || "",
        projectDone: counters.projectDone || "",
        satisfiedCustomers: counters.satisfiedCustomers || "",
      });
    }
  }, [counters]);

  useEffect(() => {
    dispatch(fetchHomepage()); // Call API on component mount
  }, [dispatch]);

  const handleSubmitCounter = (e) => {
    e.preventDefault();
    dispatch(updateHomeCounter(homeCounterData));
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
            <h2>Home Counter Section</h2>
          </div>
        </div>
        <form>
          <div className="slider-group">
            <label>
              Counter Heading Title
              <input
                type="text"
                placeholder=" Title"
                value={homeCounterData.title}
                onChange={(e) =>
                  setHomeCounterData({
                    ...homeCounterData,
                    title: e.target.value,
                  })
                }
              />
            </label>
            <label>
              {" "}
              Counter Heading subtitle
              <textarea
                type="text"
                placeholder=" Subtitle"
                value={homeCounterData.subtitle}
                onChange={(e) =>
                  setHomeCounterData({
                    ...homeCounterData,
                    subtitle: e.target.value,
                  })
                }
              />
            </label>
            <h3
              style={{
                marginTop: "30px",
                marginBottom: "10px",
              }}
            >
              Counters
            </h3>
            <label>
              Project Done Count
              <input
                type="number"
                placeholder=" Project Done Count"
                value={homeCounterData.projectDone}
                onChange={(e) =>
                  setHomeCounterData({
                    ...homeCounterData,
                    projectDone: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Years of Experience
              <input
                type="number"
                placeholder="Years of Experience"
                value={homeCounterData.yearsOfExperience}
                onChange={(e) =>
                  setHomeCounterData({
                    ...homeCounterData,
                    yearsOfExperience: e.target.value,
                  })
                }
              />
            </label>
            <label>
              {" "}
              No. of Training Conducted
              <input
                type="number"
                placeholder="Number of training conducted"
                value={homeCounterData.awardWinning}
                onChange={(e) =>
                  setHomeCounterData({
                    ...homeCounterData,
                    awardWinning: e.target.value,
                  })
                }
              />
            </label>
            <label>
              {" "}
              No of Customer Satisfied
              <input
                type="number"
                placeholder="Number of Customers Satisfied"
                value={homeCounterData.satisfiedCustomers}
                onChange={(e) =>
                  setHomeCounterData({
                    ...homeCounterData,
                    satisfiedCustomers: e.target.value,
                  })
                }
              />
            </label>

            <div className="btns">
              <button className="btn-2" onClick={handleSubmitCounter}>
                {" "}
                {counterLoading ? (
                  <ClipLoader color="white" size={35} />
                ) : (
                  "Update Counter"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      {counterData ? (
        <div className="dropdown-container">
          <div className="successPop">
            <p>Home Counter Section Updated Successfully. Thanks</p>
            <button onClick={() => dispatch(resetWhoWeAre())}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </AboutRap>
  );
};

export default CounterSectionHome;
