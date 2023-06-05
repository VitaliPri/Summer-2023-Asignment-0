function titleCaseEdit(title) {
  const arr = title.split(" ");
  const arrNew = [];

  for (const name of arr) {
    arrNew.push(name[0].toUpperCase() + name.slice(1));
  }

  return arrNew.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;
