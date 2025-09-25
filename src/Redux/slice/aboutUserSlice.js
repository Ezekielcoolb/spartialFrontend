// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/about";

export const updateAboutusAbout = createAsyncThunk(
  "whoWeAre/updateAboutusAbout",
  async (whoWeAreData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/user/auth/about/aboutus`,
        whoWeAreData
      );
      return data.data; // returns updated object
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

export const updateCounterAbout = createAsyncThunk(
  "HomeCounter/updateCounterAbout",
  async (homeCounterData, { rejectWithValue }) => {
    try {
      const  data  = await axios.post(
        `${API_URL}/user/auth/about/counter`,
        homeCounterData
      );
      return data.data; // returns updated object
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);
export const updateMissionVisionAbout = createAsyncThunk(
  "whyChoose/updateMissionVisionAbout",
  async (whyChooseData, { rejectWithValue }) => {
    try {
      const  data  = await axios.post(
        `${API_URL}/user/auth/about/mission/vission`,
        whyChooseData
      );
      return data.data; // returns updated object
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);



export const updateTeamsHeadingAbout = createAsyncThunk(
  "testimony/updateTeamsHeadingAbout",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/auth/about/teams/heading`,
        payload
      );
      return res.data; // returns {headings, lists}
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

export const updateTeamListAbout = createAsyncThunk(
  "testimony/updateTeamListAbout",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/user/auth/about/teams/lists`,
        payload
      );
      return res.data; // returns {headings, lists}
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);


export const updateTeamMember = createAsyncThunk(
  "Testimony/updateTeamMember",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/user/auth/update/about/teams/${id}`, data);
      return response.data; // return updated slider object
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update slider"
      );
    }
  }
);

// Async thunk to delete slider
export const deleteTeamMember = createAsyncThunk(
  "Testimony/deleteTestimony",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${API_URL}/user/auth/about/delete/team/${id}`
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

const aboutUserSlice = createSlice({
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
       
      
    },
  }, // No synchronous reducers
  extraReducers: (builder) => {
   


    builder
      // ✅ Update
      .addCase(updateAboutusAbout.pending, (state) => {
        state.whoLoading = true;
      })
      .addCase(updateAboutusAbout.fulfilled, (state, action) => {
        state.whoLoading = false;
        state.whoData = action.payload;
      })
      .addCase(updateAboutusAbout.rejected, (state, action) => {
        state.whoLoading = false;
        state.error = action.payload;
      });

    builder
      // ✅ Update
      .addCase(updateCounterAbout.pending, (state) => {
        state.counterLoading = true;
      })
      .addCase(updateCounterAbout.fulfilled, (state, action) => {
        state.counterLoading = false;
        state.counterData = action.payload;
      })
      .addCase(updateCounterAbout.rejected, (state, action) => {
        state.counterLoading = false;
        state.error = action.payload;
      });

    builder
      // ✅ Update
      .addCase(updateMissionVisionAbout.pending, (state) => {
        state.chooseUsLoading = true;
      })
      .addCase(updateMissionVisionAbout.fulfilled, (state, action) => {
        state.chooseUsLoading = false;
        state.chooseUsData = action.payload;
      })
      .addCase(updateMissionVisionAbout.rejected, (state, action) => {
        state.chooseUsLoading = false;
        state.error = action.payload;
      });

    

    builder
      .addCase(updateTeamsHeadingAbout.pending, (state) => {
        state.testiHeadloading = true;
      })
      .addCase(updateTeamsHeadingAbout.fulfilled, (state, action) => {
        state.testiHeadloading = false;
        state.testiHeading = action.payload;
      })
      .addCase(updateTeamsHeadingAbout.rejected, (state, action) => {
        state.testiHeadloading = false;
        state.error = action.payload;
      });

    builder
      .addCase(updateTeamListAbout.pending, (state) => {
        state.testiListloading = true;
      })
      .addCase(updateTeamListAbout.fulfilled, (state, action) => {
        state.testiListloading = false;
        state.testiList = action.payload;
      })
      .addCase(updateTeamListAbout.rejected, (state, action) => {
        state.testiListloading = false;
        state.error = action.payload;
      });

      builder
      .addCase(updateTeamMember.pending, (state) => {
        state.sliderloading = true;

        state.error = null;
        state.slider = null;
      })
      .addCase(updateTeamMember.fulfilled, (state, action) => {
        state.sliderloading = false;

        state.sliderUpade = action.payload;
      })
      .addCase(updateTeamMember.rejected, (state, action) => {
        state.sliderloading = false;
        state.error = action.payload.message;
      });

       builder
      .addCase(deleteTeamMember.pending, (state) => {
        state.sliderloading = true;

        state.error = null;
        state.sliderDelete = null;
      })
      .addCase(deleteTeamMember.fulfilled, (state, action) => {
        state.sliderloading = false;

        state.sliderDelete = action.payload;
      })
      .addCase(deleteTeamMember.rejected, (state, action) => {
        state.sliderloading = false;
        state.error = action.payload.message;
      });

  },
});

export const { resetSlider, resetWhoWeAre } = aboutUserSlice.actions;
export default aboutUserSlice.reducer;
