function productOfAnyAmountOfNumbers(...args) {
  let product = 1;
  for (let i = 0; i < args.length; i++) product *= args[i];
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
