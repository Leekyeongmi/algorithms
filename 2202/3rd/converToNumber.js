// 1
function convertToNumber(anything) {
  // 입력값이 숫자인 경우
  if (typeof anything === "number") return anything;
  // 입력값이 문자열인 경우
  else if (typeof anything === "string") return Number(anything);
  // 그 외의 경우는 NaN
  else return NaN;
}

// 2
function convertToNumber(anything) {
  return Number(anything);
}
