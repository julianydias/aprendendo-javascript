
class Operatos {
    OPERATORS_ = [
        {
            'NAME': 'ADDITION',
            'SIMBOL': '+',
            'VALUE': 0
        },
        {
            'NAME': 'SUBTRACTION',
            'SIMBOL': '-',
            'VALUE': 0
        },
        {
            'NAME': 'MULTIPLICATION',
            'SIMBOL': '*',
            'VALUE': 1
        },
        {
            'NAME': 'DIVISION',
            'SIMBOL': '/',
            'VALUE': 1
        },
        {
            'NAME': 'LEFT_PARENTHESES',
            'SIMBOL': '(',
            'VALUE': 2
        },
        {
            'NAME': 'RIGHT_PARENTHESES',
            'SIMBOL': ')',
            'VALUE': 2
        },
    ];

    constructor() { };

    resolve(baseCalc, value = 2) {
        let result = 0;

        this.getByValue(value).forEach(operator => {
            const position = baseCalc.indexOf(operator.SIMBOL);
            if (position > -1) {
                const valuesToResolv = this.extractValues(position, baseCalc);
                result = this.calculadora(valuesToResolv.operador, valuesToResolv.numero1, valuesToResolv.numero2);
                baseCalc.splice(position - 1, 3, result);
            }
        });

        if (value) {
            result = this.resolve(baseCalc, value - 1);
        }
        return result;
    }

    calculadora(operador, numero1, numero2) {
        return calculadora(operador, parseInt(numero1), parseInt(numero2));
    }

    extractValues(position, baseCalc) {
        let extract = baseCalc.map(e => e);
        const itensCalc = extract.splice(position - 1, 3);
        return {
            'numero1': itensCalc[0],
            'operador': itensCalc[1],
            'numero2': itensCalc[2]
        }
    }

    getByValue(value) {
        return this.OPERATORS_.filter(operator => operator.VALUE === value);
    }
};


function inputValue(id) {
    let value = id.replace('btn_', '');
    document.getElementById('console').value = document.getElementById('console').value + value;
}

function limpar() {
    document.getElementById('console').value = '';
}



function getResult() {
    let value = document.getElementById('console').value;
    const result = new Operatos().resolve(value.split(''), 1);
    document.getElementById('console').value = result;

}


const $CONSOLE = document.getElementById('console');

const checkInputTel = function (e) {
    const value = this.value = this.value.replace(/[^\d | + \-  \.  \*  \/  \(  \)]/, '');
    restartCursor(this, value.length);

}

$CONSOLE.addEventListener('input', checkInputTel);

$CONSOLE.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        getResult();
    }
});


// function operation(operatiors, numbers) {
//     if (operatiors.length && numbers.length > 1) {
//         const operatiors_ = operatiors.reduce((accumulatedValue, currentValue) => {
//             const value = OPERATORS.filter(operator => operator.SIMBOL === currentValue);
//             if (value.length) {
//                 return accumulatedValue = [...accumulatedValue, value[0]];
//             }
//         }, []);

//     }


// let resultado = calculadora(operatiors[0], numbers[0], numbers[1]);
// operatiors.shift();
// numbers.shift();
// numbers[0] = resultado;
// }



function restartCursor(element, index) {
    element.selectionStart = index;
    element.selectionEnd = index;
}
// $CONSOLE.addEventListener('click', (e)=> {
//     debugger;
// });