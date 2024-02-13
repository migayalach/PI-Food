// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import ShowDIets from "../ShowDIets/ShowDIets";

// REDUX
import { getAllDiets } from "../../../Redux/actions";

// CSS

// JAVASCRIP

function DietsForm({ handleHookDiets }) {
  const dispatch = useDispatch();
  const selectDiets = useSelector((state) => state.diets);
  const [dataDiets, setDataDiets] = useState([]);

  const handleAddDiet = (event) => {
    if (event.target.value) {
      const infoDiets = selectDiets.find(
        ({ idDiet }) => idDiet === +event.target.value
      );
      setDataDiets([...dataDiets, infoDiets]);
    }
  };

  const handleRemoveDiet = (idDiet) => {
    setDataDiets(dataDiets.filter((index) => index.idDiet !== +idDiet));
  };

  useEffect(() => {
    dispatch(getAllDiets());
  }, []);

  useEffect(() => {
    handleHookDiets(dataDiets.map(({ idDiet }) => idDiet));
  }, [dataDiets]);

  return (
    <div>
      <label htmlFor="diets">Diets</label>
      <select name="diets" onChange={handleAddDiet}>
        <option></option>
        {selectDiets?.map(({ idDiet, nameDiet }, index) => (
          <option key={index} value={idDiet} name={nameDiet}>
            {nameDiet}
          </option>
        ))}
      </select>
      <ShowDIets dataDiets={dataDiets} removeDiet={handleRemoveDiet} />
    </div>
  );
}

export default DietsForm;
