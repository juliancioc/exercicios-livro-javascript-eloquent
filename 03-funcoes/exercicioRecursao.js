const numeroPar = (numero) => {
    if (numero === 0) {
        return true
    } else if (numero === 1) {
        return false
    } else if (numero < 0) {
        return numeroPar(Math.abs(numero))
    } else {
        return numeroPar(numero - 2)
    }

}

console.log(numeroPar(-2))