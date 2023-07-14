import React from "react";
import { Link } from "react-router-dom";
import validation from "../Utils/validation";

const Landing = () => {
  return (
    <div>
      <Link to="/home">
        <button>
          Ingresar FORMULARIO DE REGISTRO O BOTON DE INGRESO DIRECTO
        </button>
      </Link>
    </div>
  );
};

export default Landing;
