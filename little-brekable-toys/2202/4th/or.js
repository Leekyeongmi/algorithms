function or(expression1, expression2) {
  // or 연산
  // T + T = T
  // T + F = T
  // F + F = F
  // 만약에 두 값이 모두 false 이면 false이고, 나머지 경우는 true이다.
  if (expression1 === false && expression2 === false) {
    return false;
  } else {
    return true;
  }
}
