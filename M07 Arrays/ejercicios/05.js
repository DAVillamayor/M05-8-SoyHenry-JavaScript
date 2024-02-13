function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  const stringLargo = array.find((element) => typeof element === 'string' && element.length >= 5);
  return stringLargo;
}

module.exports = obtenerPrimerStringLargo;

ArrayDeCinco = ['123', '12345', '123456789', '1234567', '12345',]

ArrayDeCuatro = ['123', '123', '12', '1', '1234',]

obtenerPrimerStringLargo(ArrayDeCinco)
obtenerPrimerStringLargo(ArrayDeCuatro)

console.log(obtenerPrimerStringLargo(ArrayDeCinco))
console.log(obtenerPrimerStringLargo(ArrayDeCuatro))

