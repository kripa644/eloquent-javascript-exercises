const size = 8;
let output = '';

for(let line = 0; line < size; line++) {
    for(let ch = 0; ch < size; ch++) {
        if((ch + line) % 2 === 0) {
            output += ' ';
        } else {
            output += '#';
        }
    }
    output += '\n';
}

console.log(output);