// // let e const

// // console.log(seraQuePode)
// var seraQuePode = "?" // hoisting (variavel içada)

// let estaFrio = true;

// if (estaFrio) {
//     var acao = "Colocar o casaco"
//     const cpf = '123.456.000-99';
// }

// // console.log(acao);
// // cpf = '534.123.565-99'
// // console.log(cpf);

// var segredo = 'externo'
// function revelar() {
//     var segredo = 'interno'
// }
// revelar()
// console.log(segredo);

// // Arrow
// const somar = function(n1: number, n2: number) {
//     return n1 + n2
// }
// console.log(somar(2,2))

// const subtrair = (n1: number, n2: number): number => n1 - n2;
// console.log(subtrair(4, 2))

// const saudacao = () => console.log("Oi")
// saudacao()

// const falarCom = (p: string) => console.log(`Olá ${p}`)
// falarCom("João")

// const normalComThis = function() {
//     console.log(this)
// }
// const bindNormal = normalComThis.bind("Esse vai ser o this")
// bindNormal()

// const arrowComThis = () => console.log(this)
// let bindArrow = arrowComThis.bind("Será que será meu this?")
// bindArrow()

// Spread & Rest
const nums: number[] = [1, 2, 3, 122, 4, 5]
console.log(...nums)
console.log(Math.max(...nums));

const turmaA: string[] = ["A1", "A2"]
const turmaB: string[] = ["B1", "B2"]
const turmas: (string | string[])[] = ["C1", "C2", ...turmaA, ...turmaB]
console.log(turmas)

let retornaArray = (a: string, ...args: number[]): (string | number)[] => [a, ...args]
const numeros = retornaArray("Array", ...nums)
console.log(numeros);

// Destructuring
const caracteristica = ["Motor Zetec", 2020]
const [motor, ano] = caracteristica
console.log(motor);
console.log(ano);

// Destructuring (Objeto)
const item = {
    nome: "SSD",
    preco: 200,
    caracteristica: {
        capacidade: '500GB'
    }
}
const { nome: n, preco: p, caracteristica: { capacidade: c } } = item
console.log(n);
console.log(p);
console.log(c);


// Exercicio 1
const dobro = (valor: number): number => valor * 2

console.log(dobro(10))
 
// Exercicio 2
const dizerOla = (nome:string = "Fulano") => console.log(`Olá, ${nome}`)

dizerOla()
dizerOla("Anna")
 
// Exercicio 3
const numers: number[] = [-3, 33, 38, 5]
console.log(Math.min(...numers))
 
// Exercicio 4
const array: number[] = [55, 20]
array.push(...numers)
console.log(array)
 
// Exercicio 5
const notas: number[] = [8.5, 6.3, 9.4]
// const [nota1, nota2, nota3] = notas
 
console.log(...notas)
 
// Exercicio 6
const cientista = {
    nomeCientista: "Will", 
    experiencia: 12
}
const {nomeCientista, experiencia} = cientista

console.log(nomeCientista, experiencia)


// Callback
// const esperar3s = (callback: (dados:string) => void) => {
//     setTimeout(() => {
//         callback("3s depois...")
//     },3000)
// }
// esperar3s((res: string) => {
//     console.log(res)
// })

// const esperar3sPromise = (): Promise<any> => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             resolve("3s depois promises...")
//         },3000)
//     })
// }

// esperar3sPromise()
//     .then((res) => console.log(res))

