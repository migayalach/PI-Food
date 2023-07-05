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

module.exports = {
  clearArray,
};



// https://api.spoonacular.com/recipes/complexSearch?apiKey=ad4a2ed956bf4120810ff3d859380cbf&addRecipeInformation=true

// const results = [
//   {
//     diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
//   },
//   {
//     diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
//   },
//   {
//     diets: ["lacto ovo vegetarian"],
//   },
//   {
//     diets: ["gluten free", "dairy free"],
//   },
//   {
//     diets: [
//       "gluten free",
//       "dairy free",
//       "paleolithic",
//       "lacto ovo vegetarian",
//       "primal",
//       "vegan",
//     ],
//   },
//   {
//     diets: [
//       "gluten free",
//       "dairy free",
//       "paleolithic",
//       "lacto ovo vegetarian",
//       "primal",
//       "whole 30",
//       "vegan",
//     ],
//   },
//   {
//     diets: ["gluten free", "dairy free"],
//   },
//   {
//     diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
//   },
//   {
//     diets: ["gluten free"],
//   },
//   {
//     diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
//   },
// ];

// console.log(mapeando(results));
// // ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan", "paleolithic", "primal", "whole 30",]
