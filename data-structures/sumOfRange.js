function range(start, end) {
    let numbers = [];
    if(start < end) {
        for(let i = start; i <= end; i++) {
            numbers.push(i);
        }
    } else {
        for(let i = start; i >= end; i--) {
            numbers.push(i);
        }
    }
    return numbers;
}

function sum(array) {
    let sum = 0;
    for(let value of array) {
        sum += value;
    }
    return sum;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));