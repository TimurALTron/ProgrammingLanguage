const topScore = Object.create(null);
topScore.true = true;
topScore.false = false;

for (let op of ["+", "-", "/", "*", "==", "<", ">"]) {
  topScore[op] = Function("a, b", `return a ${op} b;`);
}

topScore.print = function (value) {
  console.log(value);
  return value;
};

topScore.array = function (...args) {
  let array = [...args];

  return array;
};

topScore.length = function (array) {
  return array.length;
};

topScore.element = function (array, n) {
  return array[n];
};

export { topScore };
