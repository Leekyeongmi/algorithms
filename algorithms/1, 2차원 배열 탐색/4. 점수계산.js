function solution(arr) {
  //* mysol1) 정답이면 누적점수를 쌓아가다가 오답이면 누적점수를 0으로 리셋하고 총합에 누적점수를 계속 쌓아간다.
  let answer = 0,
    sum = 0;
  for (let el of arr) {
    if (el === 1) {
      sum += el;
      answer += sum;
    } else {
      sum = 0;
      answer += sum;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
