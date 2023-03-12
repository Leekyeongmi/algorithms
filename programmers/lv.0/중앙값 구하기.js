// sol1)
function solution(array) {
  // 원본배열을 건드리지 않기 위해서, 복사를 해준다.
  // newArr = array.slice();
  let newArr = Object.assign([], array);
  // 배열을 정렬시킨다.
  newArr.sort(function (a, b) {
    return a - b;
  });
  // 배열의 길이를 2로 나누고 올림해서 그 그 자리에서 조회한다.
  targetIndex = parseInt(newArr.length / 2);
  answer = newArr[targetIndex];
  return answer;
}

// sol2)
// at 메소드 활용하기
function solution(array) {
  let newArr = array.slice();
  return newArr
    .sort(function (a, b) {
      return a - b;
    })
    .at(parseInt(newArr.length / 2));
}
