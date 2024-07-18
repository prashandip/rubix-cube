import { createSlice } from "@reduxjs/toolkit";

export const cubeSlice = createSlice({
  name: "cube",
  initialState: {
    cubeRotateX: -30,
    cubeRotateY: -30,
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

export const { setCubeRotate, setCubeRotateY } = cubeSlice.actions;

export default cubeSlice.reducer;
