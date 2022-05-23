function solution(a, b, c) {
  // 삼각형이 되는 조건 : 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.
  // sol1. 가장 긴 변을 실제로 찾아내기
  // 1. 긴 변 찾아내기
  let longest;
  if (a < b) longest = b;
  else longest = a;
  if (longest < c) longest = c;
  // 2. 나머지 변의 길이 합 추출해내기
  if (longest < a + b + c - longest) return 'YES';
  else return 'NO';
  // sol2. 경우의 수를 나눠서 생각해보기 => failed!
  // if (a + b > c || b + c > a || a + c > b) return 'YES';
  // else return 'NO';
}

console.log(solution(13, 33, 17));
