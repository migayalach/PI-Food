import { useState, useEffect } from "react";
import validation from "../Utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe, getDiets } from "../Redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDiets());
  }, []);

  const resDiets = useSelector((diet) => diet.diets);

  const [data, setData] = useState({
    nombre: "",
    resumen: "",
    nivelComida: "",
    pasoApaso: "",
    imagen: "",
    dietas: [],
  });

  const [errors, setErrors] = useState({});

  // PRIMERO PREGUNTAR SI EXISTE LA DIETA EN EL ARRAY CON FINE
  //   SI NO EXISTE AGREGAR PUSH
  //   SI EXISTE ELIMINARLO CON FILTER Y ACTUALIZAR EL ARRAY
  const handleChange = (event) => {
    if (event.target.name === "dieta") {
      let aux = event.target.value;
      if (aux.length > 0) {
        if (!data.dietas.includes(aux)) {
          setData({
            ...data,
            dietas: [...data.dietas, aux],
          });
        } else {
          const arr = data.dietas.filter((index) => index !== aux);
          setData({
            ...data,
            dietas: arr,
          });
          setErrors(validation({ ...data, dietas: arr }));
        }
      }
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
      setErrors(
        validation({ ...data, [event.target.name]: event.target.value })
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRecipe(data));
    window.location.reload();
  };

  // const delEspacios = (str, name) => {
  //   const cadena = str.trim();
  //   setData({
  //     ...data,
  //     [name]: cadena,
  //   });
  // }

  // const handleKeyDown = () => {
  //   const maxLength = 10;
  //   const nombreInput = document.getElementById('nombre');
  //   nombreInput.maxLength = maxLength;
  // };

  return (
    <div>
      <h1>Estamos en Form</h1>
      <h2>ACA CREAMOS UN NUEVO ITEM</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={data.nombre}
          onChange={handleChange}
          // onKeyDown={handleKeyDown}
        />
        {errors.nombre && <p>{errors.nombre}</p>}
        <br />
        <br />
        <label htmlFor="resumen">Resumen del plato: </label>
        <input
          type="text"
          name="resumen"
          value={data.resumen}
          onChange={handleChange}
        />
        {errors.resumen && <p>{errors.resumen}</p>}
        <br />
        <br />
        <label htmlFor="nivelComida">Nivel de comida saludable: </label>
        <input
          type="text"
          name="nivelComida"
          value={data.nivelComida}
          onChange={handleChange}
        />
        {errors.nivelComida && <p>{errors.nivelComida}</p>}
        <br />
        <br />
        <label htmlFor="pasoApaso">Paso a paso: </label>
        <input
          type="text"
          name="pasoApaso"
          value={data.pasoApaso}
          onChange={handleChange}
        />
        {errors.pasoApaso && <p>{errors.pasoApaso}</p>}
        <br />
        <br />
        <label htmlFor="imagen">Imagen: </label>
        <input
          type="text"
          name="imagen"
          value={data.imagen}
          onChange={handleChange}
        />
        {errors.imagen && <p>{errors.imagen}</p>}
        <br />
        <br />

        <label htmlFor="dietas">Dietas: </label>
        <br />
        <br />
        <select name="dieta" onChange={handleChange}>
          <option></option>
          {resDiets.map(({ id, name }) => (
            <option key={id} value={data.name} onChange={handleChange}>
              {name}
            </option>
          ))}
        </select>
        {data.dietas.length > 0 ? <p>{data.dietas}</p> : <p>{errors.dietas}</p>}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;