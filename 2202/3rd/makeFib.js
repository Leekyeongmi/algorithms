function makeFib() {
  let count = 0;

  function inner(num) {
    if (num <= 1) return num;
    return inner(num - 1) + inner(num - 2);
  }

  return function () {
    count++;
    return inner(count - 1);
  };
}

const fib = makeFib();
console.log(fib());
