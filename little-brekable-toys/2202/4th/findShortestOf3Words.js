function findShortestOfThreeWords(word1, word2, word3) {
  // 단어1과 단어2를 비교한다.
  //  단어 2가 더 짧으면 바꾼다.
  //  단어 1이 더 짧으면 단어 3과 비교한다.
  //    // 단어 3이 더 짧으면 바꾼다.
  //

  // 단어1를 가장 짧은 단어라고 가정한다.
  let short = word1;
  // 단어 2가 더 짧은 경우
  if (word1.length > word2.length) {
    short = word2;
    //! 단어 3이 더 짧은 경우 (수도코드에서 빼먹은 부분)
    if (word2.length > word3.length) {
      short = word3;
    }
    // 단어 1이 더 짧은 경우
  } else {
    // 단어 3이 더 짧은 경우
    if (word1.length > word3.length) {
      short = word3;
    }
  }
  return short;
}
