import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/adminAuth';

// Login Thunk
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      return response.data; // Success: return the response data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed'); // Capture the error message
    }
  }
);


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    superUser: null,
    adminToken: null,
    success: null,
    message: null,
    userLoading: false,
    csoSuccess: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    resetState: (state) => {
      state.loading = false;
      state.success = null;
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
     .addCase(login.pending, (state) => {
            state.userLoading = true;
    
            state.error = null;
            state.user = null;
          })
      .addCase(login.fulfilled, (state, action) => {
        state.userLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
          state.userLoading = false;
        state.error = action.payload;
        state.message = action.payload
      })
     

    }
});

export const { logout, resetState, clearMessage  } = authSlice.actions;
export default authSlice.reducer;
