` TODO: 주어진 입력값에서 대괄호, 중괄호, 소괄호가 짝이 맞게 적절히 배치되었는지 판별하는 프로그램을 작성한다.`;

function mySolution(str) {
  let map = new Map();
  let answer = true;
  // 해쉬맵에 괄호 6종을 모두 추가한다. (반복문으로 돌면서)
  for (let sign of str) {
    if (map.has(sign)) {
      map.set(sign, map.get(sign) + 1);
    } else {
      map.set(sign, 1);
    }
  }

  // 각각의 짝끼리 괄호의 숫자가 맞는지 체크한다. 하나라도 틀리면 false를 리턴한다.
  if (map.get('[') !== map.get(']')) return false;
  if (map.get('{') !== map.get('}')) return false;
  if (map.get('(') !== map.get(')')) return false;

  return answer;
}
