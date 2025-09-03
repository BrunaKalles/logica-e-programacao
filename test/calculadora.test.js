const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da função de soma', function (){
    it ('A função deve ser capaz de somar dois números positivos', function() {
        //coleta o resultado da função
        const resultadoDasoma = somarDoisNumeros(5, 3);

        //compara o resultado com o valor que você espera
        expect(resultadoDasoma).to.equal(8);

    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function() {
        //coleta o resultado da função
        const resultadoDasoma = somarDoisNumeros(50, -15);

        //compara o resultado com o valor que você espera
        expect(resultadoDasoma).to.equal(35);


    });
    it('A função deve ser capaz de somar dois números negativos', function() {
        //coleta o resultado da função
        const resultadoDasoma = somarDoisNumeros(-15, -15);

        //compara o resultado com o valor que você espera
        expect(resultadoDasoma).to.equal(-30);


    });
    it('A função deve ser capaz de somar um número zerado e um número negativo', function() {
        //coleta o resultado da função
        const resultadoDasoma = somarDoisNumeros(0, -12);

        //compara o resultado com o valor que você espera
        expect(resultadoDasoma).to.equal(-12);

    });
    it('A função deve ser capaz de somar um número zerado e um número positivo', function() {
        //coleta o resultado da função
        const resultadoDasoma = somarDoisNumeros(0, 20);

        //compara o resultado com o valor que você espera
        expect(resultadoDasoma).to.equal(20);

    });
    it('A função deve ser capaz de somar dois números zerados', function() {
        //coleta o resultado da função
        const resultadoDasoma = somarDoisNumeros(0, 0);

        //compara o resultado com o valor que você espera
        expect(resultadoDasoma).to.equal(0);

    });
});