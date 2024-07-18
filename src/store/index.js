import { configureStore } from "@reduxjs/toolkit";
import cubeReducer from "./cubeSlice";
import cubeletReducer from "./cubeletSlice";

export default configureStore({
  reducer: {
    cube: cubeReducer,
    cubelet: cubeletReducer,
  },
});
