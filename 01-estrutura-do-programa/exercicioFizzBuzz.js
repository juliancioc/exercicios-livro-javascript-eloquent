let countFizz = 0
let countBuzz = 0
let countFizzBuzz = 0

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log(`${i}) - Fizz`)
        countFizz++
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(`${i}) - Buzz`)
        countBuzz++
    } else if (i % 5 === 0 && i % 3 === 0) {
        console.log(`${i}) - FizzBuzz`)
        countFizzBuzz++
    } else {
        console.log(`${i}`)
    }
}

console.log(countFizz)
console.log(countBuzz)
console.log(countFizzBuzz)