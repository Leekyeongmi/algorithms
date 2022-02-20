function convertScoreToGradeWithPlusAndMinus(score) {
  // 점수가 0, 1, 2로 끝나는 경우 -를 붙여준다.
  // 점수가 8, 9로 끝나는 경우 +를 붙여준다.
  let grade;
  let sign = "";

  // 1. 100 초과하거나 0미만인 경우 INVALID SCORE
  if (score > 100 || score < 0) {
    return "INVALID SCORE";
  }

  //! 100에 대해 예외케이스를 빼먹었다.
  if (score === 100) {
    return "A+";
  }

  // 2. grade를 정한다.
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // 3. sign을 정한다.
  let rest = score % 10;
  // 만약에 grade가 f이면 sign은 빈 문자열이다.
  if (grade !== "F") {
    //! rest의 범위가 0부터 9까지의 수이기 때문에, 일일이 써주지 않아도 되었다.
    if (rest <= 2) {
      sign = "-";
    } else if (rest >= 8) {
      sign = "+";
    }
  }

  // 4. grade와 sign을 마지막에 합쳐준다.
  return grade + sign;
}
