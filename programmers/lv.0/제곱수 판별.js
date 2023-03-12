// sol1) 제곱근까지 자연수를 1씩 증가시키면서 곱해서 매개변수와 같은지 확인한다.
function solution(n) {
  var sqrt = Math.sqrt(n);
  for (let i = 1; i <= sqrt; i++) {
    if (i * i == n) {
      return 1;
    }
  }
  return 2;
}

// sol2)
function solution(n) {
  // Math.sqrt() 메소드를 사용해서 제곱근을 구하고, 제곱근이 정수인지 확인한다.
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? 1 : 2;
  // Number.isInteger() 메소드를 사용한다.
  // return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
