interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}
function saudarComOla(pessoa: Humano): void {
    console.log(`Olá ${pessoa.nome}`)
}
function mudarNome(pessoa: Humano) {
    pessoa.nome = "Erivaldo"
}
function imprimirPessoa(pessoa: Humano) {
    console.log(pessoa)
}
const pessoa: Humano = {
    nome: "Fulano",
    idade: 15,
    123: "hush",
    saudar(sobrenome: string) {
        console.log(`Olá ${this.nome} ${sobrenome}`)
    }
}
console.log(pessoa["123"])
mudarNome(pessoa)
saudarComOla(pessoa)
// imprimirPessoa({nome: "Jacqueline", idade: 24, teste: "huahua", teste2: "kkkkk"})
pessoa.saudar("Sobral")

// Usando Classes
class Cliente implements Humano {
    nome: string = ""
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log(`Olá ${this.nome} ${sobrenome}`)
    }
}
const meuCliente = new Cliente
meuCliente.nome = "Han"
meuCliente.saudar("Solo")
console.log(meuCliente.ultimaCompra)

// Interface função
interface FuncaoCalculo {
    (a: number, b: number): number
}
let potencia: FuncaoCalculo
potencia = function(base: number, expoente: number): number {
    return base ** expoente
}
console.log(potencia(2, 2))

// Herança
interface A {
    a(): void
}
interface B {
    b(): void
}
interface ABC extends A, B {
    c(): void
}
class RealA implements A {
    a(): void { }
}
class RealAB implements A, B {
    a(): void { }
    b(): void { }
}
class RealABC implements ABC {
    a(): void { }
    b(): void { }
    c(): void { }
}
function ClasseABC(a: A) { }
ClasseABC(new RealABC)

abstract class AD implements A {
    a(): void { }
    abstract d(): void
}
abstract class E extends AD {
    abstract e(): void
}
class ED extends E {
    e(): void { }    
    d(): void { }
}
class EDF implements ED {
    e(): void { }    
    d(): void { }
    a(): void { }
}

// Prototype
interface Object {
    log(): void
}
Object.prototype.log = function() {
    console.log(this.toString())
}
const coisa: string = "Qualquer coisa"
coisa.log()