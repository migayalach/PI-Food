// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import Cards from "../../Components/Cards";
import Filter from "../../Components/Filter/Filter";
import Pagination from "../../Components/Pagination/Pagination";

// REDUX
import { getRecipeAll } from "../../Redux/actions";

// CSS

// JAVASCRIP

function Home() {
  const dispatch = useDispatch();
  const selectRecipe = useSelector((state) => state.recipes);
  const pages = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(getRecipeAll());
  }, []);

  return (
    <>
      <Filter />
      <Cards recipes={selectRecipe} />
      <Pagination pages={pages} />
    </>
  );
}

export default Home;
