function calculadora(operador, numero1, numero2){
    if (operador == '+') {
        return numero1 + numero2;
    }

    if (operador == '-') {
            return numero1 - numero2;
    }

    if (operador == '*') {
        return numero1 * numero2;
    }

    if (operador == '/') {
        return numero1 / numero2;   
    }
    else {
        let resultado = calculadora('-', 1000,10);
        console.log(resultado, 'calculadora' ) 
     }

}

let resultado = calculadora('/', 1000,10);
console.log(resultado, 'calculadora' )
