export const getNewRotations = (
  algorithmName,
  positions,
  rotations,
  isClockwise
) => {
  switch (algorithmName) {
    case "F":
      return getNewRotationsF(positions, rotations, isClockwise);
    case "R":
      return getNewRotationsR(positions, rotations, isClockwise);
    case "L":
      return getNewRotationsL(positions, rotations, isClockwise);
    case "U":
      return getNewRotationsU(positions, rotations, isClockwise);
    case "D":
      return getNewRotationsD(positions, rotations, isClockwise);
    default:
      return getNewRotationsF(positions, rotations, isClockwise);
  }
};
const getNewRotationsF = (positions, rotations, isClockwise) => {
  const newRotations = [];
  rotations.forEach((rotation) => {
    if (positions.find(({ id }) => id === rotation.id).position < 9) {
      newRotations.push({
        id: rotation.id,
        rotation: {
          x: rotation.rotation.x,
          y: rotation.rotation.y,
          z: rotation.rotation.z + (isClockwise ? 90 : -90),
        },
      });
    } else {
      newRotations.push(rotation);
    }
  });
  return newRotations;
};

const getNewRotationsR = (positions, rotations, isClockwise) => {
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

const getNewRotationsL = (positions, rotations, isClockwise) => {
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

const getNewRotationsU = (positions, rotations, isClockwise) => {
  const newRotations = [];
  const requiredPositions = [0, 1, 2, 9, 10, 11, 18, 19, 20];
  rotations.forEach((rotation) => {
    if (
      requiredPositions.includes(
        positions.find(({ id }) => id === rotation.id).position
      )
    )
      newRotations.push({
        id: rotation.id,
        rotation: {
          x: rotation.rotation.x,
          y: rotation.rotation.y + (isClockwise ? -90 : 90),
          z: rotation.rotation.z,
        },
      });
    else newRotations.push(rotation);
  });
  return newRotations;
};

const getNewRotationsD = (positions, rotations, isClockwise) => {
  const newRotations = [];
  const requiredPositions = [6, 7, 8, 15, 16, 17, 24, 25, 26];
  rotations.forEach((rotation) => {
    if (
      requiredPositions.includes(
        positions.find(({ id }) => id === rotation.id).position
      )
    )
      newRotations.push({
        id: rotation.id,
        rotation: {
          x: rotation.rotation.x,
          y: rotation.rotation.y + (isClockwise ? 90 : -90),
          z: rotation.rotation.z,
        },
      });
    else newRotations.push(rotation);
  });
  return newRotations;
};
