// 10만원 조건과 else 부분을 누락해서 일부 테스트에 통과를 못했었다.

function solution(price) {
  var answer = 0;

  if (price >= 500000) {
    answer = price * 0.8;
  } else if (price >= 300000) {
    answer = price * 0.9;
  } else if (price >= 100000) {
    answer = price * 0.95;
  } else {
    answer = price;
  }
  return Math.floor(answer);
}
