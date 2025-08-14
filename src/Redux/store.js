import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./slice/homeSlice"; 

const store = configureStore({
  reducer: {
    content: contentReducer, 
   
  },
  
});

export default store;
