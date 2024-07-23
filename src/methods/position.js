export const getNewPositionsF = (positions, isClockwise) => {
  const newPositions = [];
  let newPosition = 0;
  positions.forEach((position) => {
    if (position.position === 0) newPosition = isClockwise ? 2 : 6;
    else if (position.position === 1) newPosition = isClockwise ? 5 : 3;
    else if (position.position === 2) newPosition = isClockwise ? 8 : 0;
    else if (position.position === 3) newPosition = isClockwise ? 1 : 7;
    else if (position.position === 5) newPosition = isClockwise ? 7 : 1;
    else if (position.position === 6) newPosition = isClockwise ? 0 : 8;
    else if (position.position === 7) newPosition = isClockwise ? 3 : 5;
    else if (position.position === 8) newPosition = isClockwise ? 6 : 2;
    else newPosition = position.position;
    newPositions.push({
      id: position.id,
      position: newPosition,
    });
  });
  return newPositions;
};
