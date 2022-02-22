// 알파벳으로만 비교하기 위해 대문자/소문자로 일치시킨다.

function compareOnlyAlphabet(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
