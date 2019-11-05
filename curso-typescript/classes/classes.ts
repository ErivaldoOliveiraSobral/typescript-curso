class Data {
    private _dia: number
    private _mes: number
    private _ano: number
    constructor(dia: number = 1,
                mes: number = 1,
                ano: number = 1970) {
        this._dia = dia
        this._mes = mes
        this._ano = ano
    }
    get dia() {
        return this._dia
    }
    set dia(dia: number) {
        this._dia = dia
    }
    get mes() {
        return this._mes
    }
    set mes(mes: number) {
        this._mes = mes
    }
    get ano() {
        return this._ano
    }
    set ano(ano: number) {
        this._ano = ano
    }
}
class DataPublica {
    constructor(public dia: number = 1,
                public mes: number = 1,
                public ano: number = 1970) {
    }
}

const aniversario = new Data(2, 12, 1988)
const aniversario2 = new DataPublica
console.log(aniversario2)
aniversario2.dia = 6
aniversario2.mes = 12
aniversario2.ano = 1975
console.log(aniversario2)

class Produto {
    constructor(public nome: string,
        public preco: number,
        public desconto: number = 0) {
    }
    public precoComDesconto(): number {
        return this.preco * (1 - this.desconto)
    }
    public resumo(): string {
        return `Nome: ${this.nome} Preço: R$${this.preco} Desconto: ${this.desconto}% Valor Final: R$${this.precoComDesconto()}`
    }
}

console.log(new Produto("Caneta", 3.30, 0.05).resumo())
console.log(new Produto("Lápis", 1.50).resumo())

let caderno: Produto = new Produto("Caderno", 5.00, 0.50)
console.log(caderno.resumo())

// Singleton
class Unico {
    private static instance: Unico = new Unico()
    static getInstance(): Unico {
        return Unico.instance
    }
    public agora(): Date {
        return new Date
    }
}
// let errado = new Unico()
console.log(Unico.getInstance().agora()) 

// Somente leitura
class Aviao {
    public readonly modelo: string
    constructor(modelo: string, 
                public readonly prefixo: string, 
                public preco: number) {
        this.modelo = modelo
    }
}
const aviao = new Aviao("Tupan", "PT-13", 10000)
console.log(aviao)
// aviao.modelo = "Tu-119"
// aviao.prefixo = "BU-31"
aviao.preco = 50000
console.log(aviao)

