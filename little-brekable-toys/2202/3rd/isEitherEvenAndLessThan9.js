// 1
function isEitherEvenAndLessThan9(num1, num2) {
  if (num1 < 9 && num2 < 9) {
    if (num1 % 2 === 0 || num2 % 2 === 0) {
      // 두 조건을 만족하는 경우
      return true;
    }
    // 첫 번째 조건만 만족하는 경우
    return false;
  }
  // 둘 다 만족하지 않는 경우
  return false;
}

// 2
function isEitherEvenAndLessThan9(num1, num2) {
  let eitherEven = num1 % 2 === 0 || num2 % 2 === 0;
  let lessThan9 = num1 < 9 && num2 < 9;

  return eitherEven && lessThan9;
}
