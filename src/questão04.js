import leia from 'readline-sync';

var vitorias = leia.questionInt("INFORME NUMERO DE VITORIAS: ") * 3;
var empates = leia.questionInt("INFORME NUMERO DE EMPATES: ") * 1;
var derrotas = leia.questionInt("INFORME NUMERO DE DERROTAS: ")* 0;

var pontuacao = (vitorias * 3) + (empates * 1) + (derrotas * 0);

if(pontuacao >= 70) {
    console.log("CAMPEAOO!")
} else if (pontuacao > 45 && pontuacao < 70) {
    console.log("CLASSIFICADO!")
} else {
    console.log("REBAIXADO!")
}



































































