import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";

import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

import {
  fetchGeneralpage,
  fetchProjectpage,
  fetchServicepage,
} from "../Redux/slice/homeSlice";
import {
  addToProjectList,
  deleteSpecificProject,
  resetSlider,
  updateHomeProjectHeadings,
  updateSpecificProject,
} from "../Redux/slice/projectSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { resetUpload, uploadMedia } from "../Redux/slice/uploadSlice";
import {
  addToServiceList,
  deleteSpecificService,
  postWebGeneralSetting,
  updateHomeServiceHeadings,
  updateSpecificService,
} from "../Redux/slice/serviceSlice";

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
    border-bottom: 1px solid #777373ff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
  .upload-box-two {
    height: 70px !important;
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
  .add-section-drop {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-end;
  }
  .add-section-drop button {
    background: red;
    border: none;
    color: white;
    width: 80px;
    height: 30px;
    border-radius: 5px;
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

const WebSetting = () => {
  const dispatch = useDispatch();
  const { loading: uploading } = useSelector((state) => state.upload);
  const { generalObject, loading, error } = useSelector(
    (state) => state.content
  );
  const { generalloading, generalPost } = useSelector((state) => state.service);
  const [selectedId, setSelectedId] = useState(null);

  const [newSliderOpen, setNewSliderOpen] = useState(false);

  const handleOpen = () => {
    setNewSliderOpen(!newSliderOpen);
  };
  const sliding = generalObject?.webSetting || [];

  //   console.log(generalObject);

  useEffect(() => {
    dispatch(fetchGeneralpage()); // Call API on component mount
  }, [dispatch]);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const [formData, setFormData] = useState({
    siteName: "",
    sitePhone: "",
    siteEmail: "",
    siteAddress: "",
    navScroll: [],
    socialLinks: [],

    siteDescription: "",

    banner: "",
  });
  console.log(formData);

  // whenever selectedSlide changes, update formData
  useEffect(() => {
    if (generalObject) {
      setFormData({
        siteName: generalObject.siteName || "",
        sitePhone: generalObject.sitePhone || "",
        siteEmail: generalObject.siteEmail || "",
        siteAddress: generalObject.siteAddress || "",
        navScroll: generalObject.navScroll || [],
        socialLinks: generalObject.socialLinks || [],
        siteDescription: generalObject.siteDescription || "",

        banner: generalObject.banner || "",
      });
    }
  }, [generalObject]);

  const handleClose = () => {
    dispatch(resetSlider());
  };

  // ✅ Handle list add
  const handleListSubmitTesti = (e) => {
    e.preventDefault();
    dispatch(postWebGeneralSetting({ ...formData }));
  };

  const handleUploadTwo = async (type, file) => {
    dispatch(uploadMedia({ folderName: "home", file }))
      .unwrap()
      .then((res) => {
        // update only the banner field
        setFormData((prev) => ({
          ...prev,
          logoUrl: res.data, // backend returns image URL/path
        }));

        dispatch(resetUpload());
      })
      .catch((err) => console.error("Upload failed:", err));
  };

  const handleNavScrollIconUpload = (idx, file) => {
    dispatch(uploadMedia({ folderName: "navscroll-icons", file }))
      .unwrap()
      .then((res) => {
        const arr = [...formData.navScroll];
        arr[idx].icon = res.data; // backend returns image URL/path
        setFormData({ ...formData, navScroll: arr });
        dispatch(resetUpload());
      })
      .catch((err) => console.error("Upload failed:", err));
  };

  const handleUpload = async (type, file) => {
    dispatch(uploadMedia({ folderName: "home", file }))
      .unwrap()
      .then((res) => {
        // update only the banner field
        setFormData((prev) => ({
          ...prev,
          banner: res.data, // backend returns image URL/path
        }));

        dispatch(resetUpload());
      })
      .catch((err) => console.error("Upload failed:", err));
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
            <h2>Web Setting Page </h2>
          </div>
        </div>
        <div className="slider">
          <form>
            <div className="slider-group">
              <label>
                {" "}
                Site Name
                <input
                  type="text"
                  placeholder="Site Name"
                  value={formData.siteName}
                  onChange={(e) =>
                    setFormData({ ...formData, siteName: e.target.value })
                  }
                />
              </label>
              <label>
                {" "}
                Site Email
                <input
                  type="email"
                  placeholder="Site Email"
                  value={formData.siteEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, siteEmail: e.target.value })
                  }
                />
              </label>
              <label>
                {" "}
                Site Phone Number
                <input
                  type="text"
                  placeholder="Site Numner"
                  value={formData.sitePhone}
                  onChange={(e) =>
                    setFormData({ ...formData, sitePhone: e.target.value })
                  }
                />
              </label>
              <label>
                {" "}
                Site Address
                <input
                  type="text"
                  placeholder="Site Address"
                  value={formData.siteAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, siteAddress: e.target.value })
                  }
                />
              </label>
              <label>
                {" "}
                Site Description
                <textarea
                  type="text"
                  placeholder="Enter short overview"
                  value={formData.siteDescription}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      siteDescription: e.target.value,
                    })
                  }
                />
              </label>

              <div>
                <h4> Nav Scrolls </h4> {/* Nav Scroll Array */}
                {formData.navScroll.map((feat, idx) => (
                  <div className="add-section-drop" key={idx}>
                    <input
                      type="text"
                      placeholder="NavTitle"
                      value={feat.title}
                      onChange={(e) => {
                        const arr = [...formData.navScroll];
                        arr[idx].title = e.target.value;
                        setFormData({ ...formData, navScroll: arr });
                      }}
                    />
                    <label className="upload-box upload-box-two">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleNavScrollIconUpload(idx, e.target.files[0])
                        }
                      />
                      <div className="upload-content">
                        <span className="upload-icon">📤</span>
                        <p>Upload Icon Image</p>
                      </div>
                    </label>
                    {feat.icon && (
                      <img
                        src={`https://spatial-backend.onrender.com${feat.icon}`}
                        alt="icon"
                        style={{ width: 32, height: 32 }}
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        const arr = [...formData.navScroll];
                        arr.splice(idx, 1);
                        setFormData({ ...formData, navScroll: arr });
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  style={{
                    width: " 120px",
                    height: "40px",
                    borderRadius: "10px",
                    border: "1px solid #777373ff",
                    background: "#20195bff",
                    color: "white",
                    fontWeight: "600",
                  }}
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      navScroll: [
                        ...(formData.navScroll || []),
                        { title: "", icon: "" },
                      ],
                    })
                  }
                >
                  Add Nav Item
                </button>
              </div>

              {/* Why Choose  Array */}
              <div>
                <h4>Social Links</h4>
                {formData.socialLinks.map((feat, idx) => (
                  <div
                    className="add-section-drop"
                    key={idx}
                    style={{ marginBottom: 8 }}
                  >
                    <input
                      type="text"
                      placeholder="Link Title"
                      value={feat.title}
                      onChange={(e) => {
                        const arr = [...formData.socialLinks];
                        arr[idx].title = e.target.value;
                        setFormData({
                          ...formData,
                          socialLinks: arr,
                        });
                      }}
                      style={{ marginRight: 8 }}
                    />
                    <input
                      type="text"
                      placeholder="Social Link"
                      value={feat.link}
                      onChange={(e) => {
                        const arr = [...formData.socialLinks];
                        arr[idx].link = e.target.value;
                        setFormData({
                          ...formData,
                          socialLinks: arr,
                        });
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const arr = [...formData.socialLinks];
                        arr.splice(idx, 1);
                        setFormData({
                          ...formData,
                          socialLinks: arr,
                        });
                      }}
                      style={{ marginLeft: 8 }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  style={{
                    width: " 120px",
                    height: "40px",
                    borderRadius: "10px",
                    border: "1px solid #777373ff",
                    background: "#20195bff",
                    color: "white",
                    fontWeight: "600",
                  }}
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      socialLinks: [
                        ...(formData.socialLinks || []),
                        { title: "", content: "" },
                      ],
                    })
                  }
                >
                  Add New
                </button>
              </div>

              <div className="upload-container">
                <label className="upload-box">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleUpload("banner", e.target.files[0])}
                  />
                  <div className="upload-content">
                    <span className="upload-icon">📤</span>
                    <p>Upload Image</p>
                  </div>
                </label>

                {formData.banner && (
                  <img
                    src={`https://spatial-backend.onrender.com${formData.banner}`}
                    alt="banner"
                    className="preview-image"
                  />
                )}
              </div>

              <div className="upper-slide">
                <button className="btn-2" onClick={handleListSubmitTesti}>
                  {generalloading ? (
                    <ClipLoader color="white" size={35} />
                  ) : (
                    "Update Web Setting"
                  )}
                </button>
                {/* <button
                      style={{
                        background: "red",
                      }}
                      onClick={handleOpen}
                      className=""
                      type="button"
                    >
                      Close
                    </button> */}
              </div>
            </div>
          </form>
        </div>
      </div>

      {generalPost ? (
        <div className="dropdown-containerTwo">
          <div className="successPop">
            <p>Web setting Updated Successfully. Thanks</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}

      {newSliderOpen ? <div className="dropdown-container"></div> : ""}
    </SliderRap>
  );
};

export default WebSetting;
