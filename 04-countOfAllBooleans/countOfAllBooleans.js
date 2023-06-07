function countOfAllBooleans(arr) {
  let calc = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "boolean") continue;
    calc.push(arr[i]);
  }
  return calc.length;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
