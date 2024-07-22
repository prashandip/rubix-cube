import { createSlice } from "@reduxjs/toolkit";

const blue = "_BLUE",
  green = "_GREEN",
  orange = "_ORANGE",
  red = "_RED",
  yellow = "_YELLOW",
  white = "_WHITE";
export const FACE_VALUE = {
  blue: blue,
  green: green,
  orange: orange,
  red: red,
  yellow: yellow,
  white: white,
};
const initialPositions = [];
const initialRotations = [];
const initialOrientations = [];
for (let i = 0; i < 27; i++) {
  initialPositions.push({
    id: i,
    position: i,
  });
  initialRotations.push({
    id: i,
    rotation: { x: 0, y: 0, z: 0 },
  });
  initialOrientations.push({
    id: i,
    orientation: {
      front: blue,
      back: green,
      left: orange,
      right: red,
      top: yellow,
      bottom: white,
    },
  });
}

export const cubeletSlice = createSlice({
  name: "cublet",
  initialState: {
    positions: initialPositions,
    rotations: initialRotations,
    orientations: initialOrientations,
  },
  reducers: {
    setPositions: (state, action) => {
      state.positions = action.payload;
    },
    setRotations: (state, action) => {
      state.rotations = action.payload;
    },
    setOrientations: (state, action) => {
      state.orientations = action.payload;
    },
  },
});

export const { setPositions, setRotations, setOrientations } =
  cubeletSlice.actions;

export default cubeletSlice.reducer;
