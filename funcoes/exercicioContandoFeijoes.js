const countCaractere = (palavra, caractere) => {
    let count = 0

    for (let i = 0; i <= palavra.length; i++) {
        if (palavra[i] === caractere) {
            count++
        }
    }

    return count
}

console.log(countCaractere("kakkerlak", "k"))