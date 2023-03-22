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
function fibonacci(n) {
  const memo = [0, 1]; //const로 선언
  const aux = (n) => {
    //재귀함수 aux. memo배열을 조회하고, 값을 저장하는 역할

    //memo 배열 안에 해당 값이 있는지를 먼저 조회 = 최적화
    if (memo[n] !== undefined) {
      return memo[n]; //피보나치(5)면 5번째 숫자를 return한다.
    }

    //memo 배열 안에 해당 값이 없는 경우
    else {
      memo[n] = aux(n - 1) + aux(n - 2);
    }

    //피보나치(5)는 aux(4) + aux(3)을 조회하고 aux(4)는 다시 aux(3)과 aux(2)를 조회하고...
    //결국 memo안에 가지고 있는 요소를 찾아와서 활용하여 aux(2), aux(3) ... 을 순서대로 memo배열에 저장하는 것

    return memo[n]; //memo배열의 n번째 인덱스 값이 aux함수의 return 값이 되는 것
  };

  return aux(n);
}
