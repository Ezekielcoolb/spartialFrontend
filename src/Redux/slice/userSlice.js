// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://spatial-backend.onrender.com/api/home";


// const API_URL = "http://localhost:5000/api/home";



export const postHomeSlider = createAsyncThunk(
  "home/postHomeSlider",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/auth/slider`,
        payload, // <-- plain JSON
        { headers: { "Content-Type": "application/json" } }
      );

      return { data: res.data.data };
    } catch (err) {
      return rejectWithValue(err.response?.data || "Upload failed");
    }
  }
);

export const updateSliderHome = createAsyncThunk(
  "slider/updateSlider",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/user/auth/update/slider/${id}`, data);
      return response.data.slider; // return updated slider object
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update slider"
      );
    }
  }
);

// Async thunk to delete slider
export const deleteSliderHome = createAsyncThunk(
  "slider/deleteSlider",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${API_URL}/user/auth/delete/slider/${id}`
      );
      return { id, slider: response.data.slider };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Delete failed");
    }
  }
);




export const updateWhoWeAre = createAsyncThunk(
  "whoWeAre/updateWhoWeAre",
  async (whoWeAreData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/user/auth/who-we-are`,
        whoWeAreData
      );
      return data.data; // returns updated object
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

export const updateHomeCounter = createAsyncThunk(
  "HomeCounter/updateHomeCounter",
  async (homeCounterData, { rejectWithValue }) => {
    try {
      const  data  = await axios.post(
        `${API_URL}/user/auth/home-counter`,
        homeCounterData
      );
      return data.data; // returns updated object
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

export const updateWhyChoose = createAsyncThunk(
  "whyChoose/updateWhyChoose",
  async (whyChooseData, { rejectWithValue }) => {
    try {
      const  data  = await axios.post(
        `${API_URL}/user/auth/why-choose-us`,
        whyChooseData
      );
      return data.data; // returns updated object
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

export const updateEnquirySection = createAsyncThunk(
  "EnquirySection/updateEnquirySection",
  async (whyChooseData, { rejectWithValue }) => {
    try {
      const  data  = await axios.post(
        `${API_URL}/user/auth/enquiries`,
        whyChooseData
      );
      return data.data; // returns updated object
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

export const postDocumentsHeading = createAsyncThunk(
  "documents/postDocumentsHeading",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/auth/documents-two/headings`,
        payload
      );
      return res.data; // returns {headings, lists}
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

export const postDocumentsList = createAsyncThunk(
  "documents/postDocumentsList",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/auth/documents-two/lists`,
        payload
      );
      return res.data; // returns {headings, lists}
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

export const updateDocumentHome = createAsyncThunk(
  "Document/updateDocument",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/user/auth/update/documentsTwo/${id}`, data);
      return response.data; // return updated slider object
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update slider"
      );
    }
  }
);

// Async thunk to delete slider
export const deleteDocumentHome = createAsyncThunk(
  "Document/deleteDocument",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${API_URL}/user/auth/delete/documentsTwo/${id}`
      );
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Delete failed");
    }
  }
);


export const postTestimonyHeading = createAsyncThunk(
  "testimony/postTestimonyHeading",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/auth/testimony-two/headings`,
        payload
      );
      return res.data; // returns {headings, lists}
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

export const postTestimonyList = createAsyncThunk(
  "testimony/postTestimonyList",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/auth/testimony-two/lists`,
        payload
      );
      return res.data; // returns {headings, lists}
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);


export const updateTestimonyHome = createAsyncThunk(
  "Testimony/updateTestimony",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/user/auth/update/testimonyTwo/${id}`, data);
      return response.data; // return updated slider object
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update slider"
      );
    }
  }
);

// Async thunk to delete slider
export const deleteTestimonyHome = createAsyncThunk(
  "Testimony/deleteTestimony",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${API_URL}/user/auth/delete/testimonyTwo/${id}`
      );
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Delete failed");
    }
  }
);

export const submitContactForm = createAsyncThunk(
  "contact/submit",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://admin.abrigo-llc.com/api/request/contact-us",
        formData
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    sliderloading: false,
    loading: false,
    whoLoading: false,
    whoData: null,
    headings: null,
    lists: null,
    docloading: false,
    chooseUsLoading: false,
    counterLoading: false,
    docListloading: false,
    counterData: null,
    chooseUsData: null,
    testiHeading: null,
    testiList: null,
    enquiryLoading: false,
    enquiryData: null,
    
    testiListloading: false,
    testiHeadloading: false,
    docitems: null,
    slider: null,
    sliderUpade: null,
    sliderDelete: null,
    error: null,
  },
  reducers: {
    resetSlider: (state) => {
      state.sliderUpade = null;
       state.slider = null;
       state.sliderDelete = null
        state.lists = null
         state.headings = null
         state.testiHeading = null
         state.testiList = null
    },
    resetWhoWeAre: (state) => {
      state.whoData = null;
       state.counterData = null;
        state.chooseUsData = null;
          state.enquiryData = null;
       
      
    },
  }, // No synchronous reducers
  extraReducers: (builder) => {
    builder
      .addCase(postHomeSlider.pending, (state) => {
        state.sliderloading = true;

        state.error = null;
        state.sliderUpade = null;
      })
      .addCase(postHomeSlider.fulfilled, (state, action) => {
        state.sliderloading = false;

        state.sliderUpade = action.payload;
      })
      .addCase(postHomeSlider.rejected, (state, action) => {
        state.sliderloading = false;
        state.error = action.payload.message;
      });

 builder
      .addCase(updateSliderHome.pending, (state) => {
        state.sliderloading = true;

        state.error = null;
        state.slider = null;
      })
      .addCase(updateSliderHome.fulfilled, (state, action) => {
        state.sliderloading = false;

        state.sliderUpade = action.payload;
      })
      .addCase(updateSliderHome.rejected, (state, action) => {
        state.sliderloading = false;
        state.error = action.payload.message;
      });

       builder
      .addCase(deleteSliderHome.pending, (state) => {
        state.sliderloading = true;

        state.error = null;
        state.sliderDelete = null;
      })
      .addCase(deleteSliderHome.fulfilled, (state, action) => {
        state.sliderloading = false;

        state.sliderDelete = action.payload;
      })
      .addCase(deleteSliderHome.rejected, (state, action) => {
        state.sliderloading = false;
        state.error = action.payload.message;
      });



    builder
      // ✅ Update
      .addCase(updateWhoWeAre.pending, (state) => {
        state.whoLoading = true;
      })
      .addCase(updateWhoWeAre.fulfilled, (state, action) => {
        state.whoLoading = false;
        state.whoData = action.payload;
      })
      .addCase(updateWhoWeAre.rejected, (state, action) => {
        state.whoLoading = false;
        state.error = action.payload;
      });

    builder
      // ✅ Update
      .addCase(updateHomeCounter.pending, (state) => {
        state.counterLoading = true;
      })
      .addCase(updateHomeCounter.fulfilled, (state, action) => {
        state.counterLoading = false;
        state.counterData = action.payload;
      })
      .addCase(updateHomeCounter.rejected, (state, action) => {
        state.counterLoading = false;
        state.error = action.payload;
      });

    builder
      // ✅ Update
      .addCase(updateWhyChoose.pending, (state) => {
        state.chooseUsLoading = true;
      })
      .addCase(updateWhyChoose.fulfilled, (state, action) => {
        state.chooseUsLoading = false;
        state.chooseUsData = action.payload;
      })
      .addCase(updateWhyChoose.rejected, (state, action) => {
        state.chooseUsLoading = false;
        state.error = action.payload;
      });

         builder
      // ✅ Update
      .addCase(updateEnquirySection.pending, (state) => {
        state.enquiryLoading = true;
      })
      .addCase(updateEnquirySection.fulfilled, (state, action) => {
        state.enquiryLoading = false;
        state.enquiryData = action.payload;
      })
      .addCase(updateEnquirySection.rejected, (state, action) => {
        state.enquiryLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(postDocumentsHeading.pending, (state) => {
        state.docloading = true;
      })
      .addCase(postDocumentsHeading.fulfilled, (state, action) => {
        state.docloading = false;
        state.headings = action.payload;
      })
      .addCase(postDocumentsHeading.rejected, (state, action) => {
        state.docloading = false;
        state.error = action.payload;
      });

    builder
      .addCase(postDocumentsList.pending, (state) => {
        state.docListloading = true;
      })
      .addCase(postDocumentsList.fulfilled, (state, action) => {
        state.docListloading = false;
        state.lists = action.payload;
      })
      .addCase(postDocumentsList.rejected, (state, action) => {
        state.docListloading = false;
        state.error = action.payload;
      });

      builder
      .addCase(updateDocumentHome.pending, (state) => {
        state.sliderloading = true;

        state.error = null;
        state.slider = null;
      })
      .addCase(updateDocumentHome.fulfilled, (state, action) => {
        state.sliderloading = false;

        state.sliderUpade = action.payload;
      })
      .addCase(updateDocumentHome.rejected, (state, action) => {
        state.sliderloading = false;
        state.error = action.payload.message;
      });

       builder
      .addCase(deleteDocumentHome.pending, (state) => {
        state.sliderloading = true;

        state.error = null;
        state.sliderDelete = null;
      })
      .addCase(deleteDocumentHome.fulfilled, (state, action) => {
        state.sliderloading = false;

        state.sliderDelete = action.payload;
      })
      .addCase(deleteDocumentHome.rejected, (state, action) => {
        state.sliderloading = false;
        state.error = action.payload.message;
      });


    builder
      .addCase(postTestimonyHeading.pending, (state) => {
        state.testiHeadloading = true;
      })
      .addCase(postTestimonyHeading.fulfilled, (state, action) => {
        state.testiHeadloading = false;
        state.testiHeading = action.payload;
      })
      .addCase(postTestimonyHeading.rejected, (state, action) => {
        state.testiHeadloading = false;
        state.error = action.payload;
      });

    builder
      .addCase(postTestimonyList.pending, (state) => {
        state.testiListloading = true;
      })
      .addCase(postTestimonyList.fulfilled, (state, action) => {
        state.testiListloading = false;
        state.testiList = action.payload;
      })
      .addCase(postTestimonyList.rejected, (state, action) => {
        state.testiListloading = false;
        state.error = action.payload;
      });

      builder
      .addCase(updateTestimonyHome.pending, (state) => {
        state.sliderloading = true;

        state.error = null;
        state.slider = null;
      })
      .addCase(updateTestimonyHome.fulfilled, (state, action) => {
        state.sliderloading = false;

        state.sliderUpade = action.payload;
      })
      .addCase(updateTestimonyHome.rejected, (state, action) => {
        state.sliderloading = false;
        state.error = action.payload.message;
      });

       builder
      .addCase(deleteTestimonyHome.pending, (state) => {
        state.sliderloading = true;

        state.error = null;
        state.sliderDelete = null;
      })
      .addCase(deleteTestimonyHome.fulfilled, (state, action) => {
        state.sliderloading = false;

        state.sliderDelete = action.payload;
      })
      .addCase(deleteTestimonyHome.rejected, (state, action) => {
        state.sliderloading = false;
        state.error = action.payload.message;
      });

  },
});

export const { resetSlider, resetWhoWeAre } = userSlice.actions;
export default userSlice.reducer;
