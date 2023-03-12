// sol1)
function solution(dot) {
  const xValue = dot[0];
  const yValue = dot[1];
  if (xValue * yValue > 0) {
    if (xValue > 0) {
      return 1;
    } else {
      return 3;
    }
  } else {
    if (xValue > 0) {
      return 4;
    } else {
      return 2;
    }
  }
}

// sol2) 삼항 연산자를 활용해서 좀 더 간단하게 만들어보자.
function solution(dot) {
  const [xValue, yValue] = dot;
  return xValeu * yValue > 0 ? (xValue > 0 ? 1 : 3) : xValue > 0 ? 4 : 2;
}
