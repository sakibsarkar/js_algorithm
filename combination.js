const factorial = require("./factorial");

const combination = (n, r) => {
  return factorial(n) / (factorial(r) * factorial(n - r));
};

console.time("combination");
console.log(combination(6, 4));
console.timeEnd("combination");
