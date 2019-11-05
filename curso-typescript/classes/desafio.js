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
// Exercício 1 - Classe
console.log("Exercício 1");
var Moto = /** @class */ (function () {
    function Moto(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    Moto.prototype.buzinar = function () {
        console.log('Tooooooooooooot"');
    };
    Moto.prototype.acelerar = function (delta) {
        this.velocidade += delta;
    };
    return Moto;
}());
var moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
console.log('Exercício 2');
// Classe abstrata que não pode ser instanciada
var Objeto2D = /** @class */ (function () {
    function Objeto2D() {
        this.base = 0;
        this.altura = 0;
    }
    return Objeto2D;
}());
// Classe que herda de classe abstrata
var Retangulo = /** @class */ (function (_super) {
    __extends(Retangulo, _super);
    function Retangulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Retangulo.prototype.area = function () {
        return this.base * this.altura;
    };
    return Retangulo;
}(Objeto2D));
// Classe que herda de outra classe e implementa um construtor
var RetanguloComConstrutor = /** @class */ (function (_super) {
    __extends(RetanguloComConstrutor, _super);
    function RetanguloComConstrutor(b, a) {
        var _this = _super.call(this) || this;
        _this.base = b;
        _this.altura = a;
        return _this;
    }
    return RetanguloComConstrutor;
}(Retangulo));
var retangulo = new Retangulo();
retangulo.base = 5;
retangulo.altura = 7;
console.log(retangulo.area());
console.log("Retângulo com construtor");
var retanguloConst = new RetanguloComConstrutor(5, 7);
console.log(retanguloConst.area());
// Exercício 3 - Getters & Setters
console.log("Exercício 3");
var Estagiario = /** @class */ (function () {
    function Estagiario() {
        this._primeiroNome = '';
    }
    Object.defineProperty(Estagiario.prototype, "primeiroNome", {
        get: function () {
            return this._primeiroNome;
        },
        set: function (valor) {
            if (valor.length >= 3) {
                this._primeiroNome = valor;
            }
            else {
                this._primeiroNome = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Estagiario;
}());
var estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map