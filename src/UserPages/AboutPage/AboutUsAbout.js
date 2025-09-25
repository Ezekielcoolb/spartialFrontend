import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchHomepage, fetchObjectpage } from "../../Redux/slice/homeSlice";
import { resetUpload, uploadMedia } from "../../Redux/slice/uploadSlice";
import { resetWhoWeAre, updateWhoWeAre } from "../../Redux/slice/userSlice";
import { ClipLoader } from "react-spinners";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { updateAboutusAbout } from "../../Redux/slice/aboutUserSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


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

const AboutSectionAbout = () => {
  const dispatch = useDispatch();
  const { aboutObject, loading, error } = useSelector((state) => state.content);
  const { loading: uploading } = useSelector((state) => state.upload);
  const { sliderloading, whoLoading, whoData, sliderUpade, sliderDelete } =
    useSelector((state) => state.userAbout);
  const [whoWeAre, setWhoWeAre] = useState({
    banner: "",
    title: "",
    subtitle: "",
    mainTitle: "",
    overview: "",
  });
  console.log(aboutObject);

  const whoWeAreData = aboutObject?.aboutUs;

  useEffect(() => {
    if (whoWeAreData) {
      setWhoWeAre({
        title: whoWeAreData.title || "",
        subtitle: whoWeAreData.subtitle || "",
        banner: whoWeAreData.banner || "",
        mainTitle: whoWeAreData.mainTitle || "",
        overview: whoWeAreData.overview || "",
      });
    }
  }, [whoWeAreData]);

  useEffect(() => {
    dispatch(fetchObjectpage()); // Call API on component mount
  }, [dispatch]);

  const handleUploadTwo = async (type, file) => {
    dispatch(uploadMedia({ folderName: "home", file }))
      .unwrap()
      .then((res) => {
        // update only the banner field
        setWhoWeAre((prev) => ({
          ...prev,
          banner: res.data, // backend returns image URL/path
        }));
        
        dispatch(resetUpload());
      })
      .catch((err) => console.error("Upload failed:", err));
  };
  const handleSubmitRwo = (e) => {
    e.preventDefault();
    dispatch(updateAboutusAbout(whoWeAre));
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
            <h2>About us section</h2>
          </div>
        </div>
        <form>
          <div className="slider-group">
            <label>
              Title:
              <input
                type="text"
                name="title"
                placeholder="Enter Title"
                value={whoWeAre.title}
                onChange={(e) =>
                  setWhoWeAre({ ...whoWeAre, title: e.target.value })
                }
              />
            </label>
             <label>
              Main Title:
              <input
                type="text"
                name="mainTitle"
                placeholder="Enter Main Title"
                value={whoWeAre.mainTitle}
                onChange={(e) =>
                  setWhoWeAre({ ...whoWeAre, mainTitle: e.target.value })
                }
              />
            </label>
            <label>
              Sub-Title:
              <input
                type="text"
                name="subtitle"
                placeholder="Enter sub-title"
                value={whoWeAre.subtitle}
                onChange={(e) =>
                  setWhoWeAre({ ...whoWeAre, subtitle: e.target.value })
                }
              />
            </label>
            <label>
              Overview:
              {/* <textarea
                type="text"
                name="overview"
                placeholder="Enter Overview"
                value={whoWeAre.overview}
                onChange={(e) =>
                  setWhoWeAre({ ...whoWeAre, overview: e.target.value })
                }
              /> */}
              <ReactQuill
  theme="snow"
  value={whoWeAre.overview}
  onChange={(content) => setWhoWeAre((p) => ({ ...p, overview: content }))}
/>
            </label>
            <div className="upload-container">
              <label className="upload-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUploadTwo("banner", e.target.files[0])}
                />
                <div className="upload-content">
                  <span className="upload-icon">📤</span>
                  <p>Upload Image</p>
                </div>
              </label>

              {whoWeAre.banner && (
                <img
                  src={`http://localhost:5000${whoWeAre.banner}`}
                  alt="banner"
                  className="preview-image"
                />
              )}
            </div>
            <div className="btns">
              <button
                onClick={handleSubmitRwo}
                className="btn-2"
                type="submit"
                disabled={whoLoading}
              >
                {whoLoading ? (
                  <ClipLoader color="white" size={35} />
                ) : (
                  "✅ Submit"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      {whoData ? (
        <div className="dropdown-container">
          <div className="successPop">
            <p>About Section ob About Page Updated Successfully. Thanks</p>
            <button onClick={() => dispatch(resetWhoWeAre())}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </AboutRap>
  );
};

export default AboutSectionAbout;
