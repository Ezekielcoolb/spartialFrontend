import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchHomepage } from "../../Redux/slice/homeSlice";
import { resetUpload, uploadMedia } from "../../Redux/slice/uploadSlice";
import { resetWhoWeAre, updateWhoWeAre } from "../../Redux/slice/userSlice";
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
    height: 80px;
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
    .btns-two button {
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

const AboutSectionHome = () => {
  const dispatch = useDispatch();
  const { homeObject, loading, error } = useSelector((state) => state.content);
  const { loading: uploading } = useSelector((state) => state.upload);
  const { sliderloading, whoLoading, whoData, sliderUpade, sliderDelete } =
    useSelector((state) => state.users);
  const [whoWeAre, setWhoWeAre] = useState({
    banner: "",
    title: "",
    subtitle: "",
    overview: "",
    smallBanner: "",
    sideSectionOneHeading: "",
    sideSectionOneContent: "",
    sideSectionTwoHeading: "",
    sideSectionTwoContent: "",
    sideSectionThreeHeading: "",
    sideSectionThreeContent: "",
    visionHeading: "",
    visionContent: "",
    missionHeading: "",
    missionContent: "",
  });
  console.log(whoWeAre);

  const whoWeAreData = homeObject?.whoWeAre;

  useEffect(() => {
    if (whoWeAreData) {
      setWhoWeAre({
        title: whoWeAreData.title || "",
        subtitle: whoWeAreData.subtitle || "",
        banner: whoWeAreData.banner || "",
        overview: whoWeAreData.overview || "",
        smallBanner: whoWeAreData.smallBanner || "",
        sideSectionOneHeading: whoWeAreData.sideSectionOneContent || "",
        sideSectionOneContent: whoWeAreData.sideSectionOneContent || "",
        sideSectionTwoHeading: whoWeAreData.sideSectionTwoHeading || "",
        sideSectionTwoContent: whoWeAreData.sideSectionTwoContent || "",
        sideSectionThreeHeading: whoWeAreData.sideSectionThreeHeading || "",
        sideSectionThreeContent: whoWeAreData.sideSectionThreeContent || "",
        visionHeading: whoWeAreData.visionHeading || "",
        visionContent: whoWeAreData.visionContent || "",
        missionHeading: whoWeAreData.missionHeading || "",
        missionContent: whoWeAreData.missionContent || "",
      });
    }
  }, [whoWeAreData]);

  useEffect(() => {
    dispatch(fetchHomepage()); // Call API on component mount
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
  const handleUploadThree = async (type, file) => {
    dispatch(uploadMedia({ folderName: "home", file }))
      .unwrap()
      .then((res) => {
        // update only the banner field
        setWhoWeAre((prev) => ({
          ...prev,
          smallBanner: res.data, // backend returns image URL/path
        }));
        dispatch(resetUpload());
      })
      .catch((err) => console.error("Upload failed:", err));
  };
  const handleSubmitRwo = (e) => {
    e.preventDefault();
    dispatch(updateWhoWeAre(whoWeAre));
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
            <h2>Home Who We Are</h2>
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
              Sub Title:
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
              Vision Heading:
              <input
                type="text"
                name="visionHeading"
                placeholder="Vision Title"
                value={whoWeAre.visionHeading}
                onChange={(e) =>
                  setWhoWeAre({ ...whoWeAre, visionHeading: e.target.value })
                }
              />
            </label>
            <label>
              Vision Content:
              <textarea
                type="text"
                name="visionContent"
                placeholder="Enter vision Content"
                value={whoWeAre.visionContent}
                onChange={(e) =>
                  setWhoWeAre({ ...whoWeAre, visionContent: e.target.value })
                }
              />
            </label>
            <label>
              Mission Heading:
              <input
                type="text"
                name="missionHeading"
                placeholder="Enter mission title"
                value={whoWeAre.missionHeading}
                onChange={(e) =>
                  setWhoWeAre({ ...whoWeAre, missionHeading: e.target.value })
                }
              />
            </label>
            <label>
              Mission Content:
              <textarea
                type="text"
                name="missionContent"
                placeholder="Enter mission Content"
                value={whoWeAre.missionContent}
                onChange={(e) =>
                  setWhoWeAre({ ...whoWeAre, missionContent: e.target.value })
                }
              />
            </label>
            <label>
              Side Section One Heading:
              <input
                type="text"
                name="sideSectionOneHeading"
                placeholder="Enter side section one heading"
                value={whoWeAre.sideSectionOneHeading}
                onChange={(e) =>
                  setWhoWeAre({
                    ...whoWeAre,
                    sideSectionOneHeading: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Side Section One Content:
              <textarea
                type="text"
                name="sideSectionOneContent"
                placeholder="Enter side section one content"
                value={whoWeAre.sideSectionOneContent}
                onChange={(e) =>
                  setWhoWeAre({
                    ...whoWeAre,
                    sideSectionOneContent: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Side Section Two Heading:
              <input
                type="text"
                name="sideSectionTwoHeading"
                placeholder="Enter side section two heading"
                value={whoWeAre.sideSectionTwoHeading}
                onChange={(e) =>
                  setWhoWeAre({
                    ...whoWeAre,
                    sideSectionTwoHeading: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Side Section Two Content:
              <textarea
                type="text"
                name="sideSectionTwoContent"
                placeholder="Enter side section two content"
                value={whoWeAre.sideSectionTwoContent}
                onChange={(e) =>
                  setWhoWeAre({
                    ...whoWeAre,
                    sideSectionTwoContent: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Side Section Three Heading:
              <input
                type="text"
                name="sideSectionThreeHeading"
                placeholder="Enter side section three heading"
                value={whoWeAre.sideSectionThreeHeading}
                onChange={(e) =>
                  setWhoWeAre({
                    ...whoWeAre,
                    sideSectionThreeHeading: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Side Section Three Content:
              <textarea
                type="text"
                name="sideSectionThreeContent"
                placeholder="Enter side section three content"
                value={whoWeAre.sideSectionThreeContent}
                onChange={(e) =>
                  setWhoWeAre({
                    ...whoWeAre,
                    sideSectionThreeContent: e.target.value,
                  })
                }
              />
            </label>
            <div className="upload-container">
              <label className="upload-box">
                Small Banner Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleUploadThree("banner", e.target.files[0])
                  }
                />
                <div className="upload-content">
                  <span className="upload-icon">📤</span>
                  <p>Upload Image</p>
                </div>
              </label>

              {whoWeAre.smallBanner && (
                <img
                  src={`https://spatial-backend.onrender.com${whoWeAre.smallBanner}`}
                  alt="banner"
                  className="preview-image"
                />
              )}
            </div>
            {/* <label>
              Overview:
              <textarea
                type="text"
                name="overview"
                placeholder="Enter Overview"
                value={whoWeAre.overview}
                onChange={(e) =>
                  setWhoWeAre({ ...whoWeAre, overview: e.target.value })
                }
              />
            </label> */}
            <div className="upload-container">
              <label className="upload-box">
                Big Banner Image:
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
                  src={`https://spatial-backend.onrender.com${whoWeAre.banner}`}
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
            <p>Who We Are Section Updated Success fully. Thanks</p>
            <button onClick={() => dispatch(resetWhoWeAre())}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </AboutRap>
  );
};

export default AboutSectionHome;
