function isPalindrome(word) {
  let arrayReverse = word.split("").reverse().join("");
  if (word === arrayReverse) return true;
  else return false;
}

// Do not edit this line;
module.exports = isPalindrome;
