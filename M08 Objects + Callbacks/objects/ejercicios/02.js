function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
   const nuevoObjeto = { ...objeto };
   if (nuevoObjeto.hasOwnProperty(propiedad)) {
     nuevoObjeto[propiedad] = valor;
   } else {
     nuevoObjeto[propiedad] = valor;
   }
   return nuevoObjeto;
 }

module.exports = actualizarValorPropiedad;
