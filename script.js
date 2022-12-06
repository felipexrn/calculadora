function escreve(valor) {
  if (fim == false) {
    tela.value = tela.value + valor;
  } else {
    tela.value = "";
    tela.value = tela.value + valor;
    fim = false;
  }
}
function passo1() {
  numero1 = parseFloat(tela.value);
  tela.value = "";
  numero2 = "";
}
function divisao() {
  passo1();
  operador = "/";
}
function multiplicacao() {
  passo1();
  operador = "*";
}
function subtracao() {
  passo1();
  operador = "-";
}
function soma() {
  passo1();
  operador = "+";
}
function resultado() {
  numero2 = parseFloat(tela.value);
  if (operador == "/") {
    if (numero2 != 0) {
      tela.value = numero1 / numero2;
    } else {
      tela.value = "Erro";
    }
  }
  if (operador == "*") {
    tela.value = numero1 * numero2;
  }
  if (operador == "-") {
    tela.value = numero1 - numero2;
  }
  if (operador == "+") {
    tela.value = numero1 + numero2;
  }
  operador = "";
  numero1 = "";
  numero2 = "";
  fim = true;
}
function zera() {
  fim = false;
  operador = "";
  numero1 = "";
  numero2 = "";
  tela.value = "";
}
let fim = false;
let numero1;
let numero2;
let operador;
let tela = document.querySelector("input");
tela.value = "";

