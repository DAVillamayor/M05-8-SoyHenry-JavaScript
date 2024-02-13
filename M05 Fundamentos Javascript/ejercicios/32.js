function deEuroAdolar(euro) {
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
  if (typeof euro === 'number') {
        let valorEnDolares = euro * 1.20;
    return valorEnDolares;
  } else {console.log("Error: Por favor, ingresa un número.");
  }
}

module.exports = deEuroAdolar;


deEuroAdolar(15)