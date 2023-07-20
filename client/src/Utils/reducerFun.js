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

const searchData = (arr, data) => {
  if (data === "api") {
    return arr.filter(({id})=> isNaN(id)===false);
  } else if (data === "create") {
    return arr.filter(({id})=> isNaN(id)===true);
  } else {
    return arr;
  }
};


module.exports = { filterDiets, searchData };