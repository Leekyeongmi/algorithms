// 1
function miniCalculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
}

// 2
// eval() 문자열 표현식 인자의 값을 평가해서 리턴한다.
// eval("2 + 2")의 리턴값은 4이다.
function miniCalculator(num1, num2, operator) {
  return eval(`${num1} ${operator} ${num2}`);
}
