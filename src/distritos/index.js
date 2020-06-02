//--===========================--===========================||===========================--===========================--\\
//--===========================--===========================||===========================--===========================--\\
//--===========================--===========================||===========================--===========================--\\
//--===========================--===========================||===========================--===========================--\\
//--===========================--===========================||===========================--===========================--\\



// CONCEITO DE FUNÇÃO 



/**
 * funcao: é um bloco que encapsula códigos e é capaz de execuitar algum processo
 * 
 * uma funcao é composta por:
 *  1 - identificador da funcao (palavra reservada).
 *  2 - parametros 
 *  3 - bloco de execuçao
 *  4 - pode conter nome ou ser anonima
 *  5 - pode conter retorno de valores ou ser vazia (void)
 * 
 * uma funcao pode ser escrita de algumas maneiras
 */

//EXEMPLOS DE FUNCOES ESCRITAS DO TIPO PADRAO
/**
 * ex1:
 * A palavra 'function' determina que este bloco sera uma funcao.
 * a palavra 'funcaoTeste' determina o nome que a funcao terá, 
 *      toda vez que desejar a execucao da funcao ela deve ser chamada pelo nome seguido dos seus parametros,
 *      o nome de uma funcao nada mais é do que uma variavel que pode ser executada.
 * os '()' sao os parametros da funcao, os parametros sao os valores de entrada, 
 *      uma funcao pode conter varios parametros ou nenhum,como é o caso desse exemplo.
 * as '{}' sao o bloco de instrucao/execucao,
 *      todo codigo que estiver descrito dentro de {} sera executado qdo a funcao for chamada.
 */
function funcaoTeste() {
    //codigos que serao executados
}
/**
 * ex2:
 * neste seghundo exemplo a funcao teste2 contem apenas um parametro.
 * A estrutura do primeiro e do segundo exemplo é a mesma,
 * oque muda é apenas o fato de ter um parametro
 */
function funcaoTeste2(parametro1) {
    //codigos que serao executados
}

/**
 * ex3:
 * neste terceiro exemplo esta funcao tem 2 parametros.
 * os  multiplos parametros dentro de ()sao separados por virgula.
 * uma funcao pode ter infinitos parametros,seguindo a mesma logica * 
 */
function funcaoTeste3(parametro1, parametro2) {
    //codigos que serao executados
}

/**
 * ex4: 
 * um funcao com retorno tem ...
 * RETORNO de valores determinado dentro do bloco de instrucao,apos a palavra reservada 'return'
 */
function somarDoisNumeros(numero1, numero2) {
    return numero1 + numero2;
}

/**
 * ex5:
 * 
 * um funcao vazia é
 * UMA FUNCAO SEM RETORNO
 */
function removerNumerosTexto(texto) {
    texto.replaceAll(/\d/, '');
}


// EXEMPLOS DE FUNCAO ESCRITA DO TIPO ARROW-FUNCTION
/**
 * ex6:
 * uma funcao arrow-function é iniciada pelos parametros '()'
 * arrow-function nao possui nome,portanto ANONIMA
 * apos os parametros temos '=>' arrow-function.
 * este simbolo representa funcao 'function' (palavra reservada)
 * na sequencia temos um bloco d execuçao, neste caso a execucao é a funcao  'console.log()'
 * 
 * quando se ha apenas um comnado no bloco de instrucao, nao ha necessidade de '{}' 
 * quando é optado pelo nao usop de '{}' para o bloco de execucao, por padrao o comando a ser executado é um 'return'
 */
() => console.log(); //console.log é o codigo a ser executado, mas poderia ser outro.

/**
 * ex7:
 * neste exemplo de arrow-function o bloco de instrucao contem'{}'
 * portanto nao ha 'return' padrao
 * para que haja retorno deve-se explicitar o retorno com a palavra chave 'return',seguida do valor a ser retornado
 */
() => {
    console.log()
    //  codigos que serao executados
}

/**
 * ex8:
 * neste exemplo de arrow-function ha apenas 1 parametro
 * para casos como esse,elimina-se a necessidade da especificacao '()'de parametros,como no exemplo abaixo
 */
parametro1 => {
    //codigos que serao executados
}

/**
 * ex9:
 * neste exemplo de arrow-function que tb contem apenas 1 parametro,ela o tem encapsulado dentro da especificacao '()' de parametros
 * o comportamento dessa funcao é exatamente o mesmo do exemplo anterior
 */
(parametro1) => {
    //codigos que serao executados
}

/**
 * ex10:
 * neste exemplo de arrow-function os multiplos parametros seguem a mesma logica de uma funcao do tipo padrao
 * neste caso a especificacao '()' ,e requisito obrigatorio.
 * 
 */
(parametro1, parametro2) => {
    //codigos que serao executados
}

