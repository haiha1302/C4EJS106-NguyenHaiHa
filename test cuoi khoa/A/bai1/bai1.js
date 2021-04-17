function findOppositeNumber(n , inputNumber) {
    num = (inputNumber + (n / 2)) % n
    return num
}

console.log(findOppositeNumber(10, 2))
console.log(findOppositeNumber(10, 6))