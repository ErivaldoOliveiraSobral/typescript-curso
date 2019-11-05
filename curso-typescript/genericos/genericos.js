"use strict";
function echo(obj) {
    return obj;
}
console.log(echo("Erivaldo"));
console.log(echo(123));
console.log(echo({ nome: "Erivaldo", idade: 30 }));
function echoMelhorado(obj) {
    return obj;
}
var EuMesmo = /** @class */ (function () {
    function EuMesmo(cpf, nome, idade) {
        this.cpf = cpf;
        this.nome = nome;
        this.idade = idade;
    }
    return EuMesmo;
}());
console.log(echoMelhorado("Erivaldo"));
console.log(echoMelhorado(123));
console.log(echoMelhorado({ nome: "Erivaldo", idade: 30 }).nome);
console.log(echoMelhorado({ nome: "Erivaldo", idade: 30, cpf: "123.123.123-12" }));
console.log(echoMelhorado(new EuMesmo("321.321.321-32", "Erivaldo", 30)));
// Array
function imprimir(args) {
    args.forEach(function (e) { return console.log(e); });
}
imprimir([1, 2, 3, 4]);
imprimir(["a", "b", "c"]);
imprimir([
    { nome: "Erivaldo", idade: 30 },
    { nome: "Erivaldo2", idade: 31 }
]);
//# sourceMappingURL=genericos.js.map