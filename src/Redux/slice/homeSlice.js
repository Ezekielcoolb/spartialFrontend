// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const API_URL = "https://spatial-backend.onrender.com/api/home"
const API_URL_TWO = "https://spatial-backend.onrender.com/api/general"
const BASE_URL = "https://spatial-backend.onrender.com/api/about"
const BASE_URL_NEW = "https://spatial-backend.onrender.com/api/project"
const BASE_URL_TWO = "https://spatial-backend.onrender.com/api/service"



// const API_URL = "http://localhost:5000/api/home"
// const API_URL_TWO = "http://localhost:5000/api/general"
// const BASE_URL = "http://localhost:5000/api/about"
// const BASE_URL_NEW = "http://localhost:5000/api/project"
// const BASE_URL_TWO = "http://localhost:5000/api/service"
// Async thunk for fetching Home data
export const fetchHomepage = createAsyncThunk(
  "content/fetchFeatures",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/user/auth/all-home`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Home data:", error);
      return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
    }
  }
);


export const fetchForAllHomepage = createAsyncThunk(
  "content/fetchForAllHomepage",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/home-page/home`);
      return response.data;
    } catch (error) {
      console.error("Error fetching Home data:", error);
      return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
    }
  }
);

export const fetchObjectpage = createAsyncThunk(
    "content/fetchOjectpage",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${BASE_URL}/user/auth/about/fetch-all-data`);
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
      }
    }
  );

  export const fetchProjectpage = createAsyncThunk(
    "content/fetchProjectpage",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${BASE_URL_NEW}/user/auth/projects/all-project`);
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
      }
    }
  );

    export const fetchProjectDetails = createAsyncThunk(
  "fetchProjectDetails/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL_NEW}/user/auth/projects/single-project/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);


 export const fetchServicepage = createAsyncThunk(
    "content/fetchServicepage",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${BASE_URL_TWO}/user/auth/services/all-services/service`);
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
      }
    }
  );

    export const fetchServiceDetails = createAsyncThunk(
  "fetchServiceDetails/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL_TWO}/user/auth/services/specific-service/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

  export const fetchGeneralpage = createAsyncThunk(
    "content/fetchGeneralpage",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${API_URL_TWO}/general-setting`);
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
      }
    }
  );

  export const fetchContactpage = createAsyncThunk(
    "content/fetchContactpage",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get("https://admin.abrigo-llc.com/api/request/contact-us");
        return response.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
        return rejectWithValue(error.response?.data || "An error occurred while fetching Home data");
      }
    }
  );

 




export const submitContactForm = createAsyncThunk(
  'contact/submit',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://admin.abrigo-llc.com/api/request/contact-us',
        formData
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const homeSlice = createSlice({
  name: "features",
  initialState: {
    data: null,
    homeObject: null,
    projectObject: null,
    contactObject: null,
    aboutObject: null,
    contactloading: false,
    projectDetails: null,
    generalObject: null,
    successContact: null,
    serviceDetails: null,
    serviceObject: null,
    aboutloading: false,
    homeData: null,
    loading: false,
    submitloading: false,
    error: null,
  },
  reducers: {

    resetMessageContact: (state) => {
      state.successContact = null;
      state.errorContactMessage = null;
    }
  }, // No synchronous reducers
  extraReducers: (builder) => {
    builder
      // Fetch Home Data
      .addCase(fetchHomepage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomepage.fulfilled, (state, action) => {
        state.loading = false;
        state.homeObject = action.payload;
      })
      .addCase(fetchHomepage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


        builder
      // Fetch Home Data
      .addCase(fetchForAllHomepage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchForAllHomepage.fulfilled, (state, action) => {
        state.loading = false;
        state.homeData = action.payload;
      })
      .addCase(fetchForAllHomepage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });


  builder
      .addCase(submitContactForm.pending, (state) => {
        state.submitloading = true;
        state.success = false;
        state.errorContactMessage = null;
         state.successContact = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.submitloading = false;
        state.success = true;
        state.successContact = action.payload.data
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.submitloading = false;
        state.errorContactMessage = action.payload.message || 'Something went wrong';
      });
      
builder
         .addCase(fetchServiceDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServiceDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.serviceDetails = action.payload;
      })
      .addCase(fetchServiceDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

builder
         .addCase(fetchServicepage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServicepage.fulfilled, (state, action) => {
        state.loading = false;
        state.serviceObject = action.payload;
      })
      .addCase(fetchServicepage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

builder
         .addCase(fetchProjectpage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectpage.fulfilled, (state, action) => {
        state.loading = false;
        state.projectObject = action.payload;
      })
      .addCase(fetchProjectpage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

builder
         .addCase(fetchProjectDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjectDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.projectDetails = action.payload;
      })
      .addCase(fetchProjectDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

      builder
         .addCase(fetchGeneralpage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGeneralpage.fulfilled, (state, action) => {
        state.loading = false;
        state.generalObject = action.payload;
      })
      .addCase(fetchGeneralpage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

   
      builder
      // Fetch Home Data
      .addCase(fetchContactpage.pending, (state) => {
        state.contactloading = true;
        state.error = null;
      })
      .addCase(fetchContactpage.fulfilled, (state, action) => {
        state.contactloading = false;
        state.contactObject = action.payload;
      })
      .addCase(fetchContactpage.rejected, (state, action) => {
        state.contactloading = false;
        state.error = action.payload;
      });

      builder
      // Fetch Home Data
      .addCase(fetchObjectpage.pending, (state) => {
        state.aboutloading = true;
        state.error = null;
      })
      .addCase(fetchObjectpage.fulfilled, (state, action) => {
        state.aboutloading = false;
        state.aboutObject = action.payload;
      })
      .addCase(fetchObjectpage.rejected, (state, action) => {
        state.aboutloading = false;
        state.error = action.payload;
      });

 

  },
});

export const {resetMessageContact } = homeSlice.actions;
export default homeSlice.reducer;
