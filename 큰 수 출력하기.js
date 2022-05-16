function solution(arr) {
  //! 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다. => 문제 이해를 잘못했다!
  //* mysol1) 배열을 탐색하면서 자신의 바로 앞 수의 인덱스를 변수로 만들고 크면 answer에 push 한다.
  let answer = [arr[0]];
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[index]) {
      answer.push(arr[i]);
    }
    index++;
  }
  return answer;

  //* sol) arr[i]와 arr[i-1]를 비교할 수도 있다.
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
