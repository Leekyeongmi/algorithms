function solution(a, b, c) {
  let answer;
  // a와 b의 값을 비교해 더 작은 값을 answer 변수에 할당한다.
  if (a < b) answer = a;
  else answer = b;
  // 그 값과 c를 비교해서 최종적으로 answer 변수에 할당한다.
  if (answer > c) answer = c;
  return answer;
}

console.log(solution(2, 5, 1));
