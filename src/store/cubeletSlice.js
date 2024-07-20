import { createSlice } from "@reduxjs/toolkit";

const front = "_BLUE",
  back = "_GREEN",
  left = "_ORANGE",
  right = "_RED",
  top = "_YELLOW",
  bottom = "_WHITE";
export const FACE_VALUE = {
  front: front,
  back: back,
  left: left,
  right: right,
  top: top,
  bottom: bottom,
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
      front: front,
      back: back,
      left: left,
      right: right,
      top: top,
      bottom: bottom,
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
