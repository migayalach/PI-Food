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
  let pages = useSelector((state) => state.page);
  if (pages === undefined) {
    pages = 1;
  }

  const [page, setPage] = useState(1);
  const pageCurrent = (data) => {
    setPage(data);
  };

  useEffect(() => {
    dispatch(getRecipeAll());
  }, []);

  return (
    <div className="conteiner-home">
      <div>
        <Filter />
      </div>
      <div>
        <Cards recipes={selectRecipe} page={page} />
      </div>
      <div>
        <PaginationComponent pages={pages} pageCurrent={pageCurrent} />
      </div>
    </div>
  );
}

export default Home;
