function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
   if(num % 2 !== 0) {
    return true;
  } if(num % 2 === 0){
    return false;
  }
}

module.exports = esImpar;

esImpar(3);

esImpar(4);