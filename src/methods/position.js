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

export const getNewPositionsR = (positions, isClockwise) => {
  const newPositions = [];
  let newPosition = 0;
  positions.forEach((position) => {
    if (position.position === 2) newPosition = isClockwise ? 20 : 8;
    else if (position.position === 5) newPosition = isClockwise ? 11 : 17;
    else if (position.position === 8) newPosition = isClockwise ? 2 : 26;
    else if (position.position === 11) newPosition = isClockwise ? 23 : 5;
    else if (position.position === 17) newPosition = isClockwise ? 5 : 23;
    else if (position.position === 20) newPosition = isClockwise ? 26 : 2;
    else if (position.position === 23) newPosition = isClockwise ? 17 : 11;
    else if (position.position === 26) newPosition = isClockwise ? 8 : 20;
    else newPosition = position.position;
    newPositions.push({
      id: position.id,
      position: newPosition,
    });
  });
  return newPositions;
};

export const getNewPositionsL = (positions, isClockwise) => {
  const newPositions = [];
  let newPosition = 0;
  positions.forEach((position) => {
    if (position.position === 0) newPosition = isClockwise ? 6 : 18;
    else if (position.position === 3) newPosition = isClockwise ? 15 : 9;
    else if (position.position === 6) newPosition = isClockwise ? 24 : 0;
    else if (position.position === 9) newPosition = isClockwise ? 3 : 21;
    else if (position.position === 15) newPosition = isClockwise ? 21 : 3;
    else if (position.position === 18) newPosition = isClockwise ? 0 : 24;
    else if (position.position === 21) newPosition = isClockwise ? 9 : 15;
    else if (position.position === 24) newPosition = isClockwise ? 18 : 6;
    else newPosition = position.position;
    newPositions.push({
      id: position.id,
      position: newPosition,
    });
  });
  return newPositions;
};
