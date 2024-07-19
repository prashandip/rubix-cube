import { createSlice } from "@reduxjs/toolkit";

export const cubeSlice = createSlice({
  name: "cube",
  initialState: {
    cubeRotateX: -20,
    cubeRotateY: -20,
  },
  reducers: {
    setCubeRotateX: (state, action) => {
      state.cubeRotateX = action.payload;
    },
    setCubeRotateY: (state, action) => {
      state.cubeRotateY = action.payload;
    },
  },
});

export const { setCubeRotateX, setCubeRotateY } = cubeSlice.actions;

export default cubeSlice.reducer;
