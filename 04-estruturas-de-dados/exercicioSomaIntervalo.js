const soma = (data) => {
    let total = 0

    for (let i = 0; i < data.length; i++) {
        total += data[i]
    }

    return total
}

const range = (inicio, fim, incremento = inicio < fim ? 1 : -1) => {
    let data = []

    if (incremento > 0) {
        for (let i = inicio; i <= fim; i += incremento) {
            data.push(i)
        }
    } else {
        for (let i = inicio; i >= fim; i += incremento) {
            data.push(i)
        }
    }



    return data
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(soma(range(1, 10)));
// → 55