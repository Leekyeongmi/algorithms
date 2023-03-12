//* mysolution1)

function solution(k, str) {
  let map = new Map();
  let arr = str.split('');
  // arr을 탐색하면서 map에 키와 값으로 추가한다.
  for (let answer of arr) {
    if (map.has(answer)) {
      map.set(answer, map.get(answer) + 1);
    } else {
      map.set(answer, 1);
    }
  }

  console.log(map);

  // map을 탐색하면서 가장 큰 숫자를 가진 value를 찾아서 return한다.
  let max = -Infinity;
  let selectedOne = '';
  for (let [answer, count] of map) {
    if (count > max) {
      max = count;
      selectedOne = answer;
    }
  }

  return selectedOne;
}

console.log(solution(3, 'ABB'));