/**
 * ex11:
 * uma função anomina com retorno pode ser escrita de 2 maneiras:
 * quando ha '{}' para o bloco de intrucao deve-se conter a palavra reservada 'return' seguida do valor a ser retornado
 * quando nao ha '{}' deve-se especificar apenas o valor a ser retornado 
 */
() => {
    return 'pato';
}
() =>"patos";
telefone => '(45) ' + telefone;

 /**
 * ex12:
 * uma função anomina vazia é igual a ...
 * uma funcao sem retorno
 */
() => {
    1+2;
}




//--===========================--===========================||===========================--===========================--\\
//--===========================--===========================||===========================--===========================--\\
//--===========================--===========================||===========================--===========================--\\
//--===========================--===========================||===========================--===========================--\\
//--===========================--===========================||===========================--===========================--\\


// CONCEITO DO INTERADOR FOREACH

/**
 * um forEach é uma funcao que pode ser acessada a partir de um array
 * acessar significa chamar uma propriedade ou funcao de um elemento.
 * 
 * o forEach é uma funcao, portanto, para que seja executada é necessario parenteses '()'.
 * a funcao forEach espera um parametro, que deve ser uma funcao
 * a funcao passada por parametro deve conter pelo menos um parametro
 * a funcao passada por parametro sera executada em cada elemento do array
 */
let aprendendo = [1,2,3,4,5]; //o array 'aprendendo' sera o array de exemplo que usaremos a seguir para escrever os exercicios utilizando forEach.

/**
 * a funcao-parametro que é informada em um forEach pode ser escrita com a sintaxe padrao ou utilizando funcao anomima
 * vejamos 4 exemplos em que todos execuitarao o mesmo processo e obterao o mesmo resultado, sendo escritos de maneiras diferentes 
 */
let resultado = 0;

aprendendo.forEach(function somar(numero){
    resultado = numero + resultado;
});

function somar(numero){
    resultado = numero + resultado;
}
aprendendo.forEach(somar);


aprendendo.forEach((numero) => {
    resultado = numero + resultado;
});

aprendendo.forEach(numero => resultado = numero + resultado);

//--===========================--===========================||===========================--===========================--\\
//--===========================--===========================||===========================--===========================--\\
//--===========================--===========================||===========================--===========================--\\
//--===========================--===========================||===========================--===========================--\\
//--===========================--===========================||===========================--===========================--\\




['banana', 'maça'] //no caso essa lista tem por elemento:frutas,embora nao esteja definido que o nome dos elementaos é fruta,deduzimos pelo seu conteúdo
/**
 * nesta variavel consta uma lista de distritos.
 */
const distritos = require('./distritos.json');
/**
 * 1
 * printar no terrminal a lista distritos
 * printar no terminal tamanho da lista distritos
 */
//  console.log ('lista: ', distritos);
//  console.log ("tamanho: ", distritos.length);


/**
 * 2
 * popular lista nomesDistritos com apenas os nomes dos distritos
 * utilizar a propriedade 'nome', dentro do objeto distrito ( objetos presentes dentro da lista distritos)
 * 
 * printar no terminal a quantidade de itens dentro da lista nomesDistritos
 * printar no terminal a lista nomesDistritos
 */

let nomeDistritos = [];

distritos.forEach(function nomesDistritos(distrito){
    nomeDistritos.push(distrito.nome);
})
//console.log(nomeDistritos.length);
//console.log(nomeDistritos);
//ok  deryigyuo gty80h



/**
 * 3
 * popular lista nomesDistritosSemRepetir com apenas os nomes dos distritos
 * na lista nao deve haver valores repetidos
 * 
 * printar no terminal a quantidade de itens dentro da lista nomesDistritosSemRepetir
 * printar no terminal a lista nomesDistritosSemRepetir
 */
let nomesDistritosSemRepetir = [];
distritos.forEach(function distritosSemRepetir(distrito){
    if (nomesDistritosSemRepetir.indexOf(distrito.nome) == -1) {
        nomesDistritosSemRepetir.push(distrito.nome);
    }
})
console.log(nomesDistritosSemRepetir.length);
// console.log(nomesDistritosSemRepetir);

/**
 * 4
 * popular lista nomesMunicipios com apenas os nomes dos municipios
 * 
 * printar no terminal a quantidade de itens dentro da lista nomesMunicipios
 * printar no terminal a lista nomesMunicipios
 */
let nomesMunicipios =[];
distritos.forEach(function nomesDosMunicipios(distrito){
    nomesMunicipios.push(distrito.municipio.nome);
})
// console.log(nomesMunicipios.length);
// console.log(nomesMunicipios);


/**
 * 5
 * popular lista nomesMunicipiosSemRepetir com apenas os nomes dos municipios
 * na lista nao deve haver valores repetidos
 * 
 * printar no terminal a quantidade de itens dentro da lista nomesMunicipiosSemRepetir
 * printar no terminal a lista nomesMunicipiosSemRepetir
 */
