const clearArray = (results) => {
  let arr = [];
  for (let i = 0; i < results.length; i++) {
    if (i === 0) {
      arr = [...results[i].diets];
    } else {
      arr = alterArray(arr, results[i].diets);
    }
  }
  return newObj(arr);
};

const alterArray = (arr, arrParams) => {
  for (let i = 0; i < arrParams.length; i++) {
    if (!arr.includes(arrParams[i])) {
      arr.push(arrParams[i]);
    }
  }
  return arr;
};

const newObj = (arr) =>
  arr.map((diet) => {
    return { name: diet };
  });

const resCreateRecipe = (
  { id, created, name, image, resumenPlato, nivel, pasoApaso },
  diet
) => (obj = { id, created, name, image, resumenPlato, nivel, pasoApaso, diet });

module.exports = {
  clearArray,
  resCreateRecipe
};
