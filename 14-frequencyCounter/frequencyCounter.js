function frequencyCounter(word) {
  let obj = {};
  for (let i = 0; i < word.length; i++) {
    if (obj[word[i]]) obj[word[i]] += 1;
    else obj[word[i]] = 1;
  }
  return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;
