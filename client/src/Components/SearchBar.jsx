import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  const callback = () => {
    onSearch(id);
    setId("");
  };

  const personajeAleatorio = () => {
    const id = Math.floor(Math.random() * (100 - 0 + 1) + 0);
    onSearch(id);
    setId("");
  };

  return (
    <div>
      <input type="seach" onChange={handleChange} value={id} />
      <button onClick={callback}>Agregar</button>
      <button onClick={personajeAleatorio}>Random</button>
    </div>
  );
};

export default SearchBar;
