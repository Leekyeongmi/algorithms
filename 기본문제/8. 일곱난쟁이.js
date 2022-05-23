function solution(arr) {
  //* mysol1) 100을 초과하는 숫자의 합을 만드는 숫자 두 개를 찾아낸다. 그리고 그 숫자를 배열에서 제거한다. (2차 성공 - 코드가 지저분하다)
  // 9개의 숫자 중에 합이 100이 되는 7개의 숫자를 순서대로 찾아낸다. (복수 정답 가능한데 아무거나 출력한다)
  // let answer = arr;
  // let sum = 0;
  // for (let el of arr) {
  //   sum += el;
  // }
  // let target = sum - 100;
  //! 두 개의 원소의 합이 target과 같으면 빼버린다.
  // for (let i = 0; i < answer.length; i++) {
  //   for (let k = i + 1; k < answer.length; k++) {
  //     if (answer[i] + answer[k] === target) {
  //! 배열 요소 제거 : splice 사용
  //       answer.splice(i, 1);
  //       answer.splice(k - 1, 1);
  //       return answer; // 여기에서 값을 출력하고 끝냈어야 함!
  //     }
  //   }
  // }
  //* sol) 나의 풀이와 아이디어가 거의 흡사했다. sum - 가짜 난쟁이 키의 합이 100이 되는 것, 이중 반복문, splice 사용해서 배열 요소 제거
  let answer = arr; // 얕은 복사 : 둘 다 똑같은 배열 메모리 주소값을 참조하고 있다.
  let sum = arr.reduce((a, b) => a + b); // 콜백함수와 초기값
  //! 이중 반복문 사용할 때, i 조건문에서 놓친 부분이 있다.
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1); //! 여기 함정은 잘 피해갔다. splice 메서드는 원본을 바꾼다. 뒤에 인덱스를 먼저 지우는 방법도 있다!
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
