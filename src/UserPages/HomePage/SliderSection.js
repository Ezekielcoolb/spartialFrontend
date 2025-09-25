import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchHomepage } from "../../Redux/slice/homeSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import { resetUpload, uploadMedia } from "../../Redux/slice/uploadSlice";
import {
  deleteSliderHome,
  postHomeSlider,
  resetSlider,
  updateSliderHome,
} from "../../Redux/slice/userSlice";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

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
    width: 180px;
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
    width: 100%;
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
`;

const SliderSection = () => {
  const dispatch = useDispatch();
    const { loading: uploading } = useSelector((state) => state.upload);
  const { homeObject, loading, error } = useSelector((state) => state.content);
  const { sliderloading, slider, sliderUpade, sliderDelete } = useSelector(
    (state) => state.users
  );
  const [selectedId, setSelectedId] = useState(null);
  const [openImageDrop, setOpenImageDrop] = useState(true);
  const [openVideoDrop, setOpenVideoDrop] = useState(false);
  const [openImageDropTwo, setOpenImageDropTwo] = useState(true);
  const [openVideoDropTwo, setOpenVideoDropTwo] = useState(false);
  const [newSliderOpen, setNewSliderOpen] = useState(false);

  const handleImageDrop = () => {
    setOpenImageDrop(!openImageDrop);
    setOpenVideoDrop(false);
  };
  const handleVideoDrop = () => {
    setOpenVideoDrop(!openVideoDrop);
    setOpenImageDrop(false);
  };

  const handleImageDropTwo = () => {
    setOpenImageDropTwo(!openImageDropTwo);
    setOpenVideoDropTwo(false);
  };
  const handleVideoDropTwo = () => {
    setOpenVideoDropTwo(!openVideoDropTwo);
    setOpenImageDropTwo(false);
  };

  const handleOpen = () => {
    setNewSliderOpen(!newSliderOpen);
  };
  const sliding = homeObject?.slider || [];
  console.log(sliding);

  console.log(sliderUpade);

  useEffect(() => {
    dispatch(fetchHomepage()); // Call API on component mount
  }, [dispatch]);

  const handleUpload = async (type, file, youtubeUrl = "") => {
    dispatch(uploadMedia({ folderName: "slider", file, youtubeUrl }))
      .unwrap()
      .then((res) => {
        const newFormData = { ...formData };

        if (type === "banner") {
          newFormData.video = ""; // clear video if banner chosen
        } else if (type === "video") {
          newFormData.banner = ""; // clear banner if video chosen
        }

        newFormData[type] = res.data; // server returns URL or YouTube link
        setFormData(newFormData);

        dispatch(resetUpload());
      })
      .catch((err) => console.error("Upload failed:", err));
  };

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const selectedSlide = selectedId
    ? sliding?.find((item) => item._id === selectedId)
    : null;

  const [sliders, setSliders] = useState([
    { banner: "", title: "", subtitle: "", video: "" },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    banner: "",
    video: "",
  });

  // whenever selectedSlide changes, update formData
  useEffect(() => {
    if (selectedSlide) {
      setFormData({
        title: selectedSlide.title || "",
        subtitle: selectedSlide.subtitle || "",
        banner: selectedSlide.banner || "",
        video: selectedSlide.video || "",
      });
    }
  }, [selectedSlide]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeTwo = (index, e) => {
    const { name, value } = e.target;
    const updatedSliders = [...sliders];
    updatedSliders[index][name] = value;
    setSliders(updatedSliders);
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    dispatch(updateSliderHome({ id: selectedSlide._id, data: formData }));
  };

  const handleClose = () => {
    dispatch(resetSlider());
    setSelectedId(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { sliders }; // plain JSON array
    dispatch(postHomeSlider(payload));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this slider?")) {
      dispatch(deleteSliderHome(id));
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
            <h2>Home Slider</h2>
          </div>
          <button onClick={handleOpen}>Add a new slider</button>
        </div>
        <div className="table-scroll">
          <table className="custom-table">
            <thead>
              <tr style={{ background: "#f4f4f4" }}>
                <th style={{ textAlign: "left" }}>S/N</th>
                <th style={{ textAlign: "left" }}>Title </th>
                <th style={{ textAlign: "left" }}>Overview</th>
                <th style={{ textAlign: "left" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {sliding?.map((items, index) => (
                <tr className="tr-hover">
                  <td>{index + 1}</td>
                  <td>{items.title}</td>
                  <td>{items.subtitle}</td>
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
              <div className="slider-group">
                <label>
                  Slider title:
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Slider overview:
                  <input
                    type="text"
                    name="subtitle"
                    placeholder="Enter overview"
                    value={formData.subtitle}
                    onChange={handleChange}
                  />
                </label>
                <div className="slider-2">
                  <h4>Upload either a video or an image</h4>
                  <div className="btnses">
                    <button className="btnses-1" onClick={handleImageDrop}>
                      Upload Image
                    </button>
                    <button className="btnses-1" onClick={handleVideoDrop}>
                      Upload Video
                    </button>
                  </div>
                  {openImageDrop && (
                    <div className="upload-container">
                      <label className="upload-box">
                        <input
                          type="file"
                          accept="image/*"
                          disabled={!!formData.video}
                          onChange={(e) =>
                            handleUpload("banner", e.target.files[0])
                          }
                          hidden
                        />
                        <div className="upload-content">
                          <span className="upload-icon">📤</span>
                          <p>Upload Image</p>
                        </div>
                      </label>

                      {formData.banner && (
                        <img
                          src={`http://localhost:5000${formData.banner}`}
                          alt="banner"
                          className="preview-image"
                        />
                      )}
                    </div>
                  )}

                  {/* Video Upload OR YouTube Link (disabled if banner exists) */}
                  {openVideoDrop && (
                    <div className="upload-two-box">
                      <label
                        htmlFor="video-upload"
                        className="upload-two-label"
                      >
                        <div className="upload-content">
                          <i className="fas fa-video"></i>
                          <p>Upload Video</p>
                        </div>
                      </label>
                      <input
                        id="video-upload"
                        type="file"
                        accept="video/mp4,video/avi,video/mov"
                        disabled={!!formData.banner} // disable if banner exists
                        onChange={(e) =>
                          handleUpload("video", e.target.files[0])
                        }
                      />

                      {/* ✅ Video Preview */}
                      {formData.video && (
                        <div className="mt-3">
                          <video
                            src={`http://localhost:5000${formData.video}`}
                            controls
                            className="video-preview"
                            style={{ borderRadius: "8px" }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="btns">
              <button onClick={() => setSelectedId(null)}>Close</button>
              <button
                onClick={handleSubmitUpdate}
                style={{
                  background: "#062c12ff",
                  color: "#ffffff",
                }}
              >
                {sliderloading ? (
                  <ClipLoader color="white" size={35} />
                ) : (
                  "Update Slider"
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {sliderUpade ? (
        <div className="dropdown-container">
          <div className="successPop">
            <p>Slider Updated Success fully. Thanks</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
      {sliderDelete ? (
        <div className="dropdown-container">
          <div className="successPop">
            <p>Slider Deleted Success fully. Thanks</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
      {newSliderOpen ? (
        <div className="dropdown-container">
          <div className="successPop">
            <div className="slider">
              <div className="slider-upper">
                <h2>Update Home Slider</h2>
              </div>
              <form>
                {sliders.map((slider, index) => (
                  <div key={index} className="slider-group-new">
                    <label>
                      Slider title:
                      <input
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        value={slider.title}
                        onChange={(e) => handleChangeTwo(index, e)}
                      />
                    </label>
                    <label>
                      Slider overview:
                      <input
                        type="text"
                        name="subtitle"
                        placeholder="Enter overview"
                        value={slider.subtitle}
                        onChange={(e) => handleChangeTwo(index, e)}
                      />
                    </label>
                    <div className="slider-2">
                      <h4>Upload either a video or an image</h4>
                      <div className="btnses">
                        <button
                          type="button"
                          className="btnses-1"
                          onClick={handleImageDropTwo}
                        >
                          Upload Image
                        </button>
                        <button
                          type="button"
                          className="btnses-1"
                          onClick={handleVideoDropTwo}
                        >
                          Upload Video
                        </button>
                      </div>
                      {openImageDropTwo && (
                        <div className="upload-container">
                          <label className="upload-box">
                            <input
                              type="file"
                              accept="image/*"
                              disabled={!!slider.video}
                              onChange={(e) =>
                                handleUpload(index, "banner", e.target.files[0])
                              }
                              hidden
                            />
                            <div className="upload-content">
                              <span className="upload-icon">📤</span>
                              <p>Upload Image</p>
                            </div>
                          </label>

                          {slider.banner && (
                            <img
                              src={`http://localhost:5000${slider.banner}`}
                              alt="banner"
                              className="preview-image"
                            />
                          )}
                        </div>
                      )}

                      {/* Video Upload OR YouTube Link (disabled if banner exists) */}
                      {openVideoDropTwo && (
                        <div className="upload-two-box">
                          <label
                            htmlFor={`video-upload-${index}`}
                            className="upload-two-label"
                          >
                            <div className="upload-content">
                              <i className="fas fa-video"></i>
                              <p>Upload Video</p>
                            </div>
                          </label>
                          <input
                            id={`video-upload-${index}`}
                            type="file"
                            accept="video/mp4,video/avi,video/mov"
                            disabled={!!slider.banner}
                            onChange={(e) =>
                              handleUpload(index, "video", e.target.files[0])
                            }
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div className="upper-slide">
                  <button
                    onClick={handleSubmit}
                    className=""
                    type="submit"
                    disabled={sliderloading}
                  >
                    {sliderloading ? "Submitting..." : "✅ Submit"}
                  </button>
                  <button
                    style={{
                      background: "red",
                    }}
                    onClick={handleOpen}
                    className=""
                    type="submit"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </SliderRap>
  );
};

export default SliderSection;
