function implementacaoTalvez(h: number): string {
    let teste: string = "";
    if(h > 0) {
        teste = `Numero ${h} é maior do que 0`
    }
    return teste;
}
let talvez: (horario: number) => string

talvez = implementacaoTalvez

console.log(talvez(1))
