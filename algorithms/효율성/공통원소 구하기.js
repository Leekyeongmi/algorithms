// TODO: 두 배열의 공통원소를 오름차순으로 정렬해라.

// 1. 첫 번째 집합을 정렬하고, 두 번째 집합을 정렬한다.
// 2. 원소를 비교하고 같으면 answer 배열에 넣는다. p1, p2를 모두 증가시킨다.
// 3. 같지 않다면? 원소의 크기가 작은 쪽의 포인터를 증가시킨다.(이것이 정렬을 한 이유다.)

function solution(arr1, arr2) {
  let answer = [];
  let p1 = (p2 = 0);
  let n = arr1.length;
  let m = arr2.length;

  // 배열 오름차순으로 정렬하기
  // arr1.sort();
  // arr2.sort();
  //! 정렬 기준을 콜백함수로 넘겨주지 않으면, 문자열로 바꿔서 사전식으로 정리해서 두자리수의 경우에 문제가 생긴다.
  // 정렬 기준을 주면 숫자 정렬이 된다.
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  // 두 배열 중에 하나의 탐색이 끝날 때까지만 하면 된다.
  while (p1 < n && p2 < m) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else {
      arr1[p1] < arr2[p2] ? p1++ : p2++;
    }
  }
  return answer;
}
