"use strict";
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
var nums = [1, 2, 3, 122, 4, 5];
console.log.apply(console, nums);
console.log(Math.max.apply(Math, nums));
var turmaA = ["A1", "A2"];
var turmaB = ["B1", "B2"];
var turmas = ["C1", "C2"].concat(turmaA, turmaB);
console.log(turmas);
var retornaArray = function (a) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return [a].concat(args);
};
var numeros = retornaArray.apply(void 0, ["Array"].concat(nums));
console.log(numeros);
// Destructuring
var caracteristica = ["Motor Zetec", 2020];
var motor = caracteristica[0], ano = caracteristica[1];
console.log(motor);
console.log(ano);
// Destructuring (Objeto)
var item = {
    nome: "SSD",
    preco: 200,
    caracteristica: {
        capacidade: '500GB'
    }
};
var n = item.nome, p = item.preco, c = item.caracteristica.capacidade;
console.log(n);
console.log(p);
console.log(c);
// Exercicio 1
var dobro = function (valor) { return valor * 2; };
console.log(dobro(10));
// Exercicio 2
var dizerOla = function (nome) {
    if (nome === void 0) { nome = "Fulano"; }
    return console.log("Ol\u00E1, " + nome);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3
var numers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numers));
// Exercicio 4
var array = [55, 20];
array.push.apply(array, numers);
console.log(array);
// Exercicio 5
var notas = [8.5, 6.3, 9.4];
// const [nota1, nota2, nota3] = notas
console.log.apply(console, notas);
// Exercicio 6
var cientista = {
    nomeCientista: "Will",
    experiencia: 12
};
var nomeCientista = cientista.nomeCientista, experiencia = cientista.experiencia;
console.log(nomeCientista, experiencia);
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
//# sourceMappingURL=ecmascript.js.map