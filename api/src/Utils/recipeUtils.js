const newArrRecipe = (arr) =>
  arr.map((data) => {
    return {
      id: data.id,
      title: data.title,
      image: data.image,
      summary: data.summary,
      diets: data.diets,
    };
  });

const responseBdd = (arr) => {
  const aux = arr.map(({ id, name, image, resumenPlato, nivel, pasoApaso, created, diets }) => {
      const diet = diets.map(({ name }) => name);
      return {
        id, name, image, resumenPlato, nivel, pasoApaso, created, diets: diet
      }
    }
  );
  return aux;
};

const searchApi = (nombre, arr) => {
  return arr.filter(({title}) => title == nombre);
};

module.exports = {
  newArrRecipe,
  responseBdd,
  searchApi
};
