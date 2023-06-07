function countOfAllBooleansAndStrings(arr) {
  let calcString = [];
  let calcBoolean = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") calcString.push(arr[i]);
    if (typeof arr[i] === "boolean") calcBoolean.push(arr[i]);
  }
  return calcString.length + calcBoolean.length;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
