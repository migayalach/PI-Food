import React from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/Landing.css"
import fondo from "../Image/fondo.jpg"


const Landing = () => {
  return (
    <div className="container">
      <img className="img-fondo" src={fondo} alt="Fondo de pantalla" />
      <Link to="/home">
        <button className="btn-login">
          Ingresar
        </button>
      </Link>
    </div>
  );
};

export default Landing;
