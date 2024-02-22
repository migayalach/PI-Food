// HOOK'S
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// COMPONENTS
import SelectList from "../../SelectList/SelectList";

// REDUX
import { filterData } from "../../../Redux/actions";

// LIBRARY
import { Button, Form, Input, Checkbox } from "antd";

// CSS
import "./container.css";

// JAVASCRIP

function Conteiner() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState({
    name: "",
    healthScore: false,
    order: "",
    diets: 0,
  });

  const onChange = (event) => {
    setSearch({
      ...search,
      ["healthScore"]: event.target.checked,
    });
  };

  const onChangeSearch = (eventTargetName, event) => {
    setSearch({
      ...search,
      [eventTargetName]:
        eventTargetName === "name" ? event.target.value : event,
    });
  };

  const handleSubmit = () => {
    dispatch(filterData(search));
  };

  return (
    <Form
      name="basic"
      autoComplete="off"
      className="form-container"
      onFinish={handleSubmit}
    >
      <Form.Item label="Name" name="name">
        <Input onChange={(event) => onChangeSearch("name", event)} />
      </Form.Item>

      <div>
        <label htmlFor="health-score">Health Score</label>
        <Checkbox onChange={onChange} />
      </div>

      <div>
        <label htmlFor="order">Order</label>
        <SelectList flag="order" onChangeSearch={onChangeSearch} />
      </div>

      <div>
        <label htmlFor="diets">Diets</label>
        <SelectList flag="diets" onChangeSearch={onChangeSearch} />
      </div>

      <Button type="primary" htmlType="submit">
        Search
      </Button>
    </Form>
  );
}

export default Conteiner;
