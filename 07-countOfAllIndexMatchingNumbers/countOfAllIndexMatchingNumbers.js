function countOfAllIndexMatchingNumbers(nums) {
  const newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === nums[i]) newArray.push(i);
  }
  return newArray.length;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
