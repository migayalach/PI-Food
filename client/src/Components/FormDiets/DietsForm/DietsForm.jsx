// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS

// REDUX
import { getAllDiets } from "../../../Redux/actions";

// CSS

// JAVASCRIP

function DietsForm() {
  const dispatch = useDispatch();
  const selectDiets = useSelector((state) => state.diets);
  const [dataDiets, setDataDiets] = useState([]);

  const handleFormDiets = (event) => {
    const dataId = event.target.value;
    const infoDiets = selectDiets.find(({ idDiet }) => idDiet === +dataId);
    setDataDiets([...dataDiets, infoDiets]);
  };

  useEffect(() => {
    dispatch(getAllDiets());
  }, []);

  return (
    <div>
      <label htmlFor="diets">Diets</label>
      <select name="diets" onChange={handleFormDiets}>
        <option value=""></option>
        {selectDiets.map(({ idDiet, nameDiet }, index) => (
          <option key={index} value={idDiet} name={nameDiet}>
            {nameDiet}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DietsForm;
