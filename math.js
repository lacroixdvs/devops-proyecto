function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: División por cero";
  }
}

module.exports = {
  suma,
  resta,
  multiplicar,
  dividir
};
