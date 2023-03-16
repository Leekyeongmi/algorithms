`
N개의 수로 이루어진 수열이 주어진다.
이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하라.
`;

function mySolution(M, arr) {
  let counter = 0;
  let sum = 0;
  let leftPointer = 0;

  for (let rightPointer = 0; rightPointer < arr.length; rightPointer++) {
    // rightPointer가 가리키는 값을 더하고 올려나간다.
    sum += arr[rightPointer++];
    if (sum <= M) counter++;

    while (sum >= M) {
      sum -= arr[leftPointer++];
      if (sum <= M) counter++;
    }
  }
  return counter;
}

console.log(mySolution(5, [1, 3, 1, 2, 3]));
