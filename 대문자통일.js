function solution(s) {
  // let answer = '';
  // answer = s.toUpperCase();
  // return answer;

  //* 아스키코드 관련 메소드 사용하기
  let answer = '';
  for (let el of s) {
    let num = el.charCodeAt();
    //! String.fromCharCode 메서드 사용과 소/대문자 수의 차이는 2^5라는 것
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += el;
  }
  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
