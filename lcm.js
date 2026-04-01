const { gcd } = require("./euclidean.gcd");

/**
 * Calculate the least common multiple (LCM) of two numbers
 * @param {number} a first number
 * @param {number} b second number
 * @returns {number} the LCM of a and b
 * GCM(a,b) x LCM(a,b) = a x b
 * => LCM(a,b) = a x b / GCM(a,b)
 */
const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

console.time("lcm");
console.log(lcm(15, 6));
console.timeEnd("lcm");
