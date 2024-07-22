import { FACE_VALUE } from "./../store/cubeletSlice";
export const getNewRotationsF = (
  positions,
  rotations,
  orientations,
  isClockwise
) => {
  const newRotations = [];
  positions.forEach((position) => {
    if (position.position < 9) {
      const rotation = rotations.find(({ id }) => id === position.id);
      const orientation = orientations.find(({ id }) => id === position.id);
      const front = orientation.orientation.front;
      if (front === FACE_VALUE.blue || front === FACE_VALUE.green) {
        newRotations.push({
          id: rotation.id,
          rotation: {
            x: rotation.rotation.x,
            y: rotation.rotation.y,
            z: rotation.rotation.z + (isClockwise ? 90 : -90),
          },
        });
      } else if (front === FACE_VALUE.orange || front === FACE_VALUE.red) {
        newRotations.push({
          id: rotation.id,
          rotation: {
            x: rotation.rotation.x + (isClockwise ? 90 : -90),
            y: rotation.rotation.y,
            z: rotation.rotation.z,
          },
        });
      } else {
        newRotations.push({
          id: rotation.id,
          rotation: {
            x: rotation.rotation.x,
            y: rotation.rotation.y + (isClockwise ? 90 : -90),
            z: rotation.rotation.z,
          },
        });
      }
    } else {
      newRotations.push(rotations.find(({ id }) => id === position.id));
    }
  });
  return newRotations;
};
