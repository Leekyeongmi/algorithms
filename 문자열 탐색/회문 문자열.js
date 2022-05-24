function solution(s) {
  // 회문 문자열 여부를 출력한다.
  // 대소문자를 구분하지 않는다.
  //* mysol1) 앞에서 읽은 문자열과 뒤에서부터 읽은 문자열의 값을 비교한다.
  let answer = 'NO';
  let normal = s.toLowerCase();
  // 문자열을 뒤집는 메소드가 있는 것 같지만, 반복문을 통해 만들어보자.
  let reverse = '';
  for (let i = s.length - 1; i >= 0; i--) {
    reverse += s[i].toLowerCase();
  }
  if (normal === reverse) {
    answer = 'YES';
  }
  return answer;
}

let str = 'goooG';
console.log(solution(str));
