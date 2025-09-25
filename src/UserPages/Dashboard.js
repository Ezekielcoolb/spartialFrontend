import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  postDocumentsHeading, postDocumentsList, postHomeSlider, postTestimonyHeading, postTestimonyList, resetSlider, resetWhoWeAre, updateHomeCounter, updateWhoWeAre, updateWhyChoose } from "../Redux/slice/userSlice";
import { resetUpload, uploadMedia } from "../Redux/slice/uploadSlice";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";

const DashboardRap = styled.div`
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
  input, textarea {
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
const SliderForm = () => {
  const dispatch = useDispatch();
  const { loading: uploading } = useSelector((state) => state.upload);
  const { sliderloading, slider, testiHeading, testiHeadloading, 
     whoLoading, whoData, testiListloading, testiList
     } = useSelector(
    (state) => state.users
  );
  const [sliders, setSliders] = useState([
    { banner: "", title: "", subtitle: "", video: "" },
  ]);

  const [whoWeAre, setWhoWeAre] = useState({
    banner: "",
    title: "",
    subtitle: "",
    overview: "",
  });
const [whyChooseData, setWhyChooseData] = useState({
     titleOne: "",
    subtitleOne: "",
    titleTwo: "",
    subtitleTwo: "",
    titleThree: "",
    subtitleThree: "",
  });

  const [homeCounterData, setHomeCounterData] = useState({
    title: "",
    projectDone: "",
    yearsOfExperience:  "",
    awardWinning:  "",
    satisfiedCustomers:  "",
    subtitle: "",
  });

  const [headingForm, setHeadingForm] = useState({ title: "", subtitle: "" });
  const [listForm, setListForm] = useState({
    title: "",
    banner: "",
    overview: "",
  });
   const [headingTesti, setHeadingTesti] = useState({ title: "", mainTitle: "" });
  const [listTesti, setListTesti] = useState({
    name: "",
    content: "",
  });

  console.log(listTesti);
  

const handleHeadingSubmitTesti = (e) => {
    e.preventDefault();
    dispatch(
      postTestimonyHeading({
     
        title: headingTesti.title,
        subtitle: headingTesti.subtitle,
      })
    );
  };

  // ✅ Handle list add
  const handleListSubmitTesti = (e) => {
    e.preventDefault();
    dispatch(
      postTestimonyList({
        name: listTesti.name,
        content: listTesti.content,
      })
    );
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


 

  const [openImageDrop, setOpenImageDrop] = useState(true);
  const [openVideoDrop, setOpenVideoDrop] = useState(false);
  const [openSliderDrop, setOpenSliderDrop] = useState(false);
  const [openWhoWeAreDrop, setOpenWhoWeAreDrop] = useState(false);
  const [openDocumentDrop, setOpenDocumentDrop] = useState(false);
  const [openCounterDrop, setOpenCounterDrop] = useState(false);
  const [openWhyChooseDrop, setOpenWhyChooseDrop] = useState(false);
  const [openFeedBackDrop, setOpenFeedBackDrop] = useState(false);

  const handleOpenSliderDrop = () => {
    setOpenSliderDrop(!openSliderDrop);
  };
  const handleOpenWhoDrop = () => {
    setOpenWhoWeAreDrop(!openWhoWeAreDrop);
  };
   const handleDocumnetDrop = () => {
    setOpenDocumentDrop(!openDocumentDrop);
  };
  
 const handleCounterDrop = () => {
    setOpenCounterDrop(!openCounterDrop);
  };
   const handleFeedbackDrop = () => {
    setOpenFeedBackDrop(!openFeedBackDrop);
  };
   const handleWhyChooseDrop = () => {
    setOpenWhyChooseDrop(!openWhyChooseDrop);
  };


  const handleImageDrop = () => {
    setOpenImageDrop(!openImageDrop);
    setOpenVideoDrop(false);
  };
  const handleVideoDrop = () => {
    setOpenVideoDrop(!openVideoDrop);
    setOpenImageDrop(false);
  };
  // Multiple slider inputs

  // Handle input change
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSliders = [...sliders];
    updatedSliders[index][name] = value;
    setSliders(updatedSliders);
  };

  // Add new slider
  const handleAddSlider = () => {
    setSliders([
      ...sliders,
      { banner: "", title: "", subtitle: "", video: "" },
    ]);
  };

  // Remove a slider
  const handleRemoveSlider = (index) => {
    const updatedSliders = sliders.filter((_, i) => i !== index);
    setSliders(updatedSliders);
  };

  // Upload handler for banner/video
  const handleUpload = async (index, type, file, youtubeUrl = "") => {
    dispatch(uploadMedia({ folderName: "slider", file, youtubeUrl }))
      .unwrap()
      .then((res) => {
        const updatedSliders = [...sliders];

        if (type === "banner") {
          // clear video if banner is chosen
          updatedSliders[index].video = "";
        } else if (type === "video") {
          // clear banner if video is chosen
          updatedSliders[index].banner = "";
        }

        updatedSliders[index][type] = res.data; // server returns URL or YouTube link
        setSliders(updatedSliders);
        dispatch(resetUpload());
      })
      .catch((err) => console.error("Upload failed:", err));
  };

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
        setListForm((prev) => ({
          ...prev,
          banner: res.data, // backend returns image URL/path
        }));
        dispatch(resetUpload());
      })
      .catch((err) => console.error("Upload failed:", err));
  };
  // Submit all sliders
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { sliders }; // plain JSON array
    dispatch(postHomeSlider(payload));
  };

   const handleSubmitRwo = (e) => {
    e.preventDefault();
    dispatch(updateWhoWeAre(whoWeAre));
  };

   const handleSubmitCounter = (e) => {
    e.preventDefault();
    dispatch(updateHomeCounter(homeCounterData));
  };

   const handleSubmitWhyChoose = (e) => {
    e.preventDefault();
    dispatch(updateWhyChoose(whyChooseData));
  };

  return (
    <DashboardRap>
      <div className="slider">
        <div onClick={handleOpenSliderDrop} className="slider-upper">
          <h2>Update Home Slider</h2>
        </div>
        {openSliderDrop && (
          <form onSubmit={handleSubmit}>
            {sliders.map((slider, index) => (
              <div key={index} className="slider-group">
                <label>
                  Slider title:
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    value={slider.title}
                    onChange={(e) => handleChange(index, e)}
                  />
                </label>
                <label>
                  Slider overview:
                  <input
                    type="text"
                    name="subtitle"
                    placeholder="Enter overview"
                    value={slider.subtitle}
                    onChange={(e) => handleChange(index, e)}
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
                  {openVideoDrop && (
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

                <button
                  className="remove-btn"
                  type="button"
                  onClick={() => handleRemoveSlider(index)}
                >
                  <Icon
                    className="icon"
                    width="40px"
                    height="40px"
                    icon="wpf:delete"
                    color="red"
                  />
                </button>
              </div>
            ))}
            <div className="btns">
              <button className="btn-1" type="button" onClick={handleAddSlider}>
                ➕ Add Slider
              </button>
              <button className="btn-2" type="submit" disabled={uploading}>
                {sliderloading ? "Submitting..." : "✅ Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
      <div className="slider">
        <div onClick={handleOpenWhoDrop} className="slider-upper">
          <h2>Update Who We Are Section</h2>
        </div>
        {openWhoWeAreDrop && (
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
                Subtitle:
                <input
                  type="text"
                  name="subtitle"
                  placeholder="Enter Subtitle"
                  value={whoWeAre.subtitle}
                  onChange={(e) =>
                    setWhoWeAre({ ...whoWeAre, subtitle: e.target.value })
                  }
                />
              </label>
              <label>
                Overview:
                <input
                  type="text"
                  name="overview"
                  placeholder="Enter Overview"
                  value={whoWeAre.overview}
                  onChange={(e) =>
                    setWhoWeAre({ ...whoWeAre, overview: e.target.value })
                  }
                />
              </label>
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

                {whoWeAre.banner && (
                  <img
                    src={`http://localhost:5000${whoWeAre.banner}`}
                    alt="banner"
                    className="preview-image"
                  />
                )}
              </div>
               <div className="btns">
              <button onClick={handleSubmitRwo} className="btn-2" type="submit" disabled={uploading}>
                {whoLoading ? "Submitting..." : "✅ Submit"}
              </button>
              </div>
            </div>
          </form>
        )}
      </div>
       <div className="slider">
        <div onClick={handleDocumnetDrop} className="slider-upper">
          <h2>Update Documents Section</h2>
        </div>
        {openDocumentDrop && (
          <>
         {/* Heading Form */}
      <div className="slider-group">
        <h3>Heading</h3>
        <input
          type="text"
          placeholder="Heading Title"
          value={headingForm.title}
          onChange={(e) =>
            setHeadingForm({ ...headingForm, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Heading Subtitle"
          value={headingForm.subtitle}
          onChange={(e) =>
            setHeadingForm({ ...headingForm, subtitle: e.target.value })
          }
        />
         <div className="btns">
        <button className="btn-2" onClick={handleHeadingSubmit}>Save Heading</button>
        </div>
      </div>

      {/* Document Form */}
      <form>
      <div className="slider-group">
        <h3>Add Document</h3>
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
         <div className="btns">
        <button className="btn-2" onClick={handleListSubmit}>Save Document</button>
        </div>
      </div>
</form>
     
          </>
        )}
      </div>
       <div className="slider">
        <div onClick={handleCounterDrop} className="slider-upper">
          <h2>Update Counter Section</h2>
        </div>
        {openCounterDrop && (
          <>
      

      {/* Counter Form */}
      <form>
      <div className="slider-group">
        <input
          type="text"
          placeholder=" Title"
          value={homeCounterData.title}
          onChange={(e) =>
            setHomeCounterData({ ...homeCounterData, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder=" Subtitle"
          value={homeCounterData.subtitle}
          onChange={(e) =>
            setHomeCounterData({ ...homeCounterData, subtitle: e.target.value })
          }
        />
        <input
          type="number"
          placeholder=" Project Done Count"
          value={homeCounterData.projectDone}
          onChange={(e) =>
            setHomeCounterData({ ...homeCounterData, projectDone: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Years of Experience"
          value={homeCounterData.yearsOfExperience}
          onChange={(e) =>
            setHomeCounterData({ ...homeCounterData, yearsOfExperience: e.target.value })
          }
        />
         <input
          type="number"
          placeholder="Number of award worn"
          value={homeCounterData.awardWinning}
          onChange={(e) =>
            setHomeCounterData({ ...homeCounterData, awardWinning: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Number of Customers Satisfied"
          value={homeCounterData.satisfiedCustomers}
          onChange={(e) =>
            setHomeCounterData({ ...homeCounterData, satisfiedCustomers: e.target.value })
          }
        />
       

      
         <div className="btns">
        <button className="btn-2" onClick={handleSubmitCounter}>Save Counter</button>
        </div>
      </div>
</form>
     
          </>
        )}
      </div>
 <div className="slider">
        <div onClick={handleWhyChooseDrop} className="slider-upper">
          <h2>Update Why Choose Us Section</h2>
        </div>
        {openWhyChooseDrop && (
          <>
      

      {/* Counter Form */}
      <form>
      <div className="slider-group">
        <input
          type="text"
          placeholder=" Title One"
          value={whyChooseData.titleOne}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, titleOne: e.target.value })
          }
        />
        <textarea
          type="text"
          placeholder="Content One"
          value={whyChooseData.subtitleOne}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, subtitleOne: e.target.value })
          }
        />
        <input
          type="text"
          placeholder=" Title Two"
          value={whyChooseData.titleTwo}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, titleTwo: e.target.value })
          }
        />
        <textarea
          type="text"
          placeholder="Content Two"
          value={whyChooseData.subtitleTwo}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, subtitleTwo: e.target.value })
          }
        />
        <input
          type="text"
          placeholder=" Title Three"
          value={whyChooseData.titleThree}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, titleThree: e.target.value })
          }
        />
        <textarea
          type="text"
          placeholder="Content Three"
          value={whyChooseData.subtitleThree}
          onChange={(e) =>
            setWhyChooseData({ ...whyChooseData, subtitleThree: e.target.value })
          }
        />
     
       

      
         <div className="btns">
        <button className="btn-2" onClick={handleSubmitWhyChoose}>Save Why Choose Us</button>
        </div>
      </div>
