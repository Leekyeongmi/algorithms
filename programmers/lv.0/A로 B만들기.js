// sol1)
function solution(before, after) {
  // 문자열을 배열로 만들어서 요소들을 정렬한다.
  let bf = Array.from(before).sort();
  let af = Array.from(after).sort();
  if (JSON.stringify(bf) !== JSON.stringify(af)) {
    return 0;
  } else {
    return 1;
  }
}

// sol2)
function solution(before, after) {
  // 참조자료형은 주소값을 비교하기 때문에 문자열로 변환해서 비교한다.
  let bf = Array.from(before).sort().join('');
  let af = Array.from(after).sort().join('');
  if (bf === af) {
    return 1;
  } else {
    return 0;
  }
}
