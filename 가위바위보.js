function solution(a, b) {
  let answer = [];
  //* mysol1) a와 b 배열의 동일 인덱스를 조회하고 비교해서 결과의 경우의 수를 answer에 push한다.
  for (let i = 0; i < a.length; i++) {
    // a가 이기는 경우 (a가 2일때 b는 1이거나 a가 1일 때 b는 3이거나 a가 3일때 b는 2이다.)
    //! a[i] > b[i] 라는 패턴을 적용하려고 했는데, 그 경우 틀린 답이 생긴다. 총 9가지 경우의 수에서 3가지만 다뤄야 하는데, a가 3이고 b가 1인 경우도 포함된다.
    if (
      (a[i] === 2 && b[i] === 1) ||
      (a[i] === 3 && b[i] === 2) ||
      (a[i] === 1 && b[i] === 3)
    ) {
      answer.push('A');
      // 비기는 경우
    } else if (a[i] === b[i]) {
      answer.push('D');
      // a가 지는 경우
    } else {
      answer.push('B');
    }
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
