import CardsContainer from "../../Components/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../Redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div>
      <h1>Estamos en Home</h1>
      <CardsContainer />
    </div>
  );
};

export default Home;
