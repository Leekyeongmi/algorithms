function findTheBug(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "#") {
      return i;
    }
  }
  //! 누락(하지만 통과)
  return undefined;
}
