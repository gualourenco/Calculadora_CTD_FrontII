import soma from "./soma.js";
import sub from "./sub.js";
import multi from "./multi.js";
import div from "./div.js";

alert("Bem vindo à calculadora");
let validador = true;
while (validador == true) {
  let opcao = Number(
    prompt(
      "Escolha a operação desejada: \n1- somar\n2- subtrair\n3- multiplicar\n4- dividir "
    )
  );
if (opcao > 0 && opcao < 4) {
  let numero1 = Number(prompt("Qual o primeiro número?"));
  let numero2 = Number(prompt("Qual o segundo número?"));
    switch (opcao){
    case 1 :
        alert(`A Soma é: ${soma(numero1, numero2)}`);
        validador = confirm("Deseja fazer uma nova operação?");
        break
    case 2 :
        alert(`A Subtração é: ${sub(numero1, numero2)}`);
        validador = confirm("Deseja fazer uma nova operação?");
        break
        case 3 :
        alert(`A Multiplicação é: ${multi(numero1, numero2)}`);
        validador = confirm("Deseja fazer uma nova operação?");
        break
        case 4:
        alert(`A Divisão é: ${div(numero1, numero2)}`);
        validador = confirm("Deseja fazer uma nova operação?");
        break
    }
} else {
  alert("Digite uma número válido");
}
}
