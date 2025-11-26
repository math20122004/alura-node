let numberEven = 0
let numberOdd = 0

for (let i = 1; i <= 100; i++){
    if (i % 2 == 0) {
        numberEven++
    } else {
        numberOdd++
    }
}
console.log(`${numberEven} numbers are even.`)
console.log(`${numberOdd} numbers are odd.`)