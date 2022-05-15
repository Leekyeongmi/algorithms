function solution(s) {
  //* mysol1) 문자열을 탐색하면서 중복을 피해서(indexOf로 문자열의 캐릭터 조회) 새로운 문자열을 만든다.
  // let answer = '';
  // for (let el of s) {
  //   if (answer.indexOf(el) === -1) {
  //     answer += el;
  //   }
  // }
  // return answer;

  //* sol) 문자열을 탐색해서 중복되지 않는 문자만 새로운 문자열에 추가 (다른 아이디어)
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    //! 중복되지 않은 캐릭터의 경우 indexOf의 인덱스와 i가 동일하기 때문이다.
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;

  //! indexOf를 활용해서 중복된 문자(k)의 개수 찾아내기 (추가문제)
  // let answer = 0;
  // let pos = s.indexOf('k');
  // while (pos !== -1) {
  // 문자열에서 k의 위치를 찾으면,
  //   answer++;
  //   pos = s.indexOf('k', pos + 1);
  // }
  // return answer;
}
console.log(solution('ksekkset'));
