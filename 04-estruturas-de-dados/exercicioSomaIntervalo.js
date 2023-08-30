const soma = (data) => {
    let total = 0

    for (let i = 0; i < data.length; i++) {
        total += data[i]
    }

    return total
}

const range = (...arguments) => {
    let inicio = arguments[0]
    let fim = arguments[1]
    let incremento = arguments[2] || 1

    const data = []

    for (let i = 0; inicio <= fim; i++) {
        data.push(inicio += incremento)
    }

    return data
}

console.log('RESULTADO', range(1, 10, 2))