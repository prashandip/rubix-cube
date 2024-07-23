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
