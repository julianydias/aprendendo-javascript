/**
 * explicação e exemplo de objetos
 * o que é, e como manipula-lo
 */
let clientes = [
    {
        'nome': 'henrique dias campos',
        'endereco': {
            'rua': 'medianeira',
            'numero': '21A'
        }
    },
    {
        'nome': 'juliany de souza neves dias',
        'endereco': {
            'rua': 'medianeira',
            'numero': '21A'
        }
    },
    {
        'nome': 'maria ivanilda de souza neves',
        'endereco': {
            'rua': 'serra do cadeado',
            'numero': '971'
        }
    },
    {
        'nome': 'robison power rager',
        'endereco': {
            'rua': 'serra do pelada',
            'numero': '91'
        }
    },
    {
        'nome': 'otavio meskita',
        'endereco': {
            'rua': 'depi do di',
            'numero': '1'
        }
    },
    {
        'nome': 'marcelo majosso né',
        'endereco': {
            'rua': 'catraca livre',
            'numero': '65'
        }
    },
    {
        'nome': 'pedro de lara',
        'endereco': {
            'rua': 'colchão milano',
            'numero': '971'
        }
    },
    {
        'nome': 'lucasssss quem é lucas',
        'endereco': {
            'rua': 'nem é de cascavel',
            'numero': '99'
        }
    },
    {
        'nome': 'paula tejando',
        'endereco': {
            'rua': 'te tucuco',
            'numero': '71'
        }
    },
]




// console.log('O '   + objeto.nome + ' mora na rua ' + objeto.endereco.rua + ' n° ' + objeto.endereco.numero );

/**
 * Arrays (listas)
 * apresentado variavel do tipo array
 * e seus componentes
 */


let arrayDeNumeros = [2, 3, 4, 10, 44454252342, 1];
let arrayDeTextos = ['patos', 'ratos', 'galinhas'];
// let arrayDeObjetos = [objeto, objeto1, objeto2];

// let arrayDeArrays = [arrayDeNumeros, arrayDeTextos, arrayDeObjetos];
// 'marcelo majosso né'






// function buscarPorNome(nome) {
//     for (let index = 0; index < clientes.length; index++) {
//         const cliente = clientes[index];
//         if (cliente.nome === nome) {
//             return cliente
//         }
//     }
// }


// function buscarPorNome(nome) {
//     let clie = {};
//     clientes.forEach(cliente => {
//         if (cliente.nome === nome) {
//             clie = cliente;
//         }
//     });

//     return clie;
// }

function buscarPorNome(nome) {
    return clientes.filter(cliente => cliente.nome === nome);
}

console.log(buscarPorNome('pedro de lara').endereco);