let nomesMunicipiosSemRepetir = [];
distritos.forEach(function municipiosSemRepetir(distrito){
    if (nomesMunicipiosSemRepetir.indexOf(distrito.municipio.nome) ==  -1) {
        nomesMunicipiosSemRepetir.push(distrito.municipio.nome);
    }
})
console.log(nomesMunicipiosSemRepetir.length);
// console.log(nomesMunicipiosSemRepetir);

/**
 * verificar a qtadade de nomes iguais entre distritos e municipios.
 * declarar 2 variaveis para conter os valores de: qtade de nomes iguais e qtade de nomes diferentes
 * interar uma das listas e testar a outra.
 */
let nomesIguais =0 ;
let nomesDiferentes = 0;

nomesDistritosSemRepetir.forEach(function qtdadeNomesIguais(nomeDistrito){
    if (nomesMunicipiosSemRepetir.indexOf(nomeDistrito) != -1) {
        nomesIguais = nomesIguais + 1;
    } else {
        nomesDiferentes= nomesDiferentes + 1;
    }

});

console.log('iguais: '+ nomesIguais);
console.log('diferentes: ' + nomesDiferentes);

      








/**
 * 6
 * popular lista nomesEstados com apenas os nomes dos estados
 * 
 * printar no terminal a quantidade de itens dentro da lista nomesEstados
 * printar no terminal a lista nomesEstados
 */
let nomesEstados =[];


/**
 * 7
 * popular listanomesEstadosSemRepetir com apenas os nomes dos estados
 * na lista nao deve haver valores repetidos
 * 
 * printar no terminal a quantidade de itens dentro da listanomesEstadosSemRepetir
 * printar no terminal a listanomesEstadosSemRepetir
 */
let nomesEstadosSemRepetir = [];



/**
 * 8
 * popular lista nomesRegiao com apenas os nomes dos Regiao
 * 
 * printar no terminal a quantidade de itens dentro da lista nomesRegiao
 * printar no terminal a lista nomesRegiao
 */
let nomesRegiao =[];


/**
 * 9
 * popular listanomesRegiaoSemRepetir com apenas os nomes dos Regiao
 * na lista nao deve haver valores repetidos
 * 
 * printar no terminal a quantidade de itens dentro da listanomesRegiaoSemRepetir
 * printar no terminal a listanomesRegiaoSemRepetir
 */
let nomesRegiaoSemRepetir = [];



/**
 * 10
 * popular lista regiao com a regiao
 * 
 * printar no terminal a quantidade de itens dentro da lista regiao
 * printar no terminal a lista regiao
 */
let regiao =[];


/**
 * 11
 * popular listaregiaoSemRepetir com a regiao
 * na lista nao deve haver valores repetidos
 * 
 * printar no terminal a quantidade de itens dentro da listaregiaoSemRepetir
 * printar no terminal a listaregiaoSemRepetir
 */
let regiaoSemRepetir = [];


























// 1 - Criar uma nova lista vazia
// 2 - interar a lista "distritos"
// 3 - popular a nova lista criada anteriormente com um novo objeto criado
// 4 - o novo objeto criado deve seguir o exemplo abaixo com os mesmo nomes das propriedades
// 5 - os valores das propriedades devem ter seus respectivos valores confome o "item da vez"
// ex do novo objeto:
// const municipio = {
//     "nome": "nome da municipio",
//     "estado": "Nome do estado",
//     "UF": "sigla do estado",
//     "regiao": "nome da regiao"
// }

// let municipios = [];

// distritos.forEach( estadoComplexo => {

//     const municipio = {
//         "nome": estadoComplexo.municipio.nome,
//         "estado": estadoComplexo.municipio.microrregiao.mesorregiao.UF.nome,
//         "UF": estadoComplexo.municipio.microrregiao.mesorregiao.UF.sigla,
//         "regiao": estadoComplexo.municipio.microrregiao.mesorregiao.UF.regiao.nome
//     }
//     municipios.push(municipio);
// })
// console.log(municipios);

// Formular uma função que tera por objetivo retornar uma lista com todos os municípios de uma determinada região do Brasil.

// A função deve receber um valor por parâmetro (nome da região), e este valor será usado para filtrar os municípios.
// OBSERVAÇÃO: deve-se retornar apenas os municípios da região informada.

// Declarar 5 arrays sendo:
// regiaoNordeste;
// regiaoNorte;
// regiaoCentroOste;
// regiaoSudeste;
// regiaoSul;

// Cada lista deve conter apenas os municípios de suas respectivas regiões.

// buscar os municipios dessa regiao
let regiaoNordeste = buscaDeRegiao('Nordeste');

/**
 * @return todos os municipios da regiao informada no parametro
 * @param {nome da regiao} nomeDaRegiao 
 */
function buscaDeRegiao(nomeDaRegiao) {

    // distritos.forEach(distrito=> {
    //    ( nomeDaRegiao == "Nordeste" )


    // })
}


