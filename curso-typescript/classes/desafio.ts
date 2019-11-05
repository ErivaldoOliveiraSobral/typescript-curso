// Exercício 1 - Classe
console.log("Exercício 1")
class Moto {
    public velocidade: number;
    constructor(public nome: string) { 
        this.velocidade = 0;
    }
    public buzinar(): void {
        console.log('Tooooooooooooot"')
    }
    public acelerar(delta: number): void {
        this.velocidade += delta
    }
}
const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// Exercício 2 - Herança
console.log('Exercício 2')
// Classe abstrata que não pode ser instanciada
abstract class Objeto2D {
    base: number = 0
    altura: number = 0
    abstract area(): number
}
// Classe que herda de classe abstrata
class Retangulo extends Objeto2D {
    public area(): number {
        return this.base * this.altura
    }
}
// Classe que herda de outra classe e implementa um construtor
class RetanguloComConstrutor extends Retangulo {
    constructor(b: number, a: number) {
        super();
        this.base = b
        this.altura = a
    }
}
const retangulo: Objeto2D = new Retangulo()
retangulo.base = 5
retangulo.altura = 7
console.log(retangulo.area())

console.log("Retângulo com construtor")
const retanguloConst: Objeto2D = new RetanguloComConstrutor(5, 7)
console.log(retanguloConst.area())

// Exercício 3 - Getters & Setters
console.log("Exercício 3")
class Estagiario {
    private _primeiroNome: string = '';

    get primeiroNome(): string {
        return this._primeiroNome
    }
    set primeiroNome(valor: string) {
        if(valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    }
}
const estagiario: Estagiario = new Estagiario()
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)
