function clearDiets(diets) {
  let length = diets.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (diets[i] === diets[j]) {
        for (let k = j; k < length; k++) {
          diets[k] = diets[k + 1];
        }
        length--;
        i--;
      }
    }
  }
  return diets.filter((index) => index !== undefined);
}

function reviewDiets(dietsResult, dataDietsBdd) {
  const aux = [];
  for (let i = 0; i < dietsResult.length; i++) {
    if (!dataDietsBdd.includes(dietsResult[i])) {
      aux.push(dietsResult[i]);
    }
  }
  return aux;
}

module.exports = {
  clearDiets,
  reviewDiets,
};
