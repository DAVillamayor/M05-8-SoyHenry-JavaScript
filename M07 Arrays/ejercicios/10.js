function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  this.array = Array
  return array.reduce((maxIndice, numero, indice, arr) => {
    return numero > arr[maxIndice] ? indice : maxIndice; }, 0);
}

module.exports = encontrarIndiceMayor;


encontrarIndiceMayor([3, 7, 1, 11, 5])