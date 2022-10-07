//! slice, substring, splice
// 1
function takeLetters(num, str) {
  return str.slice(0, num);
}

// 2
function takeLetters(num, str) {
  return str.substring(num, 0);
}

// 3
function takeLetters(num, str) {
  let arr = str.split("");
  return arr.splice(0, num).join("");
}
