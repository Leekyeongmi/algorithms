function transformFirstAndLast(arr) {
  // 1. 빈 객체 할당
  const obj = {};
  // 2. 빈 배열의 경우, 빈 객체 리턴
  if (arr.length === 0) {
    return obj;
  }
  // 3. 배열의 첫 요소를 키로, 배열의 마지막 요소를 값으로 할당
  obj[arr[0]] = arr[arr.length - 1];
  return obj;
}
