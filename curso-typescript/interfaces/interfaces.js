"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function saudarComOla(pessoa) {
    console.log("Ol\u00E1 " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Erivaldo";
}
function imprimirPessoa(pessoa) {
    console.log(pessoa);
}
var pessoa = {
    nome: "Fulano",
    idade: 15,
    123: "hush",
    saudar: function (sobrenome) {
        console.log("Ol\u00E1 " + this.nome + " " + sobrenome);
    }
};
console.log(pessoa["123"]);
mudarNome(pessoa);
saudarComOla(pessoa);
// imprimirPessoa({nome: "Jacqueline", idade: 24, teste: "huahua", teste2: "kkkkk"})
pessoa.saudar("Sobral");
// Usando Classes
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.nome = "";
        this.ultimaCompra = new Date;
    }
    Cliente.prototype.saudar = function (sobrenome) {
        console.log("Ol\u00E1 " + this.nome + " " + sobrenome);
    };
    return Cliente;
}());
var meuCliente = new Cliente;
meuCliente.nome = "Han";
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);
var potencia;
potencia = function (base, expoente) {
    return Math.pow(base, expoente);
};
console.log(potencia(2, 2));
var RealA = /** @class */ (function () {
    function RealA() {
    }
    RealA.prototype.a = function () { };
    return RealA;
}());
var RealAB = /** @class */ (function () {
    function RealAB() {
    }
    RealAB.prototype.a = function () { };
    RealAB.prototype.b = function () { };
    return RealAB;
}());
var RealABC = /** @class */ (function () {
    function RealABC() {
    }
    RealABC.prototype.a = function () { };
    RealABC.prototype.b = function () { };
    RealABC.prototype.c = function () { };
    return RealABC;
}());
function ClasseABC(a) { }
ClasseABC(new RealABC);
var AD = /** @class */ (function () {
    function AD() {
    }
    AD.prototype.a = function () { };
    return AD;
}());
var E = /** @class */ (function (_super) {
    __extends(E, _super);
    function E() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return E;
}(AD));
var ED = /** @class */ (function (_super) {
    __extends(ED, _super);
    function ED() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ED.prototype.e = function () { };
    ED.prototype.d = function () { };
    return ED;
}(E));
var EDF = /** @class */ (function () {
    function EDF() {
    }
    EDF.prototype.e = function () { };
    EDF.prototype.d = function () { };
    EDF.prototype.a = function () { };
    return EDF;
}());
Object.prototype.log = function () {
    console.log(this.toString());
};
var coisa = "Qualquer coisa";
coisa.log();
//# sourceMappingURL=interfaces.js.map