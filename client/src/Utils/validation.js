const validation = (data) => {
  const errors = {};

  // NOMBRE
  const maxLength = 25;
  const minLength = 10;
  if (data.nombre.length === 0 || data.nombre.length < minLength) {
    if (data.nombre.length === 0) {
      errors.nombre = "Por favor introduce un nombre, no puede estar vacio";
    } else {
      errors.nombre = "Por favor introduce un nombre mas descriptivo";
    }
  } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑüÜ\s-]{1,50}$/.test(data.nombre)) {
    errors.nombre = "No se permiten el uso de caracteres especiales";
  }

  if (data.nombre.length > maxLength) {
    errors.nombre = `El nombre no puede tener mas de ${maxLength} letras`;
  }

  //RESUMEN
  const maxLengthRes = 500;
  const minLengthRes = 150;
  if (data.resumen.length === 0 || data.resumen.length < minLengthRes) {
    if (data.resumen.length === 0) {
      errors.resumen = "Por favor introduce un resumen, no puede estar vacio";
    } else {
      errors.resumen = "Por favor introduce un resumen mas descriptivo";
    }
  }

  if (data.resumen.length > maxLengthRes) {
    errors.resumen = `El resumen no puede tener mas de ${maxLengthRes} letras`;
  }

  //CALIFICACION
  const maxQuali = 100;
  const minQuali = 0;
  if (!/^\d+$/.test(data.nivelComida)) {
    if (data.nivelComida.length === 0) {
      errors.nivelComida = `Por favor introduce una calificación`;
    } else {
      errors.nivelComida = `Solo se deben introducir numeros`;
    }
  }
  if (data.nivelComida < minQuali) {
    errors.nivelComida = `La calificación de la receta debe ser mayor o igual a 0`;
  }
  if (data.nivelComida > maxQuali) {
    errors.nivelComida = `La calificación de la receta debe ser menor o igual a 100'`;
  }

  //PASO A PASO
  if (data.pasoApaso.length === 0 || data.pasoApaso.length < minLengthRes) {
    if (data.pasoApaso.length === 0) {
      errors.pasoApaso =
        "Por favor introduce el paso a paso en la preparación de la receta, no puede estar vacio";
    } else {
      errors.pasoApaso =
        "Por favor introduce el paso a paso en la preparación de la receta mas descriptiva";
    }
  }

  if (data.pasoApaso.length > maxLengthRes) {
    errors.pasoApaso = `El paso a paso no puede tener mas de ${maxLengthRes} letras`;
  }

  // LINK
  if (data.imagen.length === 0) {
    errors.imagen = `Por favor ingrese una direccion URL para poder guardar la referencia`;
  } else if (!/^(https?:\/\/)?[\w\-]+(\.[\w\-]+)/.test(data.imagen)) {
    errors.imagen = `El enlace no cumple los requirimientos solicitados, por favor verifique lo introducido`;
  }

  // DIETA
  if (data.dietas.length < 1) {
    errors.dietas = `Por favor seleccione minimamente una dieta`;
  }

  return errors;
};

export default validation;
