class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let arr = Array.from(nums);
    let mid = Math.floor(arr.length / 2);
    let first = 0;
    let last = arr.length - 1;

    if (target == arr[mid]) return true;
    else if (target < arr[mid]) {
      arr = arr.splice(first, mid);
      return this.binarySearch(arr, target);
    } else if (target > arr[mid]) {
      arr = arr.splice(mid + 1, last);
      return this.binarySearch(arr, target);
    } else return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
