import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import Pagination from "./Pagination";

const ItemsPerPage = 9;

const CardsContainer = ({ onClose }) => {
  const recipe = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * ItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
  const currentRecipes = recipe.slice(indexOfFirstItem, indexOfLastItem);
  
  return (
    <div>
      {currentRecipes.map(({ id, title, image, summary, diets }) => (
        <Card
          key={id}
          id={id}
          title={title}
          image={image}
          // summary={summary}
          diets={diets}
          onClose={onClose}
        />
      ))}
      <Pagination
        dataLength={recipe.length}
        itemsPerPage={ItemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CardsContainer;
