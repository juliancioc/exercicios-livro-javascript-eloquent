function multiplicador(valor) {
    return function (numero) {
        return numero * valor;
    };
}

var twice = multiplicador(2);

const total = twice(5);

console.log(total)