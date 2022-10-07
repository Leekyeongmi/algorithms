// 표현식을 포함한 문자열을 표현하는 template literal

function computeDifference(num1, num2) {
  //! 절대값 구하기
  let difference = Math.abs(num1 - num2);
  return `${num1}, ${num2}의 차이는 ${difference}입니다.`;
}
