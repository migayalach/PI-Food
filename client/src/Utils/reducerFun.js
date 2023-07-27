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
    return arr.filter(({ id }) => isNaN(id) === false);
  } else if (data === "create") {
    let aux = arr.filter(({ id }) => isNaN(id) === true);
    return aux;
  } else {
    return arr;
  }
};

const orderScore = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let aux = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j].healthScore > array[aux].healthScore) aux = j;
    }
    let temp = array[aux];
    array[aux] = array[i];
    array[i] = temp;
  }
  return array;
};

const order = (array) => {
  let n = array.length,
    aux = 0,
    temp = 0;
  for (let i = 0; i < n - 1; i++) {
    aux = i;
    for (let j = i + 1; j < n; j++) {
      let valor1 = valor(array[j].title);
      let valor2 = valor(array[aux].title);
      if (valor1 < valor2) aux = j;
    }
    temp = array[aux];
    array[aux] = array[i];
    array[i] = temp;
  }
  return array;
};

const valor = (text) => {
  let character = text.split("")[0];
  return character.charCodeAt();
};

const orderAscDes = (arr, ope) => {
  if (ope === "orderAZ") {
    return order(arr);
  }
  // else if(ope === "orderZA"){
  //   let res = order(arr);
  //   return res.reverse();
  // }
};


module.exports = { filterDiets, searchData, orderScore, orderAscDes };
