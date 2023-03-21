` TODO: 자연수 n, m이 주어졌을 때, 피보나치 수열의 n번째 수부터 m번째 수까지 합한 값을 구한다. 
피보나치 수열의 k번째 수는 k - 2번째 수와 k - 1번째 수를 합한 값이다. 수열의 첫 번째 수는 1, 두번째 수는 1이다.`;

function solution(n, m) {
  let sum = 0;
  let current = 1;
  let prev = 0;

  for (let i = 1; i <= m; i++) {
    if (i >= n) {
      sum += current;
    }

    const next = current + prev; // 피보나치 수열의 핵심 개념
    prev = current;
    current = next;
  }
  return sum;
}

// 재귀로 해결
function fibonacci(n) {
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 메모이제이션으로 최적화
