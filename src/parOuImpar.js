/**
 * escrever uma funcao onde:
 * deve receber apenas um parametro
 * a funcao deve aceitar aPENAS NUMEROS,ou seja deve haver uma validaçaO
 * A FUNCAO DEVE TESTAR E RETORNAR SE O NUMERO INMFORMADO,E PAR OU IMPAR
 * O TESTE DEVE SER FEITO ATRAVEZ DA FUNCAO MOD
 * OBS: NAO EXISTE FUNCAO MOD NESTE ARQUIVO!
 */
function parOuImpar(numero) {//4g

    var substituido = numero.replace(/[^\d]/g, 'naoNumeros'); //4naoNumeros
    var existeDiferenteNumero = substituido.indexOf('naoNumeros');//4|naoNumeros|
//                                                                  0     1 
    if (existeDiferenteNumero != -1) {
        console.log('o valor informado é invalido');
    } else {
        var resultado = numero % 2;
        if (resultado === 0){
            console.log('é par');
        }else{
            console.log('é Impar');

        }
    }

}

parOuImpar('20')
