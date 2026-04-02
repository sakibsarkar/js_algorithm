const factorial = require("./factorial");

/**
 * Calculate the number of permutations of n items taken r at a time
 * @param {number} n the total number of items
 * @param {number} r the number of items to choose
 * @returns {number} the number of permutations
 * The number of permutations of n items taken r at a time is
 * the factorial of n divided by the factorial of n - r
 */
const permutation = (n, r) => {
  return factorial(n) / factorial(n - r);
};
console.time("permutation");
console.log(permutation(4, 3));
console.timeEnd("permutation");
