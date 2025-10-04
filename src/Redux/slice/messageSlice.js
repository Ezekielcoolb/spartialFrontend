import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for your API
const API_URL = "http://localhost:5000/api/messages";

// --- Thunks (async actions) ---

// Fetch all messages
export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Error fetching messages");
    }
  }
);

// Add a new message
// export const addMessage = createAsyncThunk(
//   "messages/addMessage",
//   async (messageData, thunkAPI) => {
//     try {
//       const response = await axios.post(`${API_URL}/post-message`, messageData);
//       return response.data.data; // only return the new message
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response?.data || "Error adding message");
//     }
//   }
// );


export const addMessage = createAsyncThunk(
  'contact/submit',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/post-message`,
        formData
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Delete a message
export const deleteMessage = createAsyncThunk(
  "messages/deleteMessage",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Error deleting message");
    }
  }
);

// --- Slice ---
const messageSlice = createSlice({
  name: "messages",
  initialState: {
    items: [],
    loading: false,
    error: null,
    submitloading: false,
    successContact: null,
  },
  reducers: {
    resetSlider: (state) => {
       state.successContact = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch messages
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete message
      .addCase(deleteMessage.fulfilled, (state, action) => {
        state.items = state.items.filter((msg) => msg._id !== action.payload);
      })
      .addCase(deleteMessage.rejected, (state, action) => {
        state.error = action.payload;
      });

  builder
      .addCase(addMessage.pending, (state) => {
        state.submitloading = true;
        state.error = null;
         state.successContact = null;
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        state.submitloading = false;
        
        state.successContact = action.payload
      })
      .addCase(addMessage.rejected, (state, action) => {
        state.submitloading = false;
        state.error = action.payload || 'Something went wrong';
      });

  },
});
export const { resetSlider } = messageSlice.actions;
export default messageSlice.reducer;
