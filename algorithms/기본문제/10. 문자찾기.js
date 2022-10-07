function solution(s, t) {
  let answer = 0;
  //* mysol) 문자열 하나하나 탐색하기
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === t) answer++;
  // }

  //! 내장함수 split 사용해서 구분자로 만드는 아이디어
  answer = s.split(t).length - 1; // 만약에 구분자가 맨 끝에 있다면 빈 문자열을 만들기 때문에 역시 사용 가능하다.
  return answer;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'G'));
