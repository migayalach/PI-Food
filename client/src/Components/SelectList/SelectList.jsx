// HOOK'S
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// COMPONENTS

// REDUX
import { getAllDiets } from "../../Redux/actions";

// LIBRARY
import { Select } from "antd";

// CSS

// JAVASCRIP

function SelectList({ flag, onChangeSearch }) {
  const dispatch = useDispatch();
  const { Option } = Select;
  const selectDiets = useSelector((state) => state.diets);
  const order = ["", "ASC", "DESC"];

  const optionValue = (type, value) => {
    onChangeSearch(type, value);
  };

  useEffect(() => {
    dispatch(getAllDiets());
  }, []);

  return (
    <>
      {flag === "order" && (
        <Select
          placeholder="Please select"
          defaultValue={[]}
          onChange={(value) => optionValue("order", value)}
        >
          {order?.map((index) => (
            <Option key={index} value={index}>
              {index}
            </Option>
          ))}
        </Select>
      )}
      {flag == "diets" && (
        <Select
          placeholder="Please select"
          defaultValue={[]}
          onChange={(value) => optionValue("diets", value)}
        >
          {selectDiets?.map(({ idDiet, nameDiet }, index) => (
            <Option key={index} value={idDiet}>
              {nameDiet}
            </Option>
          ))}
        </Select>
      )}
    </>
  );
}

export default SelectList;
