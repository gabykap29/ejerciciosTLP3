function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  if(n===2){
    return 2;
  }

  let resultado = 0;
  let acumulador = 0;
  let array = [];

  for (let i = n - 1; i > 1; i--) {
    array.push(i); // Creamos un array con 'n' veces el valor de 'n'
  }
  console.log(array);

  for (let j = 0; j < array.length; j++) {
    if (j == 0) {
      for (let x = 0; x < array[j]; x++) {
        acumulador += n;
      }
      console.log(acumulador);
    }
    resultado = acumulador;
    console.log(resultado);
    for (let z = 1; z < array[j] - 1; z++) {
      acumulador += resultado;
      console.log(acumulador);
    }
  }

  return resultado;
}

console.log(factorial(5));
