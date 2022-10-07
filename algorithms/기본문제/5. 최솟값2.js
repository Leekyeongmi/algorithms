function solution(arr) {
  //* mysol1) 배열을 탐색하면서 최솟값을 찾는다.
  let min = arr[0];
  //let min = Number.MAX_SAFE_INTEGER; Number 객체에서 임의의 큰 정수 값을 불러오는 것도 가능하다.
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

//* sol2) Math객체의 내장함수를 사용한다.
//1 let answer = Math.min(...arr);
//2 let answer = Math.min.apply(null, arr);
// max를 사용하면 최대값을 구해준다.

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
