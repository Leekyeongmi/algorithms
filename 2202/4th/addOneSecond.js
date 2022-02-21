function addOneSecond(hour, minute, second) {
  // 1. 초를 증가시킨다
  second++;
  // 2. 초가 60이라면 분을 하나 증가시키고 초를 0으로 바꾼다.
  if (second === 60) {
    minute++;
    second = 0;
  }
  // 3. 분이 60이라면 시간을 하나 증가시키고 분을 0으로 바꾼다.
  if (minute === 60) {
    hour++;
    minute = 0;
  }
  // 4. 시간이 24라면 시간을 0으로 바꾼다.
  if (hour === 24) {
    hour = 0;
  }

  return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`;
}
