//sol1)
function solution(n) {
  // n 이하의 홀수
  var answer = [];
  for (let i = 1; i <= n; i += 2) {
    answer.push(i);
  }
  return answer;
}

// sol2)
function solution(n) {
  // 1 - n 까지 숫자를 요소로 가지는 배열을 만들어서 홀수를 필터링한다.
  return Array.from({ length: n }, (_, i) => i + 1).filter((i) => i % 2 !== 0);
}
