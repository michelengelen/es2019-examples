const arr = [1, 2, [3, [4, 5]], [], 6];

const recursiveCallback = x =>
  Array.isArray(x)
    ? x.flatMap(recursiveCallback)
    : [x * 2, x * 3];

console.log(arr.flatMap(recursiveCallback));
