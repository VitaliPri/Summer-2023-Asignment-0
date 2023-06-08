function sumOfMinimumAndMaximum(nums) {
  let maximum = -Infinity;
  let minimum = Infinity;

  for (let number of nums) {
    if (number > maximum) maximum = number;
    if (number < minimum) minimum = number;
  }

  return maximum + minimum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
