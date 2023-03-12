// sol1) Math.pow 메소드 화룡하기
function solution(n, t) {
  return n * Math.pow(2, t);
}

// sol2) t가 0이 아니라면 계속 2배하고 -1씩 차감하는 방법
function solution(n, t) {
  while (t-- > 0) n *= 2;
  return n;
}

// sol3)
function solution(n, t) {
  let answer = n;
  for (let i = 0; i < t; i++) {
    answer = answer * 2;
  }
  return answer;
}
