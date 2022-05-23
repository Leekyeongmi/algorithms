function solution(s) {
  // 가장 긴 문자열 출력하기
  //* mysol1) map 내장 메소드를 사용해서 길이를 구하고 그 안에서 최대값 인덱스를 구한다(비효율) => reduce 내장 메소드만을 사용한다.
  // reduce 메소드 연습을 하지 않으니, 또 까먹게 되지만 아주 휘발되지는 않았다! 금방 기억을 더듬어 쓸 수 있을 것 같다.
  //! reduce에서 조건에 걸리지 않는 배열 요소가 있는 경우, return 값이 없어서 undefined가 축적값 되는 거 같다. (저번에도 한 번 틀린 내용 같다.)
  // let answer;
  // answer = s.reduce((acc, cur) => {
  //   if (acc.length < cur.length) return cur;
  //   else return acc;
  // });
  // return answer;

  //* mysol2) 배열을 순회하면서 비교는 문자열의 길이로, 재할당은 문자열 자체로 한다.
  let answer = '';
  for (let el of s) {
    if (el.length > answer.length) answer = el;
  }
  return answer;
}
let str = ['teache', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