</form>
     
          </>
        )}
      </div>

       <div className="slider">
        <div onClick={handleFeedbackDrop} className="slider-upper">
          <h2>Update Customer Feedback Section</h2>
        </div>
        {openFeedBackDrop && (
          <>
         {/* Heading Form */}
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
          placeholder="Heading Main Title"
          value={headingTesti.mainTitle}
          onChange={(e) =>
            setHeadingTesti({ ...headingTesti, mainTitle: e.target.value })
          }
        />
         <div className="btns">
        <button className="btn-2" onClick={handleHeadingSubmitTesti}>Save Heading</button>
        </div>
      </div>

      {/* Document Form */}
      <form>
      <div className="slider-group">
        <h3>Add Customer Feedback</h3>
        <input
          type="text"
          placeholder="Customer Full Name"
          value={listTesti.name}
          onChange={(e) =>
            setListTesti({ ...listTesti, name: e.target.value })
          }
        />
       
        <textarea
          placeholder="Enter Feedback"
          value={listTesti.content}
          onChange={(e) =>
            setListTesti({ ...listTesti, content: e.target.value })
          }
        />
        
       

         
         <div className="btns">
        <button className="btn-2" onClick={handleListSubmitTesti}>Save Document</button>
        </div>
      </div>
</form>
     
          </>
        )}
      </div>


<div>
      {slider ? (
        <div className="dropdown-container">
          <div className="successPop">
            <p></p>
            <button onClick={() => resetSlider()}>Close</button>
          </div>
        </div>
      ): ""}
       {whoData ? (
        <div className="dropdown-container">
          <div className="successPop">
            <p>Who we are updated successfully</p>
            <button onClick={() => dispatch(resetWhoWeAre())}>Close</button>
          </div>
        </div>
      ): ""}
      </div>
    </DashboardRap>
  );
};

export default SliderForm;
