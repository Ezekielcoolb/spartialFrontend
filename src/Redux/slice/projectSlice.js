// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/project";







export const updateHomeProjectHeadings = createAsyncThunk(
  "testimony/updateHomeProjectHeadings",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/auth/project/projects/heading`,
        payload
      );
      return res.data; // returns {headings, lists}
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

export const addToProjectList = createAsyncThunk(
  "testimony/addToProjectList",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/auth/project/projects/lists`,
        payload
      );
      return res.data; // returns {headings, lists}
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);


export const updateSpecificProject = createAsyncThunk(
  "Testimony/updateSpecificProject",
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
export const deleteSpecificProject = createAsyncThunk(
  "Testimony/deleteSpecificProject",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${API_URL}/user/auth/project/delete/projects/${id}`
      );
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Delete failed");
    }
  }
);



const projectSlice = createSlice({
  name: "users",
  initialState: {
    sliderloading: false,
    loading: false,
   
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
    },
  
  }, // No synchronous reducers
  extraReducers: (builder) => {


    

    builder
      .addCase(updateHomeProjectHeadings.pending, (state) => {
        state.testiHeadloading = true;
      })
      .addCase(updateHomeProjectHeadings.fulfilled, (state, action) => {
        state.testiHeadloading = false;
        state.testiHeading = action.payload;
      })
      .addCase(updateHomeProjectHeadings.rejected, (state, action) => {
        state.testiHeadloading = false;
        state.error = action.payload;
      });

    builder
      .addCase(addToProjectList.pending, (state) => {
        state.testiListloading = true;
      })
      .addCase(addToProjectList.fulfilled, (state, action) => {
        state.testiListloading = false;
        state.testiList = action.payload;
      })
      .addCase(addToProjectList.rejected, (state, action) => {
        state.testiListloading = false;
        state.error = action.payload;
      });

      builder
      .addCase(updateSpecificProject.pending, (state) => {
        state.sliderloading = true;

        state.error = null;
        state.sliderUpade = null;
      })
      .addCase(updateSpecificProject.fulfilled, (state, action) => {
        state.sliderloading = false;

        state.sliderUpade = action.payload;
      })
      .addCase(updateSpecificProject.rejected, (state, action) => {
        state.sliderloading = false;
        state.error = action.payload.message;
      });

       builder
      .addCase(deleteSpecificProject.pending, (state) => {
        state.sliderloading = true;

        state.error = null;
        state.sliderDelete = null;
      })
      .addCase(deleteSpecificProject.fulfilled, (state, action) => {
        state.sliderloading = false;

        state.sliderDelete = action.payload;
      })
      .addCase(deleteSpecificProject.rejected, (state, action) => {
        state.sliderloading = false;
        state.error = action.payload.message;
      });

  },
});

export const { resetSlider } = projectSlice.actions;
export default projectSlice.reducer;
