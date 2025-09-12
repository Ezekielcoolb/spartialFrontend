import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSideBar: true,
 
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
 
    setOpenSideBar: (state) => {
      state.openSideBar = !state.openSideBar;
    },
     setOpenSideBarTwo: (state) => {
      state.openSideBar = true;
    },
    
  },
});
export const { setOpenSideBar, setOpenSideBarTwo} = appSlice.actions;
export default appSlice.reducer;

