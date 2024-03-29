"use strict";
// string
var nome = 'João';
console.log(nome);
// nome = 28
// numbers
var idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
// boolean
var possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27'
// array
var hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
// tuplas
var endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funções
function retornaMeuNome() {
    // return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9));
// tipo função
var calculo;
// calculo = digaOi
// calculo()
// calculo = {}
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
var usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }
usuario = {
    idade: 31,
    nome: 'Maria',
};
console.log(usuario);
// Desafio
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (número)
            e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/
// Tipo 
var funcionario;
// Atribuição
funcionario = {
    supervisores: ["Fulano", "Ciclano"],
    baterPonto: function (horario) {
        return horario <= 8 ? "Ponto Normal" : "Fora do Horário";
    }
};
console.log(funcionario.supervisores[0]);
console.log(funcionario.baterPonto(7));
var f1;
f1 = {
    supervisores: ["Mano"],
    baterPonto: function (h) {
        return h < 9 ? "Normal" : "Fora";
    }
};
console.log(f1.supervisores);
console.log(f1.baterPonto(2));
// let funcionario: Funcionario = {
//     supervisores: ['Ana', 'Fernando'],
//     baterPonto(horario: number): string {
//         if(horario <= 8) {
//             return 'Ponto normal'
//         } else {
//             return 'Fora do horário!'
//         }
//     }
// }
// let funcionario2: Funcionario = {
//     supervisores: ['Bia', 'Carlos'],
//     baterPonto(horario: number): string {
//         if(horario <= 8) {
//             return 'Ponto normal'
//         } else {
//             return 'Fora do horário!'
//         }
//     }
// }
// console.log(funcionario.supervisores)
// console.log(funcionario.baterPonto(8))
// console.log(funcionario.baterPonto(9))
// // funcionario = {}
// // Union Types
// let nota: number | string = 10
// console.log(`Minha nota é ${nota}!`)
// nota = '10'
// console.log(`Minha nota é ${nota}!`)
// // nota = true
// // Checando tipos
// let valor = 30
// if (typeof valor === "number") {
//     console.log("É um number!")
// } else {
//     console.log(typeof valor)
// }
// never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Erivaldo',
    preco: 4,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco inválido!');
        }
    }
};
produto.validarProduto();
var altura = 12;
// altura = null
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
var podeSerNulo = null; // any!
// podeSerNulo = 12
console.log(podeSerNulo);
// podeSerNulo = 'abc'
console.log(podeSerNulo);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
// // Desafio
// type ContaBancaria = {
//     saldo: number,
//     depositar: (valor: number) => void
// }
// let contaBancaria: ContaBancaria = {
//     saldo: 3456,
//     depositar(valor: number) {
//         this.saldo += valor
//     }
// }
// type Correntista = {
//     nome: string,
//     contaBancaria: ContaBancaria,
//     contatos: string[]
// }
// let correntista: Correntista = {
//     nome: 'Ana Silva',
//     contaBancaria: contaBancaria,
//     contatos: ['34567890', '98765432']
// }
// correntista.contaBancaria.depositar(3000)
// console.log(correntista)
//# sourceMappingURL=tipos.js.map