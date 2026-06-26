import leia, { keyInSelect } from 'readline-sync';

var idade = leia.questionInt("INFORME A IDADE: ");
var ehEstudante = leia.keyInSelect("VOCÊ É ESTUDANTE: ");
var diaSemana = leia.keyInSelect(["SEGUNDA", "TERCA", "QUARTA", "QUINTA", "SEXTA", "SABADO", "DOMINGO"], "INFORME DIA DA SEMANA");

if(idade < 12) {
    console.log("VALOR INGRESSO: R$" + valoringresso.toFixed(2));
    console.log("VALOR DESCONTO: R$" + (valorIngresso - 15).toFixed(2));
    console.log("VALOR COBRADO R$" + (15).toFixed(2));
} else {
    if (diaSemana === 0)
      var desconto = valorIngresso * 0.30;
    console.log("VALOR TOTAL: R$" + valorIngresso.toFixed(2));
    console.log("VALOR DESCONTO: R$" + desconto.toFixed(2));
    console.log("VALOR COBRADO: R$" +)
}