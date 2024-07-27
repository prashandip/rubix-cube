export const getNewOrientationsF = (positions, orientations, isClockwise) => {
  const newOrientations = [];
  orientations.forEach((orientation) => {
    if (positions.find(({ id }) => id === orientation.id).position < 9) {
      newOrientations.push({
        id: orientation.id,
        orientation: {
          front: orientation.orientation.front,
          back: orientation.orientation.back,
          left: isClockwise
            ? orientation.orientation.bottom
            : orientation.orientation.top,
          right: isClockwise
            ? orientation.orientation.top
            : orientation.orientation.bottom,
          top: isClockwise
            ? orientation.orientation.left
            : orientation.orientation.right,
          bottom: isClockwise
            ? orientation.orientation.right
            : orientation.orientation.left,
        },
      });
    } else newOrientations.push(orientation);
  });
  return newOrientations;
};

export const getNewOrientationsR = (positions, orientations, isClockwise) => {
  const newOrientations = [];
  const requiredPositions = [2, 5, 8, 11, 14, 17, 20, 23, 26];
  orientations.forEach((orientation) => {
    if (
      requiredPositions.includes(
        positions.find(({ id }) => id === orientation.id).position
      )
    ) {
      newOrientations.push({
        id: orientation.id,
        orientation: {
          front: isClockwise
            ? orientation.orientation.bottom
            : orientation.orientation.top,
          back: isClockwise
            ? orientation.orientation.top
            : orientation.orientation.bottom,
          left: orientation.orientation.left,
          right: orientation.orientation.right,
          top: isClockwise
            ? orientation.orientation.front
            : orientation.orientation.back,
          bottom: isClockwise
            ? orientation.orientation.back
            : orientation.orientation.front,
        },
      });
    } else newOrientations.push(orientation);
  });
  return newOrientations;
};
