function pairSum(nums, target) {
  try {
    if (nums.length <= 1) {
      throw true;
    }
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) return true;
      }
    }
    return false;
  } catch (err) {
    console.log("Try to increase size of an array!");
  }
}

// Do not edit this line;
module.exports = pairSum;
