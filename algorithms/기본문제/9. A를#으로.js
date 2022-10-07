function solution(s) {
  //* mysol1) 문자열을 배열로 바꾸고 그걸 다시 문자열로 바꾼다. 문자열 재할당은 가능하지만 수정은 불가능하다.
  // let answer = s.split('');
  // for (let i = 0; i < answer.length; i++) {
  //   if (answer[i] === 'A') {
  //     answer[i] = '#'; // for of로 했을 때, 왜 바뀌지 않을까?
  //   }
  // }
  // answer = answer.join('');
  //! 빈 문자열을 할당하고 이어붙이는 방법 (for of 문자열에 사용 가능)
  // let answer = '';
  // for (let el of s) {
  //   if (el === 'A') answer += '#';
  //   else answer += el;
  // }
  //! replace 메소드와 정규식을 사용해 치환하는 방법
  let answer = s;
  answer = answer.replace(/A/g, '#');
  return answer;
}

let str = 'BANANA';
console.log(solution(str));
