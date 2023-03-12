// sol1)
function solution(sides) {
  // 삼각형을 만드는 조건은 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.
  // 가장 긴 변을 찾는다.
  let theLongest = Math.max(...sides);
  // 나머지 변으로 이루어진 배열을 다시 구한다. => 더 좋은 방법이 있는데..
  let newArr = sides.filter((e) => e !== theLongest);
  if (newArr.length !== 2) {
    return 1;
  } else {
    // 나머지 두 변의 합보다 작은지 여부를 확인한다.
    let sum = newArr.reduce((acc, cur) => acc + cur, 0);
    return sum > theLongest ? 1 : 2;
  }
}

// sol2)
function solution(sides) {
  // 삼각형을 만드는 조건은 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.
  // 가장 긴 변을 찾는다.
  let theLongest = Math.max(...sides);
  // 삼각형 둘레의 합에서 가장 긴 변의 길이를 빼면 된다.
  let theRestSum = sides.reduce((acc, cur) => acc + cur, 0) - theLongest;
  return theRestSum > theLongest ? 1 : 2;
}
