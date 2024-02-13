function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero <= 1 || !Number.isInteger(numero)) {
    return false;
  } for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  } return true;
} 


module.exports = esNumeroPrimo;
esNumeroPrimo(2)
esNumeroPrimo(3)
esNumeroPrimo(4)   
esNumeroPrimo(5)  
esNumeroPrimo(6)  
esNumeroPrimo(7)   
esNumeroPrimo(8)
esNumeroPrimo(9)
esNumeroPrimo(9)
esNumeroPrimo(10)
esNumeroPrimo(11)