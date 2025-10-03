let vitorias = 101
let derrotas = 35
let saldo = vitorias - derrotas

function calcularNivel(saldo) {
    let nivel

    switch(true) {
        case (saldo <= 10):
            nivel = "Ferro"
            break

        case (saldo <= 20):
            nivel = "Bronze"
            break

        case (saldo <= 50):
            nivel = "Prata"
            break
        
        case (saldo <= 80):
            nivel = "Ouro"
            break

        case (saldo <= 90):
            nivel = "Diamante"
            break

        case (saldo <= 100):
            nivel = "Lendário"
            break

        default:
            nivel = "Imortal"
    }

    return `O Heroi tem saldo de ${saldo} e está no nível ${nivel}.`
}
console.log(calcularNivel(saldo))