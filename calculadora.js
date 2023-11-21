let operacion = "";

function concatenar(valor) {
  operacion += valor;
  document.getElementById("pantalla").value = operacion;
}

function calcular() {
  try {
    operacion = eval(operacion);
    document.getElementById("pantalla").value = operacion;
  } catch (error) {
    document.getElementById("pantalla").value = "Error";
  }
}

function limpiar() {
  operacion = "";
  document.getElementById("pantalla").value = "";
}
