const factorial = (numb) => {
  if (numb === 0 || numb === 1) return numb;
  return factorial(numb - 1) * numb;
};

/**
 * Calculate the permutation of n items taken r at a time
 * @param {number} n the number of items to choose from
 * @param {number} r the number of items to choose
 * @returns {number} the permutation of n items taken r at a time
 * The permutation of n items taken r at a time is the number of ways to arrange r items from a set of n items
 * It is calculated as n! / r!
 */
const permutation = (n, r) => {
  return factorial(n) / factorial(r);
};

console.log(permutation(6, 2));
