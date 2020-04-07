function calculadora(operador, numero1, numero2){
    if (operador == '+') {
        return somar(numero1, numero2);
    }

    if (operador == '-') {
        return subtrair(numero1, numero2);
    }

    if (operador == '*') {
        return  multiplicar(numero1, numero2);
    }

    if (operador == '/') {
        return dividir(numero1, numero2);   
    }

    if (operador == '%') {
        return porcentagem(numero1, numero2);
    }

    if (operador== '#') {
        return raizQuadrada(numero1, numero2); 
    }
    
    if (operador == 'mod') {
        return mod(numero1, numero2);
    } 
}

function somar(numero1, numero2) {
    return numero1 + numero2;
}

function subtrair(numero1, numero2) {
    return numero1 - numero2;
}

function dividir(numero1, numero2) {
    return numero1 / numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function porcentagem(numero1, numero2) {
    return numero2*numero1/100;
}

function raizQuadrada(numero1) {
    return 
}

function mod(numero1, numero2) {
    return numero1 % numero2;
}











let resultado = calculadora('-', -1, 2);
console.log(resultado, 'calculadora' )
