const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
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
