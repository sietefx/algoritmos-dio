class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
  
    atacar() {
        let ataque
        // Verifica o tipo do herói usando this.tipo
        if (this.tipo === 'mago') {
            ataque = "magia"
        } else if (this.tipo === 'guerreiro') {
            ataque = "espada"
        } else if (this.tipo === 'monge') {
            ataque = "artes marciais"
        } else if (this.tipo === 'ninja') {
            ataque = "shuriken"      
        } else {
            return `${this.nome} não sabe atacar corretamente.`
        }
        return `o ${this.tipo} atacou usando ${ataque}`
    }
}

let heroi1 = new Heroi("Merlin", 100, "mago")
console.log(heroi1.atacar())

let heroi2 = new Heroi("Aragorn", 200, "guerreiro")
console.log(heroi2.atacar())

let heroi3 = new Heroi("Shaolin", 210, "monge")
console.log(heroi3.atacar())

let heroi4 = new Heroi("Shuri", 300, "ninja")
console.log(heroi4.atacar())