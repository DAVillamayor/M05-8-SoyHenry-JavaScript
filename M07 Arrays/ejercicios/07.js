function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const arrayMayusculas = array.map((element) => {
    if (typeof element === 'string') {
      return element.toUpperCase();
    } else {
      return element;
    }
  });

  return arrayMayusculas;
}


module.exports = convertirStringAMayusculas;
