function solution(n) {
  // mysol.나눈 값에 올림 처리를 한다.
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}
console.log(solution(25));

// Math 객체에 있는 다른 메서드들 : sqrt, floor, round...
