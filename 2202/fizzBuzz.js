// 조건문을 작성할 때, 순서를 고려해야 한다. 교집합을 가장 먼저 써준다.

function fizzBuzz(num) {
  // 교집합을 먼저 적는다.
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return "No FizzBuzz";
  }
}
