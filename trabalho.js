let resultado = calcularNivel(vitorias, derrotas)

function calcularNivel(vitorias, derrotas) {
 
    let saldo = vitorias - derrotas;
    let vitorias =("78")
let derrotas = ("33")
let nivel= ("bronze")
 
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    
    return { saldo, nivel };
}

console.log ("o heroi tem um saldo de ")



