function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if (valor) {
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }
}

module.exports = esVerdadero;

esVerdadero(true)
esVerdadero(false)
esVerdadero(0)
esVerdadero(1)