"use strict";
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this._dia = dia;
        this._mes = mes;
        this._ano = ano;
    }
    Object.defineProperty(Data.prototype, "dia", {
        get: function () {
            return this._dia;
        },
        set: function (dia) {
            this._dia = dia;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "mes", {
        get: function () {
            return this._mes;
        },
        set: function (mes) {
            this._mes = mes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (ano) {
            this._ano = ano;
        },
        enumerable: true,
        configurable: true
    });
    return Data;
}());
var DataPublica = /** @class */ (function () {
    function DataPublica(dia, mes, ano) {
        if (dia === void 0) { dia = 1; }
        if (mes === void 0) { mes = 1; }
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return DataPublica;
}());
var aniversario = new Data(2, 12, 1988);
var aniversario2 = new DataPublica;
console.log(aniversario2);
aniversario2.dia = 6;
aniversario2.mes = 12;
aniversario2.ano = 1975;
console.log(aniversario2);
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    Produto.prototype.precoComDesconto = function () {
        return this.preco * (1 - this.desconto);
    };
    Produto.prototype.resumo = function () {
        return "Nome: " + this.nome + " Pre\u00E7o: R$" + this.preco + " Desconto: " + this.desconto + "% Valor Final: R$" + this.precoComDesconto();
    };
    return Produto;
}());
console.log(new Produto("Caneta", 3.30, 0.05).resumo());
console.log(new Produto("Lápis", 1.50).resumo());
var caderno = new Produto("Caderno", 5.00, 0.50);
console.log(caderno.resumo());
// Singleton
var Unico = /** @class */ (function () {
    function Unico() {
    }
    Unico.getInstance = function () {
        return Unico.instance;
    };
    Unico.prototype.agora = function () {
        return new Date;
    };
    Unico.instance = new Unico();
    return Unico;
}());
// let errado = new Unico()
console.log(Unico.getInstance().agora());
// Somente leitura
var Aviao = /** @class */ (function () {
    function Aviao(modelo, prefixo, preco) {
        this.prefixo = prefixo;
        this.preco = preco;
        this.modelo = modelo;
    }
    return Aviao;
}());
var aviao = new Aviao("Tupan", "PT-13", 10000);
console.log(aviao);
// aviao.modelo = "Tu-119"
// aviao.prefixo = "BU-31"
aviao.preco = 50000;
console.log(aviao);
//# sourceMappingURL=classes.js.map