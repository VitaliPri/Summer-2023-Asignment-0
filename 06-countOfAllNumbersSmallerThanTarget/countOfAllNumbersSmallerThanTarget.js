function countOfAllNumbersSmallerThanTarget(nums, target) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) newArray.push(nums[i]);
  }
  return newArray.length;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
