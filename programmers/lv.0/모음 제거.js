// sol1)
function solution(my_string) {
  let answer = '';
  // 문자열을 순회하면서 모음이 아니라면 answer에 덧붙인다.
  for (let el of my_string) {
    if (!isVowel(el)) {
      answer += el;
    }
  }
  return answer;
}

function isVowel(letter) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(letter) === -1) {
    return false;
  } else {
    return true;
  }
}

// sol2)
function solution(my_string) {
  // 문자열을 배열로 만든 후에, 필터를 통해 모음이 아닌 것만 남기고 다시 문자열로 join한다.
  return Array.from(my_string)
    .filter((t) => !['a', 'e', 'i', 'o', 'u'].includes(t))
    .join('');
}
