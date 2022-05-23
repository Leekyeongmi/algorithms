function solution(s) {
  //* mysol1) 배열을 탐색하면서 중복을 피해서(indexOf로 배열의 요소 조회) 새로운 배열을 만든다.
  // let answer = [];
  // for (let el of s) {
  //   if (answer.indexOf(el) === -1) {
  //     answer.push(el);
  //   }
  // }
  // return answer;

  //! sol) 배열 내장 함수인 filter와 indexOf를 함께 사용해서 풀어보자.(듣고 바로 아이디어는 떠올랐다)
  let answer;
  answer = s.filter((el, idx) => s.indexOf(el) === idx);
  return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));
