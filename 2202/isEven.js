// 1
function isEven(num) {
  // 0이상의 정수를 2로 나누었을 때, 나머지가 0이 되는 숫자는 0, 2, 4, 6, 8, 10... 0을 포함한 짝수다.
  if (num % 2 === 0) {
    return true;
    // 그렇지 않은 경우, 1, 3, 5, 7, 9... 홀수가 된다.
  } else {
    return false;
  }
}

// 2
function isEven(num) {
  if (!(num % 2)) {
    return true;
  }
  return false;
}
