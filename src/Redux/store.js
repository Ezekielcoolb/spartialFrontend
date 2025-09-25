import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./slice/homeSlice"; 
import appReducer from "./slice/appSlice";
import userReducer from "./slice/userSlice";
import uploadReducer from "./slice/uploadSlice";
import userAboutReducer from "./slice/aboutUserSlice"
import projectReducer from "./slice/projectSlice"
import serviceReducer from "./slice/serviceSlice"

const store = configureStore({
  reducer: {
    content: contentReducer, 
   app: appReducer,
    users: userReducer,
    upload: uploadReducer,
    userAbout: userAboutReducer,
    project: projectReducer,
    service: serviceReducer,
  },
  
});

export default store;
