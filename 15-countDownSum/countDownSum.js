/* this keyword in a function refers to global (window)
    this keyword in a function inside of an object refers to object itself
  this keyword in a funcion, which inside another function in an object it refers to global, not to object
*/

class MySolution {
  countDownSum(num) {
    // 1. Base Case, when it should stop
    if (num === 1) return 1;
    // 2. Keep calling function until it reaches base case
    else return num + this.countDownSum(num - 1);
  }
}

// need to create new copy of the MySolution class and assign to variable and only then run the function on that variable. Why we can not run it on same class.

// Do not edit this line;
let StudentSolution = MySolution;

module.exports = StudentSolution;
