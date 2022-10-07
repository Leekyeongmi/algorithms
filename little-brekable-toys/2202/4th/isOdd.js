//! num 입력값이 정수일 때를 고려하지 않음
function isOdd(num) {
  if (num < 0) {
    num = num * -1;
  }

  while (num >= 0) {
    if (num === 1) {
      return true;
    }

    if (num === 0) {
      return false;
    }
    num = num - 2;
  }
}
