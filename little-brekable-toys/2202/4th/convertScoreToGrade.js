function convertScoreToGrade(score) {
  let result;
  // 1. 먼저 예외사항을 걸러준다.
  if (score > 100 || score < 0) return "INVALID SCORE";
  // 2. 0과 100사이에 점수만 남기 때문에, 아래와 같은 조건식이 가능하다.
  // 3. 가장 좁은 단위부터 해야 한다.
  if (score >= 90) {
    result = "A";
  } else if (score >= 80) {
    result = "B";
  } else if (score >= 70) {
    result = "C";
  } else if (score >= 60) {
    result = "D";
  } else {
    result = "F";
  }

  return result;
}
