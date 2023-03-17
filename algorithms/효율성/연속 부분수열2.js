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
    if (sum <= M) {
      console.log(sum);
      counter++;
    }

    while (sum >= M) {
      sum -= arr[leftPointer++];

      if (sum <= M) {
        console.log(sum);
        counter++;
      }
    }
  }
  return counter;
}

console.log(mySolution(5, [1, 3, 1, 2, 3]));

//! 문제
// 해당 로직으로는 단일원소로 이루어진 부분수열에 대한 합을 구할 수 없어진다. 그렇지 않은가? 아니다.
// 연속 부분수열1과 무엇이 다른지 차이점을 살펴보면서 각각에 대해 더 깊게 이해해봐야한다.
