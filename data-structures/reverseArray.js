const reverseArray = (array) => {
    let reversedArray = [];
    for(let value of array) {
        reversedArray.unshift(value);
    }
    return reversedArray;
};

const reverseArrayInPlace = (array) => {
    const length = Math.floor(array.length / 2);
    for(let i= 0; i < length; i++) {
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

console.log(reverseArray(['A', 'B', 'C']));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));