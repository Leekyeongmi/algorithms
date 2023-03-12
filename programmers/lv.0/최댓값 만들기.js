// sol1) numbers의 원소에 음수도 있다고 가정한 풀이
function solution(numbers) {
  // 정수 배열에서 두 개를 곱해 만들 수 있는 최댓값 구하기
  // 두 개를 곱해 만들 수 있는 모든 값을 구한다.
  let answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] * numbers[j]);
    }
  }
  // 그 안에서 최댓값을 구한다.
  // return Math.max(...answer);
  return answer.sort(function (a, b) {
    return b - a;
  })[0];
}

// sol2) numbers의 원소에 양수만 있을 때
function solution(numbers) {
  numbers.sort(function (a, b) {
    return b - a;
  });

  return numbers[0] * numbers[1];
}
