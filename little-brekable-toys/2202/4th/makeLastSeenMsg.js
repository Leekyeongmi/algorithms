// 변수 설정한 부분과 조건문 순서에 따라 간단해진 조건

function makeLastSeenMsg(name, period) {
  const day = 60 * 24;
  const hour = 60;

  if (period >= day) {
    return `${name}: ${Math.floor(period / day)}일 전에 접속함`;
  } else if (period >= hour) {
    return `${name}: ${Math.floor(period / hour)}시간 전에 접속함`;
  } else {
    return `${name}: ${period}분 전에 접속함`;
  }
}
