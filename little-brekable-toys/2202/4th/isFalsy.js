// 임의의 값을 입력받아 falsy 값인지 여부를 리턴한다. (불리언 객체)

function isFalsy(anything) {
  return !Boolean(anything); // Boolean(NaN) - false
}
