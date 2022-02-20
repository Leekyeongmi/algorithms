function isPythagorean(side1, side2, side3) {
  // 1. 각 변의 제곱을 구해서 변수에 넣는다.
  let pow1 = side1 * side1;
  let pow2 = side2 ** 2;
  let pow3 = Math.pow(side3, 2);

  // 2. 어떤 변이 빗변인지 알 수 없으므로, 경우의 수를 모두 따져서 확인한다.
  if (pow1 === pow2 + pow3 || pow2 === pow1 + pow3 || pow3 === pow1 + pow2) {
    return true;
  }
  return false;
}
