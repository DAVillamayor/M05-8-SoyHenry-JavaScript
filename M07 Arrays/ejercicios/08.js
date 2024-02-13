function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  this.array = Array
 var paresArray = array.filter(num =>  num % 2 === 0);
return paresArray;
}

module.exports = filtrarNumerosPares;


filtrarNumerosPares([3,8,4,9,12])

filtrarNumerosPares([3,9,13])

filtrarNumerosPares([8,4,12])