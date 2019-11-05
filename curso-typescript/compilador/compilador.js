"use strict";
function implementacaoTalvez(h) {
    var teste = "";
    if (h > 0) {
        teste = "Numero " + h + " \u00E9 maior do que 0";
    }
    return teste;
}
var talvez;
talvez = implementacaoTalvez;
console.log(talvez(1));
//# sourceMappingURL=compilador.js.map