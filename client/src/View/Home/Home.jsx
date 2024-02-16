// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import Cards from "../../Components/Cards";
import Filter from "../../Components/Filter/Filter";
import PaginationComponent from "../../Components/PaginationComponent/PaginationComponent";

// REDUX
import { getRecipeAll } from "../../Redux/actions";

// CSS
import "./home.css";

// JAVASCRIP

function Home() {
  const dispatch = useDispatch();
  const selectRecipe = useSelector((state) => state.recipes);
  const pages = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(getRecipeAll());
  }, []);

  return (
    <div className="conteiner-home">
      <div>
        <Filter />
      </div>
      <div>
        <Cards recipes={selectRecipe} />
      </div>
      <div>
        <PaginationComponent pages={pages} />
      </div>
    </div>
  );
}

export default Home;
// className="conteiner-cards-pagination"
