import leia from 'readline-sync';

var kwhgasto = leia.questionFloat("INFORME KWh GASTO: ");
var temTS = leia.keyInYN("TEM TARIFA SOCIAL? ");

if(kwhGASTO <= 100) {
    valorPagar = kwhGASTO * 0.60;
}else if(kwhGASTO > 100 && kwhGASTO <= 300) {
    valorPagar = kwhGASTO * 0.75;
} else {
    valorPagar = kwhGASTO * 0.90;
}

var valorFinal = (temTS === true) ? valorPagar - (valorPagar * 0.20) : valorPagar;
console.log("VALOR FINAL A PAGAR: R$" + valorFinal)