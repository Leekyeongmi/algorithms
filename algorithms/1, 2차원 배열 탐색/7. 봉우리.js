function solution(arr) {
  //* mysol1) 2중 배열 탐색하면서 상, 하, 좌, 우 좌표의 값을 모두 비교해서 그 값보다 크면 봉우리로 카운트한다. (1차 실패)
  let answer;
  // 이중 배열을 탐색한다.
  // 상, 하, 좌, 우 좌표의 값을 비교해서 그 값보다 크면 봉우리로 카운트하는 함수를 만든다.
  function isTarget(i, j) {
    let left = arr[i - 1][j] || 0;
    let right = arr[i + 1][j] || 0;
    let down = arr[i][j - 1] || 0;
    let up = arr[i][j + 1] || 0;

    if (
      left < arr[i][j] &&
      down < arr[i][j] &&
      right < arr[i][j] &&
      up < arr[i][j]
    )
      return true;
    else return false;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (isTarget(i, j)) answer++;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
];
console.log(solution(arr));
