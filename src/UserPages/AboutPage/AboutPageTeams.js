import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchHomepage, fetchObjectpage } from "../../Redux/slice/homeSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import { resetUpload, uploadMedia } from "../../Redux/slice/uploadSlice";
import {
  deleteDocumentHome,
  deleteSliderHome,
  deleteTestimonyHome,
  postDocumentsHeading,
  postDocumentsList,
  postHomeSlider,
  postTestimonyHeading,
  postTestimonyList,
  resetSlider,
  updateDocumentHome,
  updateSliderHome,
  updateTestimonyHome,
} from "../../Redux/slice/userSlice";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import {
  deleteTeamMember,
  updateTeamListAbout,
  updateTeamMember,
  updateTeamsHeadingAbout,
} from "../../Redux/slice/aboutUserSlice";

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
  @media (max-width: 700px) {
    input,
    textarea,
    .upload-two-label,
    .upload-box {
      width: 500px;
    }
    .btn-3 {
      width: 500px;
    }
  }

  @media (max-width: 500px) {
    input,
    textarea,
    .upload-two-label,
    .upload-box,
    .btn-3 {
      width: 350px;
    }
  }

  @media (max-width: 410px) {
    input,
    textarea,
    .upload-two-label,
    .upload-box,
    .btn-3 {
      width: 300px;
    }
  }
  @media (max-width: 370px) {
    input,
    textarea,
    .upload-two-label,
    .upload-box,
    .btn-3 {
      width: 270px;
    }
  }

  @media (max-width: 500px) {
    .be-done {
      display: none;
    }
  }
