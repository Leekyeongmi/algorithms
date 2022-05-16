function solution(arr) {
  //* mysol1) 배열을 탐색하면서 최대값(더 클 때만 바뀜) 몇 번 바뀌는지를 체크한다.
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let el of arr) {
    if (el > max) {
      max = el;
      answer++;
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
