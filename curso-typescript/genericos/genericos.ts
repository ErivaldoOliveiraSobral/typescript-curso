function echo(obj: any) {
    return obj
}
console.log(echo("Erivaldo"))
console.log(echo(123))
console.log(echo({nome: "Erivaldo", idade: 30 }))

function echoMelhorado<T>(obj: T): T {
    return obj
}
type Pessoa = { nome: string, idade: number }

interface EU extends Pessoa {
    cpf: string
}

class EuMesmo implements EU {
    constructor(public cpf: string, 
                public nome: string, 
                public idade: number) { 
    }
}

console.log(echoMelhorado("Erivaldo"))
console.log(echoMelhorado<number>(123))
console.log(echoMelhorado<Pessoa>({nome: "Erivaldo", idade: 30 }).nome)
console.log(echoMelhorado<EU>({ nome: "Erivaldo", idade: 30, cpf: "123.123.123-12" }))
console.log(echoMelhorado<EuMesmo>(new EuMesmo("321.321.321-32", "Erivaldo", 30)))

// Array
function imprimir<T>(args: T[]): void {
    args.forEach(e => console.log(e))
}
imprimir([1,2,3,4])
imprimir<string>(["a","b","c"])
type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
    { nome: "Erivaldo", idade: 30 },
    { nome: "Erivaldo2", idade: 31 }
])