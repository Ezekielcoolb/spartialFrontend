import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk for uploading file or YouTube link
export const uploadMedia = createAsyncThunk(
  "upload/uploadMedia",
  async ({ folderName, file, youtubeUrl }, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      if (file) {
        formData.append("file", file);
      }

      if (youtubeUrl) {
        formData.append("youtubeUrl", youtubeUrl);
      }

      const res = await axios.post(
        `https://spatial-backend.onrender.com/api/upload/${folderName}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Upload failed");
    }
  }
);

const uploadSlice = createSlice({
  name: "upload",
  initialState: {
    loading: false,
    error: null,
    uploadedData: null, // response from server (file URL or YouTube URL)
  },
  reducers: {
    resetUpload: (state) => {
      state.loading = false;
      state.error = null;
      state.uploadedData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadMedia.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.uploadedData = action.payload;
      })
      .addCase(uploadMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetUpload } = uploadSlice.actions;
export default uploadSlice.reducer;
