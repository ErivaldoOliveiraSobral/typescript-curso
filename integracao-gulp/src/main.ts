import $ from 'jquery'
import Livro from "./modelo/Livro";

const livro = new Livro("Fogo e Sangue", 100.00, 0.8)
// console.log(livro.precoComDesconto())
$('body').append(`<h3>Nome do Livro: ${livro.nome}<h3>`)
$('body').append(`<h3>Valor: ${livro.preco}<h3>`)
$('body').append(`<h4>Valor do desconto R$${livro.precoComDesconto()}<h4>`)