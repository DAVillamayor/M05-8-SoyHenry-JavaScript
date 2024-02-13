function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const stringSinEspacios = string.replace(/\s/g, '').toLowerCase();
  const longitud = stringSinEspacios.length;

  for (let i = 0; i < longitud / 2; i++) {
    if (stringSinEspacios[i] !== stringSinEspacios[longitud - 1 - i]) {
      return false;
    }
  }

  return true;

}


module.exports = esPalindromo;

esPalindromo('Anita lava la tina')

esPalindromo('Amigos de la tierra')