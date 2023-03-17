// TODO: N개의 수로 이루어진 수열이 주어지고, 이 수열에서 연속 부분수열의 합이 특정숫자 M이 되는 경우가 몇 번이 되는지 작성하세요.
// left pointer는 올라가면서 그 수를 뺀다.
// right pointer는 올라가면서 그 수를 더한다.

function solution(N, M, arr) {
  let left = (right = 0);
  let count = 0;
  let sum = 0;

  // right 포인터가 N보다 작을 때까지 진행한다.
  while (right < N) {
    // sum이 6보다 작을 때, right pointer가 가리키는 값을 더하고 right pointer를 증가시킨다.
    if (sum < M) {
      sum = sum + arr[right];
      right++;
      // sum이 6과 같을 때, count를 더하고 left pointer가 가리키는 값을 sum에서 빼고 left pointer를 증가시킨다.
    } else if (sum >= M) {
      if (sum === M) {
        count++;
      }
      sum = sum - arr[left];
      left++;
    }
  }
  //! 이 부분이 누락 되어서 틀렸을 것 같다.
  // 가장 마지막 원소를 더해서 sum이 목표 숫자가 되었는데, pointer를 늘리면서 반복문에서 빠져나오면서 count가 누락이 안 될 수 있다.
  if (sum === M) {
    count++;
  }
  return count;
}

function solution2(m, arr) {
  let answer = 0;
  lt = 0;
  sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

console.log(solution(9, 6, [1, 2, 1, 3, 1, 1, 1, 1, 2]));
console.log(solution2(6, [1, 2, 1, 3, 1, 1, 1, 1, 2]));
