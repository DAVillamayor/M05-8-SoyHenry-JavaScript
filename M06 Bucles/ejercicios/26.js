function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  const str1SinEspacios = str1.replace(/\s/g, '').toLowerCase();
  const str2SinEspacios = str2.replace(/\s/g, '').toLowerCase();

  if (str1SinEspacios.length !== str2SinEspacios.length) {
    return false;
  }

  const str1Ordenado = str1SinEspacios.split('').sort().join('');
  const str2Ordenado = str2SinEspacios.split('').sort().join('');

  return str1Ordenado === str2Ordenado;
}

module.exports = esAnagrama;
