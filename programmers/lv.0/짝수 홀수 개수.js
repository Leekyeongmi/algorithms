// sol1)
function solution(num_list) {
  // 짝수와 홀수의 개수를 담은 배열
  let evenNumCount = 0;
  let oddNumCount = 0;
  for (let el of num_list) {
    if (el % 2 === 0) {
      evenNumCount++;
    } else {
      oddNumCount++;
    }
  }
  return [evenNumCount, oddNumCount];
}

// sol2)
function solution(num_list) {
  // acc, cur, 초기값
  return num_list.reduce(
    ([even, odd], cur) => {
      // 현재값이 짝수이면 짝수를 올리고 아니면 홀수를 올린다.
      return cur % 2 === 0 ? [even + 1, odd] : [even, odd + 1];
    },
    [0, 0]
  );
}
