// sol1)
function solution(numbers) {
  // numbers 원소들 배열의 합을 구한다.
  let sum = 0;
  let length = numbers.length;
  for (let el of numbers) {
    sum += el;
  }
  // 그 합을 number 배열의 길이로 나눈다.
  return sum / length;
}

// Sol2
function solution(numbers) {
  return numbers.reduce((a, b) => a + b) / numbers.length;
}
