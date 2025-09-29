let nome = "Dante"
let xp = 10200

let nivel

if (xp < 1000) {
    nivel = "Ferro"
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze"
} else if (xp >= 2001 && xp <= 3000) {
    nivel = "Prata"
} else if (xp >= 3001 && xp <= 4000) {
    nivel = "Ouro"
} else if (xp >= 4001 && xp <= 5000) {
    nivel = "Platina"
} else if (xp >= 5001 && xp <= 6000) {
    nivel = "Ascendente"
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

console.log(`O nível do heroi ${nome} é ${nivel}`)

