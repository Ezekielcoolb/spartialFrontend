import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./slice/homeSlice"; 
import appReducer from "./slice/appSlice";
import userReducer from "./slice/userSlice";
import uploadReducer from "./slice/uploadSlice";

const store = configureStore({
  reducer: {
    content: contentReducer, 
   app: appReducer,
    users: userReducer,
    upload: uploadReducer,
  },
  
});

export default store;
