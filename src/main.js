
function inputValue(id) {
    let value = id.replace('btn_', '');
    document.getElementById('console').value =document.getElementById('console').value + value;
}

function limpar() {
    document.getElementById('console').value = '';
}

function getResult() {
    let value = document.getElementById('console').value;
    let numbers = value.split(/[^\d]/).map(number => parseInt(number));
    let operatiors = value.split(/\d/).filter(operator => operator);
    if (operatiors.length && numbers.length > 1) {
        let resultado = calculadora(operatiors[0], numbers[0], numbers[1]);
        document.getElementById('console').value = resultado;
    }
}
