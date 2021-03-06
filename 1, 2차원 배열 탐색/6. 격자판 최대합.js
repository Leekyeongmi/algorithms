function solution(arr) {
  //* mysol1) 이차배열을 탐색해서 합을 도출해내고, 그 합중에 최대값을 찾아낸다.(2차 성공 - 너무 지저분하다 코드가)
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 0;
  let answer = [];

  // 이차배열을 탐색한다.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // 행의 합
      sum1 += arr[i][j];
      // 열의 합
      sum2 += arr[j][i];
      // 대각선의 합
      if (i === j) {
        sum3 += arr[i][j];
      }
      if (i + j === arr.length) {
        sum4 += arr[i][j];
      }
    }
    answer.push(sum1, sum2, sum3);
    sum1 = 0;
    sum2 = 0;
  }
  console.log(answer);
  return Math.max(...answer);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];
console.log(solution(arr));
