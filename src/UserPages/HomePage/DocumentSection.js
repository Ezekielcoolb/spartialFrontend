import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchHomepage } from "../../Redux/slice/homeSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import { resetUpload, uploadMedia } from "../../Redux/slice/uploadSlice";
import {
  deleteDocumentHome,
  deleteSliderHome,
  postDocumentsHeading,
  postDocumentsList,
  postHomeSlider,
  resetSlider,
  updateDocumentHome,
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
`;

const DocumentSectionHome = () => {
  const dispatch = useDispatch();
  const { loading: uploading } = useSelector((state) => state.upload);
  const { homeObject, loading, error } = useSelector((state) => state.content);
  const { sliderloading, slider, sliderUpade, docloading, headings, docListloading, lists, sliderDelete } = useSelector(
    (state) => state.users
  );
  const [selectedId, setSelectedId] = useState(null);
  const [openImageDrop, setOpenImageDrop] = useState(true);
  const [openVideoDrop, setOpenVideoDrop] = useState(false);
  const [openImageDropTwo, setOpenImageDropTwo] = useState(true);
  const [openVideoDropTwo, setOpenVideoDropTwo] = useState(false);
  const [newSliderOpen, setNewSliderOpen] = useState(false);

  

  const handleOpen = () => {
    setNewSliderOpen(!newSliderOpen);
  };
  const sliding = homeObject?.documentsTwo?.lists || [];
  const heading = homeObject?.documentsTwo?.headings 

  console.log(lists);

  useEffect(() => {
    dispatch(fetchHomepage()); // Call API on component mount
  }, [dispatch]);

  const handleUploadThree = async (type, file) => {
    dispatch(uploadMedia({ folderName: "home", file }))
      .unwrap()
      .then((res) => {
        // update only the banner field
        setListForm((prev) => ({
          ...prev,
          banner: res.data,
        }));
        setFormData((prev) => ({
          ...prev,
          banner: res.data,
        }));
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

  const [headingForm, setHeadingForm] = useState({ title: "", subtitle: "" });
  const [listForm, setListForm] = useState({
    title: "",
    banner: "",
    overview: "",
  });

  const [formData, setFormData] = useState({
    title: "",
    overview: "",
    banner: "",
  });

  // whenever selectedSlide changes, update formData
  useEffect(() => {
    if (selectedSlide) {
      setFormData({
        title: selectedSlide.title || "",
        overview: selectedSlide.overview || "",
        banner: selectedSlide.banner || "",
      });
    }
  }, [selectedSlide]);

  useEffect(() => {
    if (heading) {
      setHeadingForm({
        title: heading.title || "",
        subtitle: heading.subtitle || "",
      });
    }
  }, [heading]);

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    dispatch(updateDocumentHome({ id: selectedSlide._id, data: formData }));
  };

  const handleClose = () => {
    dispatch(resetSlider());
    setNewSliderOpen(false)
    setSelectedId(null);
    setListForm(
        {
    title: "",
    banner: "",
    overview: "",
  }
    )
  };
  const handleHeadingSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postDocumentsHeading({
        title: headingForm.title,
        subtitle: headingForm.subtitle,
      })
    );
  };

  // ✅ Handle list add
  const handleListSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postDocumentsList({
        title: listForm.title,
        banner: listForm.banner,
        overview: listForm.overview,
      })
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this document?")) {
      dispatch(deleteDocumentHome(id));
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
            <h2>Document Section</h2>
          </div>
        </div>
        <div className="slider-group">
          <h3>Update Home Document Heading</h3>
          <input
            type="text"
            placeholder="Heading Title"
            value={headingForm.title}
            onChange={(e) =>
              setHeadingForm({ ...headingForm, title: e.target.value })
            }
          />
          <textarea
            type="text"
            placeholder="Heading Subtitle"
            value={headingForm.subtitle}
            onChange={(e) =>
              setHeadingForm({ ...headingForm, subtitle: e.target.value })
            }
          />
          <div className="upper-slide">
            <button style={{
                background: "#18075bff"
            }} onClick={handleHeadingSubmit}>
               {docloading ? (
                                <ClipLoader color="white" size={35} />
                              ) : (
                                "Update Heading"
                              )}
            </button>
          </div>
        </div>
        <div className="upper-slide documents">
            <h3>Documents</h3>
          <button
            style={{
              marginBottom: "20px",
            }}
            onClick={handleOpen}
          >
            Add a new document
          </button>
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
                  <td>{items.overview}</td>
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
                  <h2>Update Documents Section</h2>
                </div>
                <>
                  {/* Heading Form */}

                  {/* Document Form */}
                  <form>
                    <div className="slider-group">
                      <h3>Add Document</h3>
                      <input
                        type="text"
                        placeholder="Document Title"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                      />

                      <textarea
                        placeholder="Overview"
                        value={formData.overview}
                        onChange={(e) =>
                          setFormData({ ...formData, overview: e.target.value })
                        }
                      />

                      <div className="upload-container">
                        <label className="upload-box">
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

                        {formData.banner && (
                          <img
                            src={`http://localhost:5000${formData.banner}`}
                            alt="banner"
                            className="preview-image"
                          />
                        )}
                      </div>
                      <div className="btns">
                        <button onClick={() => setSelectedId(null)}>
                          Close
                        </button>
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
                            "Update Document"
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {sliderUpade ? (
        <div className="dropdown-containerTwo">
          <div className="successPop">
            <p>Document Updated Successfully. Thanks</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
       {lists ? (
        <div className="dropdown-containerTwo">
          <div className="successPop">
            <p>Document Saved Successfully. Thanks</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}

          {headings ? (
        <div className="dropdown-containerTwo">
          <div className="successPop">
            <p>Document heading Saved Successfully. Thanks</p>
            <button onClick={handleClose}>Close</button>
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
      {newSliderOpen ? (
        <div className="dropdown-container">
          <div className="successPop">
            <div className="slider">
              <div className="slider-upper">
                <h2>Add Document</h2>
              </div>
              <form>
                <div className="slider-group">
                  <input
                    type="text"
                    placeholder="Document Title"
                    value={listForm.title}
                    onChange={(e) =>
                      setListForm({ ...listForm, title: e.target.value })
                    }
                  />

                  <textarea
                    placeholder="Overview"
                    value={listForm.overview}
                    onChange={(e) =>
                      setListForm({ ...listForm, overview: e.target.value })
                    }
                  />

                  <div className="upload-container">
                    <label className="upload-box">
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

                    {listForm.banner && (
                      <img
                        src={`http://localhost:5000${listForm.banner}`}
                        alt="banner"
                        className="preview-image"
                      />
                    )}
                  </div>
                  <div className="upper-slide">
                    <button className="btn-2" onClick={handleListSubmit}>
                      {docListloading ? (
                            <ClipLoader color="white" size={35} />
                          ) : (
                            "Save Document"
                          )}
                    </button>
                    <button
                      style={{
                        background: "red",
                      }}
                      onClick={handleOpen}
                      className=""
                      type="button"
                    >
                      Close
                    </button>
                  </div>
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

export default DocumentSectionHome;
