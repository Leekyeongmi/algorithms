function solution(day, arr) {
  let answer = 0;
  //* mysol1) 배열을 훑으면서 10으로 나눴을 때 나머지가 주어진 날짜와 같으면 카운트를 올린다.
  for (let el of arr) {
    if (el % 10 === day) {
      answer++;
    }
  }
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
