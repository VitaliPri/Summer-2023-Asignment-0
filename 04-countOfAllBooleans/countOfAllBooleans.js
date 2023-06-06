function countOfAllBooleans(arr) {
  counter = 0;
  arr.forEach((item) => {
    if (toString.call(item) == "[object Boolean]") counter++;
  });

  return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
