function solution(arr) {
  // 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다. => 문제가 잘 이해가 되진 않는다.
  //* mysol1) 배열의 첫 번째 요소보다 작은 기준 숫자를 만들고 그 숫자보다 크거나 같은 수만 filter 한다.
  let answer;
  let num = arr[0] - 1;
  answer = arr.filter((el) => el >= num);
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
