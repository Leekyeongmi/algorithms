//* my solution2)
function solution2(str1, str2) {
  let map1 = new Map();
  let answer = true;

  for (let cha of str1) {
    if (map1.has(cha)) {
      map1.set(cha, map1.get(cha) + 1);
    } else {
      map1.set(cha, 1);
    }
  }

  // map1에 똑같은 캐릭터가 있다면, -1 한다.
  for (let cha of str2) {
    if (map1.has(cha)) {
      map1.set(cha, map1.get(cha) - 1);
    } else {
      return false;
    }
  }

  //! 답안
  //* 두 문자열의 길이가 같기 때문에, 이렇게 써주면 나처럼 31번째 코드를 써주지 않아도 된다.
  // for (let x of str2) {
  //   if (!map1.has(x) || map1.get(x) === 0) return 'no';
  //   map1.set(x, sH.get(x) - 1);
  // }

  // map1의 value가 모두 0이면 answer를 그대로 return 하고 그렇지 않으면 false이다.
  map1.forEach((value) => {
    if (value !== 0) {
      return false;
    }
  });

  return answer;
}

//* my solution1)

function solution(str1, str2) {
  // str1, str2가 그 구성이 일치하는지 확인하는 알고리즘 (대소문자 구분한다)

  let map1 = new Map();
  let map2 = new Map();
  let answer = true;

  for (let cha of str1) {
    if (map1.has(cha)) {
      map1.set(cha, map1.get(cha) + 1);
    } else {
      map1.set(cha, 1);
    }
  }

  //! 굳이 맵을 두 개 만들 필요는 없는 것 같다.
  for (let cha of str2) {
    if (map2.has(cha)) {
      map2.set(cha, map2.get(cha) + 1);
    } else {
      map2.set(cha, 1);
    }
  }

  // map1과 map2 비교하기
  for (let [key, value] of map1) {
    if (map2.has(key)) {
      if (map2.get(key) === value) {
        continue;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return answer;
}
