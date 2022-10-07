function solution(n) {
  // 1부터 n까지의 합 구하기

  //* mysol1) 반복문 사용하기
  // let sum = 0;
  // for (let i = 1; i <= n; i++) {
  //   sum = sum + i;
  // }
  // return sum;

  //*  mysol2) 재귀 사용하기
  function sumTo(n) {
    if (n === 1) return 1;
    return sumTo(n - 1) + n;
  }
  return sumTo(n);
}

console.log(solution(10));
