import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";

import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

import { fetchProjectpage, fetchServicepage } from "../Redux/slice/homeSlice";
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
import { addToServiceList, deleteSpecificService, updateHomeServiceHeadings, updateSpecificService } from "../Redux/slice/serviceSlice";

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

const ServiceUserPage = () => {
  const dispatch = useDispatch();
  const { loading: uploading } = useSelector((state) => state.upload);
  const { serviceObject, loading, error } = useSelector(
    (state) => state.content
  );
  const {
    sliderloading,
    slider,
    sliderUpade,
    testiHeadloading,
    testiHeading,
    testiListloading,
    testiList,
    sliderDelete,
  } = useSelector((state) => state.service);
  const [selectedId, setSelectedId] = useState(null);
  const [openImageDrop, setOpenImageDrop] = useState(true);
  const [openVideoDrop, setOpenVideoDrop] = useState(false);
  const [openImageDropTwo, setOpenImageDropTwo] = useState(true);
  const [openVideoDropTwo, setOpenVideoDropTwo] = useState(false);
  const [newSliderOpen, setNewSliderOpen] = useState(false);

  const handleOpen = () => {
    setNewSliderOpen(!newSliderOpen);
  };
  const sliding = serviceObject?.services || [];
  const heading = serviceObject?.homeHeadings;

  console.log(serviceObject);

  useEffect(() => {
    dispatch(fetchServicepage()); // Call API on component mount
  }, [dispatch]);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const selectedSlide = selectedId
    ? sliding?.find((item) => item._id === selectedId)
    : null;

  const [headingTesti, setHeadingTesti] = useState({
    title: "",
    subtitle: "",
    servicePageBanner: "",
  });
  const [listTesti, setListTesti] = useState({
    name: "",
    overview: "",
   
    serviceFaq: [],
    whyChoose: [],
    servicesOffered: [],
   
    description: "",
    
    banner: "",
  });

  const [formData, setFormData] = useState({
  name: "",
    overview: "",
   
    serviceFaq: [],
    whyChoose: [],
    servicesOffered: [],
   
    description: "",
    
    banner: "",
  });

  // whenever selectedSlide changes, update formData
  useEffect(() => {
    if (selectedSlide) {
      setFormData({
        name: selectedSlide.name || "",
        overview: selectedSlide.overview || "",
        serviceFaq: selectedSlide.serviceFaq || [],
         whyChoose: selectedSlide.whyChoose || [],
          servicesOffered: selectedSlide.servicesOffered || [],
        description: selectedSlide.description || "",
       
        banner: selectedSlide.banner || "",
      
      });
    }
  }, [selectedSlide]);

  useEffect(() => {
    if (heading) {
      setHeadingTesti({
        title: heading.title || "",
        subtitle: heading.subtitle || "",
        servicePageBanner: heading.servicePageBanner || "",
      });
    }
  }, [heading]);

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    dispatch(updateSpecificService({ id: selectedSlide._id, data: formData }));
  };

  const handleClose = () => {
    dispatch(resetSlider());
    setNewSliderOpen(false);
    setSelectedId(null);
    setListTesti({
       name: "",
    overview: "",
   
    serviceFaq: [],
    whyChoose: [],
    servicesOffered: [],
   
    description: "",
    
    banner: "",
    });
  };
  const handleHeadingSubmitTesti = (e) => {
    e.preventDefault();
    dispatch(
      updateHomeServiceHeadings({
        title: headingTesti.title,
        subtitle: headingTesti.subtitle,
        servicePageBanner: headingTesti.projectPageBanner,
      })
    );
  };

  // ✅ Handle list add
  const handleListSubmitTesti = (e) => {
    e.preventDefault();
    dispatch(addToServiceList({ ...listTesti }));
  };

  const handleUpload = async (type, file, youtubeUrl = "") => {
    dispatch(uploadMedia({ folderName: "slider", file, youtubeUrl }))
      .unwrap()
      .then((res) => {
        const newFormData = { ...formData };

        if (type === "banner") {
          newFormData.banner = res.data;
        } else if (type === "bannerList") {
          newFormData.bannerList = [...(formData.bannerList || []), res.data];
        } else if (type === "video") {
          newFormData.video = res.data;
        }

        setFormData(newFormData);

        setListTesti((prev) => ({
          ...prev,
          [type]:
            type === "bannerList"
              ? [...(prev.bannerList || []), res.data]
              : res.data,
        }));

        dispatch(resetUpload());
      })
      .catch((err) => console.error("Upload failed:", err));
  };

  const handleUploadTwo = async (type, file) => {
    dispatch(uploadMedia({ folderName: "home", file }))
      .unwrap()
      .then((res) => {
        // update only the banner field
        setHeadingTesti((prev) => ({
          ...prev,
          projectPageBanner: res.data, // backend returns image URL/path
        }));

        dispatch(resetUpload());
      })
      .catch((err) => console.error("Upload failed:", err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      dispatch(deleteSpecificService(id));
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
            <h2>Service Page Section</h2>
          </div>
        </div>
        <div className="slider-group">
          <h3>Home Heading</h3>
          <input
            type="text"
            placeholder="Heading Title"
            value={headingTesti.title}
            onChange={(e) =>
              setHeadingTesti({ ...headingTesti, title: e.target.value })
            }
          />
          <textarea
            type="text"
            placeholder="Heading SubTitle"
            value={headingTesti.subtitle}
            onChange={(e) =>
              setHeadingTesti({ ...headingTesti, subtitle: e.target.value })
            }
          />

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

            {headingTesti.servicePageBanner && (
              <img
                src={`http://localhost:5000${headingTesti.servicePageBanner}`}
                alt="banner"
                className="preview-image"
              />
            )}
          </div>
          <div className="upper-slide">
            <button className="btn-2" onClick={handleHeadingSubmitTesti}>
              {testiHeadloading ? (
                <ClipLoader color="white" size={35} />
              ) : (
                "Update Service Heading"
              )}
            </button>
          </div>
        </div>
        <div className="upper-slide documents">
          <h3>Service List</h3>
          <button
            style={{
              marginBottom: "20px",
            }}
            onClick={handleOpen}
          >
            Add a new service
          </button>
        </div>
        <div className="table-scroll">
          <table className="custom-table">
            <thead>
              <tr style={{ background: "#f4f4f4" }}>
                <th style={{ textAlign: "left" }}>S/N</th>
                <th style={{ textAlign: "left" }}>Name </th>
                <th style={{ textAlign: "left" }}>overview</th>
                <th style={{ textAlign: "left" }}>Date</th>
                <th style={{ textAlign: "left" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {sliding?.map((items, index) => (
                <tr className="tr-hover">
                  <td>{index + 1}</td>
                  <td>{items.name}</td>
                  <td>{items.overview}</td>
                  <td>
                    {new Date(items.dateCreated).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </td>

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
                  <h2>Update Service</h2>
                </div>
                <>
                  {/* Heading Form */}

                  {/* Document Form */}
                  <form>
                    <div className="slider-group">
                      <input
                        type="text"
                        placeholder="Service Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />

                      <textarea
                        placeholder="Short Overview"
                        value={formData.overview}
                        onChange={(e) =>
                          setFormData({ ...formData, overview: e.target.value })
                        }
                      />
                    

                      <ReactQuill
                        theme="snow"
                        value={formData.description}
                        onChange={(content) =>
                          setFormData((p) => ({ ...p, description: content }))
                        }
                      />

                     {/* Service Offer Array */}
                      <div>
                        <h4>Services Offered</h4>
                        {formData.servicesOffered.map((feat, idx) => (
                          <div key={idx} style={{ marginBottom: 8 }}>
                            <input
                              type="text"
                              placeholder="Service Offered Title"
                              value={feat.title}
                              onChange={(e) => {
                                const arr = [...formData.servicesOffered];
                                arr[idx].title = e.target.value;
                                setFormData({
                                  ...formData,
                                  servicesOffered: arr,
                                });
                              }}
                              style={{ marginRight: 8 }}
                            />
                            <input
                              type="text"
                              placeholder="Service Offered Content"
                              value={feat.content}
                              onChange={(e) => {
                                const arr = [...formData.servicesOffered];
                                arr[idx].content = e.target.value;
                                setFormData({
                                  ...formData,
                                  servicesOffered: arr,
                                });
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const arr = [...formData.servicesOffered];
                                arr.splice(idx, 1);
                                setFormData({
                                  ...formData,
                                  servicesOffered: arr,
                                });
                              }}
                              style={{ marginLeft: 8 }}
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              servicesOffered: [
                                ...(formData.servicesOffered || []),
                                { title: "", content: "" },
                              ],
                            })
                          }
                        >
                          Add Srvice offered
                        </button>
                      </div>
                    

                     {/* Why Choose  Array */}
                      <div>
                        <h4>Why Choose Us Section</h4>
                        {formData.whyChoose.map((feat, idx) => (
                          <div key={idx} style={{ marginBottom: 8 }}>
                            <input
                              type="text"
                              placeholder="Why Choose Title"
                              value={feat.title}
                              onChange={(e) => {
                                const arr = [...formData.whyChoose];
                                arr[idx].title = e.target.value;
                                setFormData({
                                  ...formData,
                                  whyChoose: arr,
                                });
                              }}
                              style={{ marginRight: 8 }}
                            />
                            <input
                              type="text"
                              placeholder="Why Choose Content"
                              value={feat.content}
                              onChange={(e) => {
                                const arr = [...formData.whyChoose];
                                arr[idx].content = e.target.value;
                                setFormData({
                                  ...formData,
                                  whyChoose: arr,
                                });
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const arr = [...formData.whyChoose];
                                arr.splice(idx, 1);
                                setFormData({
                                  ...formData,
                                  whyChoose: arr,
                                });
                              }}
                              style={{ marginLeft: 8 }}
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              whyChoose: [
                                ...(formData.whyChoose || []),
                                { title: "", content: "" },
                              ],
                            })
                          }
                        >
                          Add New
                        </button>
                      </div>

                      {/* Service Faq Array */}
                      <div>
                        <h4>Faq List</h4>
                        {formData.serviceFaq.map((feat, idx) => (
                          <div key={idx} style={{ marginBottom: 8 }}>
                            <input
                              type="text"
                              placeholder="Faq Question"
                              value={feat.title}
                              onChange={(e) => {
                                const arr = [...formData.serviceFaq];
                                arr[idx].title = e.target.value;
                                setFormData({
                                  ...formData,
                                  serviceFaq: arr,
                                });
                              }}
                              style={{ marginRight: 8 }}
                            />
                            <input
                              type="text"
                              placeholder="Faq Answer"
                              value={feat.content}
                              onChange={(e) => {
                                const arr = [...formData.serviceFaq];
                                arr[idx].content = e.target.value;
                                setFormData({
                                  ...formData,
                                  serviceFaq: arr,
                                });
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const arr = [...formData.serviceFaq];
                                arr.splice(idx, 1);
                                setFormData({
                                  ...formData,
                                  serviceFaq: arr,
                                });
                              }}
                              style={{ marginLeft: 8 }}
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              serviceFaq: [
                                ...(formData.serviceFaq || []),
                                { title: "", content: "" },
                              ],
                            })
                          }
                        >
                          Add Faq
                        </button>
                      </div>

                      {/* Banner List Upload */}
                     
                      <div className="upload-container">
                        <label className="upload-box">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleUpload("banner", e.target.files[0])
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
                            "Update Service"
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
            <p>Service Details Updated Successfully. Thanks</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
      {testiList ? (
        <div className="dropdown-containerTwo">
          <div className="successPop">
            <p>Service Saved Successfully. Thanks</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}

      {testiHeading ? (
        <div className="dropdown-containerTwo">
          <div className="successPop">
            <p>Service Home Section heading Saved Successfully. Thanks</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
      {sliderDelete ? (
        <div className="dropdown-containerTwo">
          <div className="successPop">
            <p>Service Deleted Successfully. Thanks</p>
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
                <h2>Add Service</h2>
              </div>
              <form>
                <div className="slider-group">
                  <input
                    type="text"
                    placeholder="Service Name"
                    value={listTesti.name}
                    onChange={(e) =>
                      setListTesti({ ...listTesti, name: e.target.value })
                    }
                  />
                  <textarea
                    type="text"
                    placeholder="Enter short overview"
                    value={listTesti.overview}
                    onChange={(e) =>
                      setListTesti({ ...listTesti, overview: e.target.value })
                    }
                  />
                
               
                  <ReactQuill
                    theme="snow"
                    value={listTesti.description}
                    onChange={(content) =>
                      setListTesti((p) => ({ ...p, description: content }))
                    }
                  />

                  
                

                 

                  {/* Service Offer Array */}
                      <div>
                        <h4>Services Offered</h4>
                        {listTesti.servicesOffered.map((feat, idx) => (
                          <div key={idx} style={{ marginBottom: 8 }}>
                            <input
                              type="text"
                              placeholder="Service Offered Title"
                              value={feat.title}
                              onChange={(e) => {
                                const arr = [...listTesti.servicesOffered];
                                arr[idx].title = e.target.value;
                                setListTesti({
                                  ...listTesti,
                                  servicesOffered: arr,
                                });
                              }}
                              style={{ marginRight: 8 }}
                            />
                            <input
                              type="text"
                              placeholder="Service Offer Content"
                              value={feat.content}
                              onChange={(e) => {
                                const arr = [...listTesti.servicesOffered];
                                arr[idx].content = e.target.value;
                                setListTesti({
                                  ...listTesti,
                                  servicesOffered: arr,
                                });
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const arr = [...listTesti.servicesOffered];
                                arr.splice(idx, 1);
                                setListTesti({
                                  ...listTesti,
                                  servicesOffered: arr,
                                });
                              }}
                              style={{ marginLeft: 8 }}
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            setListTesti({
                              ...listTesti,
                              servicesOffered: [
                                ...(listTesti.servicesOffered || []),
                                { title: "", content: "" },
                              ],
                            })
                          }
                        >
                          Add Srvice offered
                        </button>
                      </div>
                    

                     {/* Why Choose  Array */}
                      <div>
                        <h4>Why Choose Us Section</h4>
                        {listTesti.whyChoose.map((feat, idx) => (
                          <div key={idx} style={{ marginBottom: 8 }}>
                            <input
                              type="text"
                              placeholder="Why Choose Title"
                              value={feat.title}
                              onChange={(e) => {
                                const arr = [...listTesti.whyChoose];
                                arr[idx].title = e.target.value;
                                setListTesti({
                                  ...listTesti,
                                  whyChoose: arr,
                                });
                              }}
                              style={{ marginRight: 8 }}
                            />
                            <input
                              type="text"
                              placeholder="Why Choose Content"
                              value={feat.content}
                              onChange={(e) => {
                                const arr = [...listTesti.whyChoose];
                                arr[idx].content = e.target.value;
                                setListTesti({
                                  ...listTesti,
                                  whyChoose: arr,
                                });
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const arr = [...listTesti.whyChoose];
                                arr.splice(idx, 1);
                                setListTesti({
                                  ...listTesti,
                                  whyChoose: arr,
                                });
                              }}
                              style={{ marginLeft: 8 }}
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            setListTesti({
                              ...listTesti,
                              whyChoose: [
                                ...(listTesti.whyChoose || []),
                                { title: "", content: "" },
                              ],
                            })
                          }
                        >
                          Add New
                        </button>
                      </div>

                      {/* Service Faq Array */}
                      <div>
                        <h4>Faq List</h4>
                        {listTesti.serviceFaq.map((feat, idx) => (
                          <div key={idx} style={{ marginBottom: 8 }}>
                            <input
                              type="text"
                              placeholder="Faq Question"
                              value={feat.title}
                              onChange={(e) => {
                                const arr = [...listTesti.serviceFaq];
                                arr[idx].title = e.target.value;
                                setListTesti({
                                  ...listTesti,
                                  serviceFaq: arr,
                                });
                              }}
                              style={{ marginRight: 8 }}
                            />
                            <input
                              type="text"
                              placeholder="Faq Answer"
                              value={feat.content}
                              onChange={(e) => {
                                const arr = [...listTesti.serviceFaq];
                                arr[idx].content = e.target.value;
                                setListTesti({
                                  ...listTesti,
                                  serviceFaq: arr,
                                });
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const arr = [...listTesti.serviceFaq];
                                arr.splice(idx, 1);
                                setListTesti({
                                  ...listTesti,
                                  serviceFaq: arr,
                                });
                              }}
                              style={{ marginLeft: 8 }}
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            setListTesti({
                              ...listTesti,
                              serviceFaq: [
                                ...(listTesti.serviceFaq || []),
                                { title: "", content: "" },
                              ],
                            })
                          }
                        >
                          Add Faq
                        </button>
                      </div>

                 

                  <div className="upload-container">
                    <label className="upload-box">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleUpload("banner", e.target.files[0])
                        }
                      />
                      <div className="upload-content">
                        <span className="upload-icon">📤</span>
                        <p>Upload Image</p>
                      </div>
                    </label>

                    {listTesti.banner && (
                      <img
                        src={`http://localhost:5000${listTesti.banner}`}
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
                        "Add Service"
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

export default ServiceUserPage;
