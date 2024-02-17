// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// COMPONENTS
import ConteinerForm from "../../../Components/FormDiets/ConteinerForm/ConteinerForm";
import ButtonSuccess from "../../../Components/ButtonSuccess/ButtonSuccess";

// REDUX
import { getAllDiets, postRecipe } from "../../../Redux/actions";

// LIBRARY
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
} from "antd";

// CSS

// JAVASCRIP
import { validationRecipe } from "./validationRecipe";
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

function CreateRecipe() {
  const successGlobal = useSelector((state) => state.success);
  const dispatch = useDispatch();
  const navigation = useHistory();
  const [recipe, setRecipe] = useState({
    nameRecipe: "",
    imageRecipe: "",
    summary: "",
    healthScore: 0,
    created: true,
    diets: [],
  });
  const [error, setError] = useState({});

  const handleFormRecipe = (eventTargetName, event) => {
    if (eventTargetName === "healthScore") {
      setRecipe({ ...recipe, [eventTargetName]: event });
      setError(validationRecipe({ ...recipe, [eventTargetName]: event }));
    } else {
      setRecipe({ ...recipe, [eventTargetName]: event.target.value });
      setError(
        validationRecipe({ ...recipe, [eventTargetName]: event.target.value })
      );
    }
  };

  const handleHookDiets = (dataArray) => {
    setRecipe({ ...recipe, diets: dataArray });
    setError(validationRecipe({ ...recipe, diets: dataArray }));
  };

  const handleSendRecipe = (event) => {
    event.preventDefault();
    dispatch(postRecipe(recipe));
  };

  useEffect(() => {
    dispatch(getAllDiets());
  }, []);

  useEffect(() => {
    if (successGlobal) {
      navigation.push("/home");
    }
  }, [successGlobal]);
  
  return (
    <Form
      {...formItemLayout}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        label="Name recipe"
        name="nameRecipe"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <Input onChange={(event) => handleFormRecipe("nameRecipe", event)} />
      </Form.Item>

      <Form.Item
        label="Image recipe"
        name="imageRecipe"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <Input onChange={(event) => handleFormRecipe("imageRecipe", event)} />
      </Form.Item>

      <Form.Item
        label="Summary"
        name="summary"
        rules={[
          {
            required: true,
            message: "Please input!",
          },
        ]}
      >
        <Input.TextArea
          onChange={(event) => handleFormRecipe("summary", event)}
        />
      </Form.Item>

      <Form.Item
        label="HealthScore"
        name="healthScore"
        rules={[
          {
            type: "number",
            min: 0,
            max: 100,
          },
        ]}
      >
        <InputNumber
          onChange={(event) => handleFormRecipe("healthScore", event)}
        />
      </Form.Item>

      <ConteinerForm handleHookDiets={handleHookDiets} />

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CreateRecipe;

// <form onSubmit={handleSendRecipe}>
//   <div>
//     <label htmlFor="name-recipe">Name recipe</label>
//     <input type="text" name="nameRecipe" onChange={handleFormRecipe} />
//     {error.nameRecipe && <p>{error.nameRecipe}</p>}
//   </div>
//   <div>
//     <label htmlFor="image">Image recipe</label>
//     <input type="text" name="imageRecipe" onChange={handleFormRecipe} />
//     {error.imageRecipe && <p>{error.imageRecipe}</p>}
//   </div>
//   <div>
//     <label htmlFor="summary">Summary</label>
//     <textarea
//       type="text"
//       name="summary"
//       onChange={handleFormRecipe}
//       rows="4"
//       cols="50"
//     ></textarea>
//     {error.summary && <p>{error.summary}</p>}
//   </div>
//   <div>
//     <label htmlFor="health-score">HealthScore</label>
//     <input
//       type="number"
//       name="healthScore"
//       onChange={handleFormRecipe}
//       min="0"
//       max="100"
//     />
//     {error.healthScore && <p>{error.healthScore}</p>}
//   </div>
//   <ConteinerForm handleHookDiets={handleHookDiets} />
//   {error.diets && <p>{error.diets}</p>}
//   {Object.keys(error).length === 0 && (
//     <ButtonSuccess text="Send" action="createRecipe" type="submit" />
//   )}
// </form>
