function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  if(Number.isInteger(numero)){
  return true;
  }  else {return false;
  }
}

module.exports = esNumeroEntero;


esNumeroEntero(2);

esNumeroEntero(2.55);