function dropLetters(num, str) {
  if (num >= str.length) {
    return "";
  }
  return str.slice(num);
}

// 2
function dropLetters(num, str) {
  if (num >= str.length) {
    return "";
  }
  return str.substring(num);
}
