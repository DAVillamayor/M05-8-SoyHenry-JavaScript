function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  const arrayPorDos = array.map((element) => element * 2);
  return arrayPorDos;
}

module.exports = duplicarElementos;
