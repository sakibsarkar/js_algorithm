/**
 * Calculate the greatest common divisor (GCD) of two numbers
 * @param {number} a the first number
 * @param {number} b the second number
 * @returns {number} the GCD of a and b
 * The GCD of two numbers is the largest number that divides both of them
 * without leaving a remainder
 * GCD(a, b) = GCD(b, a % b)
 */
const gcd = (a, b) => {
  // Base case: if b is 0, return a
  if (b === 0) {
    return a;
  }
  // Recursive case: gcd(b, a % b)
  // The GCD of a and b is the same as the GCD of b and the remainder of a divided by b
  return gcd(b, a % b);
};

const multipleNumberGcd = (...nums) => {
  let gcdResult = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    gcdResult = gcd(num, gcdResult);
  }
  return gcdResult;
};

console.time("gcd");
console.log(multipleNumberGcd(12, 20, 120, 48, 40, 72));
console.timeEnd("gcd");

module.exports = {
  multipleNumberGcd,
  gcd,
};
