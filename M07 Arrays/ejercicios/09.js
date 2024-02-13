function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  this.array = Array
  var sonMayores = array.filter(num => num > 10).length;
  return sonMayores;
}

module.exports = contarElementosMayoresA10;

contarElementosMayoresA10([22,5,56,33,2,8,4])