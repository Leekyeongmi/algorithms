function solution(s) {
  //* mysol1) 정규식을 사용한다.
  //* mysol2) A부터 Z 대문자를 가진 배열 샘플을 하나 만들고 indexOf로 비교한다.
  //* mysol3) 입력받은 문자열을 대문자로 바꿔서 새로운 문자열을 만들고 엄격한 비교를 한다. (이 방법도 간단할 거 같다.)
  // let newStr = s.toUpperCase();
  // let answer = 0,
  // i;
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === newStr[i]) answer++;
  // }
  // return answer;
  //! 문자열을 탐색하면서 3번 아이디어를 바로 확인할 수도 있다.
  // let answer = 0;
  // for (let el of s) {
  //   if (el === el.toUpperCase()) answer++;
  // }
  // return answer;
  //! 아스키코드 넘버로 바꾸는 메소드 사용하기
  // 대문자는 65 - 90, 소문자는 97 - 122 이거는 암기해라.
  let answer = 0;
  for (let el of s) {
    let num = el.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }
  return answer;
}

let str = 'KoreaTiMeGood';
console.log(solution(str));
