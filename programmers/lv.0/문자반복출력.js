// sol1) my_string을 배열의 요소로 만들고 mapping을 해서 반복된 문자 요소를 가진 새로운 배열을 만든다.
function solution(my_string, n) {
  // [...my_string] : my_string을 배열의 요소로 만든다.
  var answer = [...my_string].map((v) => v.repeat(n)).join('');
  console.log(answer);
  return answer;
}

// sol2)
function solution(my_string, n) {
  //주어진 문자열 요소를 순회하면서 n번씩 반복한다. (이중 반복문)
  let answer = '';
  for (let el of my_string) {
    for (let i = 0; i < n; i++) {
      answer += el;
    }
  }
  return answer;
}
