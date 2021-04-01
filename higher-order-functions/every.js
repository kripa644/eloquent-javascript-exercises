function every(array, test) {
    for(let value of array) {
        if(!test(value)) {
            return false;
        }
    }
    return true;
}

function everySome(array, test) {
    return array.some(value => !test(value)) ? false : true;
}

console.log(every([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));