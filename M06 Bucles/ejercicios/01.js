function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  return a === b && a < 0 && b < 0;
}

module.exports = esIgualYNegativo;

esIgualYNegativo(-5, -5)
esIgualYNegativo(-5, 5)
esIgualYNegativo(0, 0)