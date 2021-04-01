function flatten(array) {
    return array.reduce((start, current) => start.concat(current));
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));