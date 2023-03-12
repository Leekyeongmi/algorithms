// sol1)
function solution(n) {
  // n의 각 자리 숫자의 합을 리턴한다.
  // 정수를 문자열로 치환한다.
  let sum = 0;
  for (let el of String(n)) {
    sum += Number(el);
  }
  return sum;
}

// sol2)
function solution(n) {
  return String(n)
    .split('')
    .reduce((a, b) => Number(a) + Number(b));
}
