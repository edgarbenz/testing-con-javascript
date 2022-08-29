const promedioNormal = function promedio(...array) {
  console.log(array);
  if (array.length == 0) {
    throw Error('The input must be an expanded array');
  }

  const promedioCalc = array.reduce((total, currentValue) => total + currentValue, 0) / array.length;
                    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
  return promedioCalc;
}

const desviacionEstandard = function desviacionEstandard(...array) {
  const promedio = promedioNormal(...array);
  let unaSumatoria = array.map(elemento => (elemento-promedio)*(elemento-promedio));
  return Math.sqrt(promedioNormal(...unaSumatoria));
}

const arribaDeLaMedia = function(numero, media) {
  return numero >= media;
}

module.exports = {
  promedioNormal,
  desviacionEstandard,
  arribaDeLaMedia
}