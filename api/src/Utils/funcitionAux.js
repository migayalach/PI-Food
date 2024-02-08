const newNum = (num) => {
    let numberDecimal = parseFloat(num);
    if (numberDecimal < 0) {
      numberDecimal *= -1;
    } else {
      numberDecimal;
    }
    if (numberDecimal > 100) {
      throw Error`Lo siento no puede haber calificaciones de mas de 100 puntos`;
    }
  };