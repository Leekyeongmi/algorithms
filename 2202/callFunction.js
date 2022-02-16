let word = returnWordWithJoy("I love coding");

function returnWordWithJoy(word) {
  if (typeof word !== "string") {
    return "wrong type";
  } else {
    return `${word}!`;
  }
}
