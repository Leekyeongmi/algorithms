// 1
function compareNumberStrings(numStr1, numStr2) {
  let target;

  // 문자열을 숫자 타입으로 바꾼다.
  //! 변수 이름을 더 괜찮게 지을 수 있었다.
  let _numStr1 = Number(numStr1);
  let _numStr2 = Number(numStr2);

  // 숫자를 비교한다.
  if (_numStr1 < _numStr2) {
    target = _numStr2;
  } else {
    target = _numStr1;
  }
  // 숫자에 5를 더한 뒤 문자열로 타입을 바꾼다.
  return String(target + 5);
}

// 2
function compareNumberStrings(numStr1, numStr2) {
  //! parseInt 메소드 사용
  let num1 = parseInt(numStr1);
  let num2 = parseInt(numStr2);
  if (num1 > num2) {
    return String(num1 + 5);
  } else {
    return String(num2 + 5);
  }
}
