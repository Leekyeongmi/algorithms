function solution(s) {
  let answer = '';
  //* mysol1) 문자 대/소 파악하고 반대로 바꿔준다. (아스키코드 숫자로 바꿔주기)
  // for (let el of s) {
  //   let num = el.charCodeAt();
  //   if (num >= 65 && num <= 90) {
  //     answer += el.toLowerCase();
  //   } else {
  //     answer += el.toUpperCase();
  //   }
  // }
  // return answer;

  //* mysol2) 바로 비교하기
  for (let el of s) {
    // 대문자인가?
    if (el.toUpperCase() === el) {
      answer += el.toLowerCase();
    } else {
      answer += el.toUpperCase();
    }
  }
  return answer;
}

console.log(solution('StuDY'));
