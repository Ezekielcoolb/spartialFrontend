// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://spatial-backend.onrender.com/api/service";
const API_URL_TWO = "https://spatial-backend.onrender.com/api/general";

// const API_URL = "http://localhost:5000/api/service";
// const API_URL_TWO = "http://localhost:5000/api/general";




export const updateHomeServiceHeadings = createAsyncThunk(
  "testimony/updateHomeServiceHeadings",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/auth/service/service/heading`,
        payload
      );
      return res.data; // returns {headings, lists}
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

export const addToServiceList = createAsyncThunk(
  "testimony/addToServiceList",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/auth/service/service/lists`,
        payload
      );
      return res.data; // returns {headings, lists}
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);


export const updateSpecificService = createAsyncThunk(
  "Testimony/updateSpecificService",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/user/auth/update/project/projects/${id}`, data);
      return response.data; // return updated slider object
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update slider"
      );
    }
  }
);

// Async thunk to delete slider
export const deleteSpecificService = createAsyncThunk(
  "Testimony/deleteSpecificService",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${API_URL}/user/auth/service/delete/services/${id}`
      );
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Delete failed");
    }
  }
);


export const postWebGeneralSetting = createAsyncThunk(
  "testimony/postWebGeneralSetting",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL_TWO}/post-general-setting`,
        payload
      );
      return res.data; // returns {headings, lists}
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);



const serviceSlice = createSlice({
  name: "users",
  initialState: {
    sliderloading: false,
    loading: false,
   generalPost: null,
   generalloading: false,
    testiHeading: null,
    testiList: null,
    testiListloading: false,
    testiHeadloading: false,

    sliderUpade: null,
    sliderDelete: null,
    error: null,
  },
  reducers: {
    resetSlider: (state) => {
      state.sliderUpade = null;
      
       state.sliderDelete = null
       
         state.testiHeading = null
         state.testiList = null
         state.generalPost = null
    },
  
  }, // No synchronous reducers
  extraReducers: (builder) => {


    

    builder
      .addCase(updateHomeServiceHeadings.pending, (state) => {
        state.testiHeadloading = true;
      })
      .addCase(updateHomeServiceHeadings.fulfilled, (state, action) => {
        state.testiHeadloading = false;
        state.testiHeading = action.payload;
      })
      .addCase(updateHomeServiceHeadings.rejected, (state, action) => {
        state.testiHeadloading = false;
        state.error = action.payload;
      });

    builder
      .addCase(addToServiceList.pending, (state) => {
        state.testiListloading = true;
      })
      .addCase(addToServiceList.fulfilled, (state, action) => {
        state.testiListloading = false;
        state.testiList = action.payload;
      })
      .addCase(addToServiceList.rejected, (state, action) => {
        state.testiListloading = false;
        state.error = action.payload;
      });

         builder
      .addCase(postWebGeneralSetting.pending, (state) => {
        state.generalloading = true;
      })
      .addCase(postWebGeneralSetting.fulfilled, (state, action) => {
        state.generalloading = false;
        state.generalPost = action.payload;
      })
      .addCase(postWebGeneralSetting.rejected, (state, action) => {
        state.generalloading = false;
        state.error = action.payload;
      });

      builder
      .addCase(updateSpecificService.pending, (state) => {
        state.sliderloading = true;

        state.error = null;
        state.sliderUpade = null;
      })
      .addCase(updateSpecificService.fulfilled, (state, action) => {
        state.sliderloading = false;

        state.sliderUpade = action.payload;
      })
      .addCase(updateSpecificService.rejected, (state, action) => {
        state.sliderloading = false;
        state.error = action.payload.message;
      });

       builder
      .addCase(deleteSpecificService.pending, (state) => {
        state.sliderloading = true;

        state.error = null;
        state.sliderDelete = null;
      })
      .addCase(deleteSpecificService.fulfilled, (state, action) => {
        state.sliderloading = false;

        state.sliderDelete = action.payload;
      })
      .addCase(deleteSpecificService.rejected, (state, action) => {
        state.sliderloading = false;
        state.error = action.payload.message;
      });

  },
});

export const { resetSlider } = serviceSlice.actions;
export default serviceSlice.reducer;
