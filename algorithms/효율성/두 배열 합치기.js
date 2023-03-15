// TODO: 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합친다.

// sort 함수를 사용하면 시간복잡도는 O(n*logn)
// 투포인터 알고리즘을 사용하면 시간복잡도가 O(n+m)이 된다.

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  // 포인터의 값을 0으로 초기화시켜준다.
  let p1 = (p2 = 0);

  // 포인터 둘 중에 하나가 배열의 길이와 값이 같아지는 순간 while 문이 종료된다.
  while (p1 < n && p2 < m) {
    if (arr1[p1] < arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  // 둘 중 하나의 배열을 가리키는 포인터가 배열의 길이를 넘어섰으므로, 아닌 배열의 남은 나머지 원소만 넣어준다.
  while (p1 < n) {
    answer.push(arr1[p1++]);
  }

  while (p2 < m) {
    answer.push(arr2[p2++]);
  }

  return answer;
}
