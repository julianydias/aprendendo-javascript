


//--------------------------------------------------------------------
//objeto seria um cara que pode receber coisas ligadas a ele,que seriam as propriedades,
//exemplo://
//objeto:paciente propriedade:nome,endereco,idade,etc//

// let paciente= new Object();
// paciente.nome = "juliany";
// paciente.idade = "37";
// paciente.endereco = "rua:medianeira N 21";
// paciente.cabelo = "preto";


// let pessoa = {'nome': 'juliany'};


//array È um objeto global usado na construcao de "arrays" ou seja :listas
let frutas = ['maça', 'banana', 'uva', 'manga', 'abacaxi', 'abacate', 'laranja', ];
// console.log(frutas[0])

// function logArrayElements(fruta) {
//     if (fruta[0] == 'a') {
//         console.log(fruta +" começa com a");
//     }
// }

// frutas.forEach(fruta => {
//     if (fruta[0] == 'mari') {
//         console.log(fruta +" começa com a");
//     }
// });

// let pessoas = ['mariana', 'mario sergio cortella', 'amarildo', 'henrique do poder', 'juliany mara', 'amastor'];

// pessoas.forEach(pessoa => {
//     if (pessoa.indexOf('mari') != -1) {
//         console.log(pessoa + ' contem mari');
//     }
// })

let pessoas_nomes = [
    {'nome':'juliany'},
    {'nome':'Henrique'},
    {'nome':'marcelo'},
    {'nome':'viviane'},
    {'nome':'abner'},
    {'nome':'ivanilda'},
    {'nome':'suzy meiry'},
    {'nome':'fabiano'},
    {'nome':'suzana'},
    {'nome':'polliany'},
    {'nome':'nathan'},
    {'nome':'vinicius'},
    {'nome':'thierry'},
    {'nome':'daiane'},
    {'nome':'arthur'},
    {'nome':'beatriz'},
];

function buscarPessoaPorNome(nome){
    pessoas_nomes.forEach(pessoa => {
        if(pessoa.nome.toUpperCase().indexOf(nome.toUpperCase())>-1){
            console.log(pessoa.nome.toLowerCase())
        } 
    });
}
// buscarPessoaPorNome('hen')


pessoas_nomes.push({'nome':'jucy'});
console.log(pessoas_nomes);


