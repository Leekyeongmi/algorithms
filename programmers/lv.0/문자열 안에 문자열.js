//* includes() 메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환합니다.
//* 간단하게 includes 메서드를 활용해서 풀 수 있는 문제였는데 어렵게 풀었다.

// sol1)
function solution(str1, str2) {
  // 문자열 안에 문자열이 존재하는지 여부
  let length = str2.length;
  // str2의 첫 번째 글자와 같은 str1의 글자를 타겟 인덱스로 지정한다.
  let targetIndex = str1.indexOf(str2);
  if (targetIndex === -1) {
    return 2;
  }

  // 타겟 인덱스의 그 다음 글자부터 str2의 길이만큼의 글자를 추출한 뒤 비교한다.
  let targetStr = str1.slice(targetIndex, targetIndex + length);
  if (targetStr === str2) {
    return 1;
  } else {
    return 2;
  }
}

// sol2)
function solution(str1, str2) {
  // includes 메서드 결과값이 true이면 1, false이면 2를 반환한다.
  return str1.includes(str2) ? 1 : 2;
}
