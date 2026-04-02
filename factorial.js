/**
 * Calculate the factorial of a number
 * @param {number} numb the number to calculate the factorial of
 * @returns {number} the factorial of numb
 */
const factorial = (numb) => {
  if (numb === 0 || numb === 1) return numb;

  return factorial(numb - 1) * numb;
};

console.time("factorial");
console.log(factorial(5));
console.timeEnd("factorial");

module.exports = factorial;
