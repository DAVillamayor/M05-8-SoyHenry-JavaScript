function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

module.exports = obtenerMayor;

obtenerMayor(13,2)
obtenerMayor(2,13)
obtenerMayor(2,2)