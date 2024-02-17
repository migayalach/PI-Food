// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import ShowDIets from "../ShowDIets/ShowDIets";

// REDUX
import { getAllDiets } from "../../../Redux/actions";

// LIBRARY
import { Select } from "antd";

// CSS

// JAVASCRIP

const { Option } = Select;

function DietsForm({ handleHookDiets }) {
  const dispatch = useDispatch();
  const selectDiets = useSelector((state) => state.diets);
  const [dataDiets, setDataDiets] = useState([]);

  const handleAddDiet = (event) => {
    if (event) {
      const infoDiets = selectDiets.find(({ idDiet }) => idDiet === +event);
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
      <Select
        style={{
          width: "100%",
        }}
        placeholder="Please select"
        defaultValue={[]}
        onChange={handleAddDiet}
      >
        {selectDiets?.map(({ idDiet, nameDiet }, index) => (
          <Option key={index} value={idDiet}>
            {nameDiet}
          </Option>
        ))}
      </Select>
      <ShowDIets dataDiets={dataDiets} removeDiet={handleRemoveDiet} />
    </div>
  );
}

export default DietsForm;
