import { FACE_VALUE } from "./../store/cubeletSlice";
const blue = FACE_VALUE.blue,
  green = FACE_VALUE.green,
  orange = FACE_VALUE.orange,
  red = FACE_VALUE.red,
  yellow = FACE_VALUE.yellow,
  white = FACE_VALUE.white;

export const getNewRotationsF = (
  positions,
  rotations,
  orientations,
  isClockwise
) => {
  const newRotations = [];
  rotations.forEach((rotation) => {
    if (positions.find(({ id }) => id === rotation.id).position < 9) {
      const orientation = orientations.find(({ id }) => id === rotation.id);
      const front = orientation.orientation.front;
      const top = orientation.orientation.top;
      const isBlue = front === blue,
        isGreen = front === green,
        isOrange = front === orange,
        isRed = front === red,
        isYellow = front === yellow,
        isWhite = front === white;
      if (isBlue || isGreen) {
        newRotations.push({
          id: rotation.id,
          rotation: {
            x: rotation.rotation.x,
            y: rotation.rotation.y,
            z:
              rotation.rotation.z +
              (isClockwise && isBlue
                ? 90
                : isClockwise && isGreen
                ? -90
                : !isClockwise && isBlue
                ? -90
                : 90),
          },
        });
      } else if (isOrange || isRed) {
        newRotations.push({
          id: rotation.id,
          rotation: {
            x: rotation.rotation.x,
            y:
              rotation.rotation.y +
              ((isClockwise && isRed) || (!isClockwise && isOrange) ? 90 : -90),
            z: rotation.rotation.z,
          },
        });
      } else {
        newRotations.push({
          id: rotation.id,
          rotation: {
            x: rotation.rotation.x,
            y:
              rotation.rotation.y +
              ((isClockwise && isWhite) ||
              (isClockwise && isYellow && top === FACE_VALUE.red) ||
              (!isClockwise && isYellow)
                ? 90
                : -90),
            z: rotation.rotation.z,
          },
        });
      }
    } else {
      newRotations.push(rotation);
    }
  });
  return newRotations;
};

export const getNewRotationsR = (positions, rotations, isClockwise) => {
  const newRotations = [];
  const requiredPositions = [2, 5, 8, 11, 14, 17, 20, 23, 26];
  rotations.forEach((rotation) => {
    if (
      requiredPositions.includes(
        positions.find(({ id }) => id === rotation.id).position
      )
    )
      newRotations.push({
        id: rotation.id,
        rotation: {
          x: rotation.rotation.x + (isClockwise ? 90 : -90),
          y: rotation.rotation.y,
          z: rotation.rotation.z,
        },
      });
    else newRotations.push(rotation);
  });
  return newRotations;
};

export const getNewRotationsL = (positions, rotations, isClockwise) => {
  const newRotations = [];
  const requiredPositions = [0, 3, 6, 9, 12, 15, 18, 21, 24];
  rotations.forEach((rotation) => {
    if (
      requiredPositions.includes(
        positions.find(({ id }) => id === rotation.id).position
      )
    )
      newRotations.push({
        id: rotation.id,
        rotation: {
          x: rotation.rotation.x + (isClockwise ? -90 : 90),
          y: rotation.rotation.y,
          z: rotation.rotation.z,
        },
      });
    else newRotations.push(rotation);
  });
  return newRotations;
};
