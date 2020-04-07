/**
 * escrever uma funcao onde:
 * deve receber apenas um parametro
 * a funcao deve aceitar aPENAS NUMEROS,ou seja deve haver uma validaçaO
 * A FUNCAO DEVE TESTAR E RETORNAR SE O NUMERO INMFORMADO,E PAR OU IMPAR
 * O TESTE DEVE SER FEITO ATRAVEZ DA FUNCAO MOD
 * OBS: NAO EXISTE FUNCAO MOD NESTE ARQUIVO!
 */
function parOuImpar(numero1) {
    var substituido =numero1.replace(/[^\d]/, 'que babaca');

    var existeDiferenteNumero = substituido.indexOf('que babaca');



    if(existeDiferenteNumero!= -1) {
        console.log('existe')
    }else{
        console.log('nao existe')
     if()
    }

}

parOuImpar('58959')
