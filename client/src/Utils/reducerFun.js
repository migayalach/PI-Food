const filterDiets = (arr, diet) => {
  const aux = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j in arr[i]) {
      if (arr[i].diets.includes(diet)) {
        aux.push(arr[i]);
        break;
      }
    }
  }
  return aux;
};

module.exports = { filterDiets };
