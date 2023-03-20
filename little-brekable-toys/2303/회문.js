` TODO: 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.`;

function solution(str) {
  let answer = 'YES';
  str.toLowerCase().replace(/[^a-z]/g, ''); // 정규식을 사용해 문자열이 a-z가 아니면 제거한다.
  if (str.split('').reverse().join('') !== str) return 'NO';
  return answer;
}

function solution1(str) {
  return (
    str.replace(/[\W_]/g, '').toLowerCase() ===
    str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('')
  );
}