`;

const AboutPageTeams = () => {
  const dispatch = useDispatch();
  const { loading: uploading } = useSelector((state) => state.upload);
  const { aboutObject, loading, error } = useSelector((state) => state.content);
  const {
    sliderloading,
    slider,
    sliderUpade,
    testiHeadloading,
    testiHeading,
    testiListloading,
    testiList,
    sliderDelete,
  } = useSelector((state) => state.userAbout);
  const [selectedId, setSelectedId] = useState(null);
  const [openImageDrop, setOpenImageDrop] = useState(true);
  const [openVideoDrop, setOpenVideoDrop] = useState(false);
  const [openImageDropTwo, setOpenImageDropTwo] = useState(true);
  const [openVideoDropTwo, setOpenVideoDropTwo] = useState(false);
  const [newSliderOpen, setNewSliderOpen] = useState(false);

  const handleOpen = () => {
    setNewSliderOpen(!newSliderOpen);
  };
  const sliding = aboutObject?.teams?.lists || [];
  const heading = aboutObject?.teams?.headings;

  console.log(aboutObject);

  useEffect(() => {
    dispatch(fetchObjectpage()); // Call API on component mount
  }, [dispatch]);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const selectedSlide = selectedId
    ? sliding?.find((item) => item._id === selectedId)
    : null;

  const [headingTesti, setHeadingTesti] = useState({ title: "", subtitle: "" });
  const [listTesti, setListTesti] = useState({
    name: "",
    banner: "",
    role: "",
    phone: "",
    email: "",
    certifications: "",
    overview: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    banner: "",
    role: "",
    phone: "",
    email: "",
    certifications: "",
    overview: "",
  });

  // whenever selectedSlide changes, update formData
  useEffect(() => {
    if (selectedSlide) {
      setFormData({
        name: selectedSlide.name || "",
        banner: selectedSlide.banner || "",
        role: selectedSlide.role || "",
        phone: selectedSlide.phone || "",
        email: selectedSlide.email || "",
        certifications: selectedSlide.certifications || "",
        overview: selectedSlide.overview || "",
      });
    }
  }, [selectedSlide]);

  useEffect(() => {
    if (heading) {
      setHeadingTesti({
        title: heading.title || "",
        subtitle: heading.subtitle || "",
      });
    }
  }, [heading]);

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTeamMember({ id: selectedSlide._id, data: formData }));
  };

  const handleClose = () => {
    dispatch(resetSlider());
    setNewSliderOpen(false);
    setSelectedId(null);
    setListTesti({
      name: "",
      banner: "",
      role: "",
      phone: "",
      email: "",
      certifications: "",
      overview: "",
    });
  };
  const handleHeadingSubmitTesti = (e) => {
    e.preventDefault();
    dispatch(
      updateTeamsHeadingAbout({
        title: headingTesti.title,
        subtitle: headingTesti.subtitle,
      })
    );
  };

  // ✅ Handle list add
  const handleListSubmitTesti = (e) => {
    e.preventDefault();
    dispatch(
      updateTeamListAbout({
        name: listTesti.name,
        banner: listTesti.banner,
        role: listTesti.role,
        phone: listTesti.phone,
        email: listTesti.email,
        certifications: listTesti.certifications,
        overview: listTesti.overview,
      })
    );
  };
  const handleUploadTwo = async (type, file) => {
    dispatch(uploadMedia({ folderName: "home", file }))
      .unwrap()
      .then((res) => {
        // update only the banner field
        setListTesti((prev) => ({
          ...prev,
          banner: res.data, // backend returns image URL/path
        }));
        setFormData((prev) => ({
          ...prev,
          banner: res.data, // backend returns image URL/path
        }));
        dispatch(resetUpload());
      })
      .catch((err) => console.error("Upload failed:", err));
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this team member?")) {
      dispatch(deleteTeamMember(id));
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
            <Link to="/users/aboutus">
              <Icon
                className="icon"
                width="20px"
                height="20px"
                icon="formkit:arrowleft"
                color="black"
              />
            </Link>
            <h2>Team Member Section</h2>
          </div>
        </div>
        <div className="slider-group">
          <h3>Heading</h3>
          <input
            type="text"
            placeholder="Heading Title"
            value={headingTesti.title}
            onChange={(e) =>
              setHeadingTesti({ ...headingTesti, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Heading SubTitle"
            value={headingTesti.subtitle}
            onChange={(e) =>
              setHeadingTesti({ ...headingTesti, subtitle: e.target.value })
            }
          />
          <div className="upper-slide">
            <button className="btn-2 btn-3" onClick={handleHeadingSubmitTesti}>
              {testiHeadloading ? (
                <ClipLoader color="white" size={35} />
              ) : (
                "Update Teams Heading"
              )}
            </button>
          </div>
        </div>
        <div className="upper-slide documents">
          <h3>Team Members</h3>
          <button
            style={{
              marginBottom: "20px",
            }}
            onClick={handleOpen}
          >
            Add a new member
          </button>
        </div>
        <div className="table-scroll">
          <table className="custom-table">
            <thead>
              <tr style={{ background: "#f4f4f4" }}>
                <th style={{ textAlign: "left" }}>S/N</th>
                <th style={{ textAlign: "left" }}>Name </th>
                <th className="be-done" style={{ textAlign: "left" }}>
                  Role
                </th>
                <th style={{ textAlign: "left" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {sliding?.map((items, index) => (
                <tr className="tr-hover">
                  <td>{index + 1}</td>
                  <td>{items.name}</td>
                  <td className="be-done">{items.role}</td>
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
                  <h2>Update Team Member</h2>
                </div>
                <>
                  {/* Heading Form */}

                  {/* Document Form */}
                  <form>
                    <div className="slider-group">
                      <input
                        type="text"
                        placeholder="Customer Full Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />

                      <input
                        placeholder="Enter Role"
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                      />
                      <input
                        placeholder="Enter Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                      <input
                        placeholder="Enter Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      <input
                        placeholder="Enter Cretification Lists"
                        value={formData.certifications}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            certifications: e.target.value,
                          })
                        }
                      />

                      <textarea
                        placeholder="Enter Overview"
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
                              handleUploadTwo("banner", e.target.files[0])
                            }
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
                            "Update Member"
                          )}
                        </button>
                        <button onClick={() => setSelectedId(null)}>
                          Close
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
            <p>Member Details Updated Successfully. Thanks</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
      {testiList ? (
        <div className="dropdown-containerTwo">
          <div className="successPop">
            <p>Member Saved Successfully. Thanks</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}

      {testiHeading ? (
        <div className="dropdown-containerTwo">
          <div className="successPop">
            <p>Team Section heading Saved Successfully. Thanks</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
      {sliderDelete ? (
        <div className="dropdown-containerTwo">
          <div className="successPop">
            <p>Member Deleted Successfully. Thanks</p>
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
                <h2>Add Member</h2>
              </div>
              <form>
                <div className="slider-group">
                  <input
                    type="text"
                    placeholder="Member Full Name"
                    value={listTesti.name}
                    onChange={(e) =>
                      setListTesti({ ...listTesti, name: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Enter role"
                    value={listTesti.role}
                    onChange={(e) =>
                      setListTesti({ ...listTesti, role: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    value={listTesti.phone}
                    onChange={(e) =>
                      setListTesti({ ...listTesti, phone: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Enter Email"
                    value={listTesti.email}
                    onChange={(e) =>
                      setListTesti({ ...listTesti, email: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Enter certification list"
                    value={listTesti.certifications}
                    onChange={(e) =>
                      setListTesti({
                        ...listTesti,
                        certifications: e.target.value,
                      })
                    }
                  />

                  <textarea
                    placeholder="Short Overview"
                    value={listTesti.overview}
                    onChange={(e) =>
                      setListTesti({ ...listTesti, overview: e.target.value })
                    }
                  />

                  <div className="upload-container">
                    <label className="upload-box">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleUploadTwo("banner", e.target.files[0])
                        }
                      />
                      <div className="upload-content">
                        <span className="upload-icon">📤</span>
                        <p>Upload Image</p>
                      </div>
                    </label>

                    {listTesti.banner && (
                      <img
                        src={`https://spatial-backend.onrender.com${listTesti.banner}`}
                        alt="banner"
                        className="preview-image"
                      />
                    )}
                  </div>

                  <div className="upper-slide">
                    <button className="btn-2" onClick={handleListSubmitTesti}>
                      {testiListloading ? (
                        <ClipLoader color="white" size={35} />
                      ) : (
                        "Add Member"
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

export default AboutPageTeams;
