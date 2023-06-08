function sumOfAllOddNumbers(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 1) count++;
  }
  return count;

  // let countOdd = 0;
  // let odd = nums.forEach(function (i) {
  //   if (nums[i] % 2 == 1) countOdd++;
  // });
  // console.log(countOdd);
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
