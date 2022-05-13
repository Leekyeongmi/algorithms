function solution(arr) {
  //* mysol1) 100을 초과하는 숫자의 합을 만드는 숫자 두 개를 찾아낸다. 그리고 그 숫자를 배열에서 제거한다. (1차 실패)
  // 9개의 숫자 중에 합이 100이 되는 7개의 숫자를 순서대로 찾아낸다. (복수 정답 가능한데 아무거나 출력한다)
  let sum = 0;
  for (let el of arr) {
    sum += el;
  }
  let target = sum - 100;
  // 두 개의 원소의 합이 target과 같으면 빼버린다.
  for (let i = 0; i < arr.length; i++) {}

  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
