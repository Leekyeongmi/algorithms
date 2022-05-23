function solution(s) {
  //* mysol1) 입력값의 글자 길이가 홀수라면 나누고 내림한 값의 인덱스를 조회한다. 입력값의 글자 길이가 짝수라면 나누고 - 1하고 2개 글자 추출한다.
  // let answer;
  // if (s.length % 2 === 1) {
  //   answer = s[Math.floor(s.length / 2)];
  // } else {
  //! 문자열에서 splice를 쓰려고 했다.
  //   let index = s.length / 2 - 1;
  //   answer = s.slice(index, index + 2);
  // }
  // return answer;

  //! sol) middle 인덱스를 먼저 변수로 선언해 할당해주고 시작하는 방식 (가독성 더 좋다)
  let answer;
  let mid = Math.floor(s.length / 2);
  // 홀수일 때,
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1); // substr(mid, 1)
  // 짝수일 때,
  else answer = s.substring(mid - 1, mid + 1); //substr(mid -1 , 2)
  return answer;
}
console.log(solution('study'));
