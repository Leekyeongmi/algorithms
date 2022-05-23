function solution(arr) {
  //* mysol1) 배열을 하나씩 훑으면서 홀수인 경우에 최솟값과 합을 구하는 코드를 작성한다.
  //! min에 arr[0]을 넣지 않아야 하는 함정은 잘 벗어났다.
  // let sum = 0,
  //   min = Number.MAX_SAFE_INTEGER;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2) {
  //     sum = sum + arr[i];
  //     if (min > arr[i]) min = arr[i];
  //   }
  // }
  // 두 번째 줄에 출력하는 건 어떻게 표현하지? => 배열로 한다.
  // return [sum, min];

  //* sol2) for of문 문법 사용해보기
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let el of arr) {
    if (el % 2) {
      sum += el;
      if (el < min) min = el;
    }
  }
  answer.push(sum, min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
