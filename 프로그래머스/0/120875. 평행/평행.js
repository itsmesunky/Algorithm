const getSlopeEqual = ([x1, y1], [x2, y2], [x3, y3], [x4, y4]) => {
  return (y2 - y1) * (x3 - x4) === (y3 - y4) * (x2 - x1);
}

const solution = (dots) => {
  const [a, b, c, d] = dots;
  
  return (
    getSlopeEqual(a, b, c, d) ||
    getSlopeEqual(a, c, b, d) ||
    getSlopeEqual(a, d, b, c)
  ) ? 1 : 0;
}