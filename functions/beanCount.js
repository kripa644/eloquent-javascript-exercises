const countChar = function(string, ch) {
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        if(string[i] == ch) {
            count += 1;
        }
    }
    return count;
}

const countBs = (string) => countChar(string, 'B');

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", 'k'));