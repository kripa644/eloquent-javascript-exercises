//solution 1
for(let num = 1; num <= 100; num++) {
    if(num % 3 === 0 && num % 5 === 0) {
        console.log('FizzBuzz');
    } else if(num % 3 === 0) {
        console.log('Fizz');
    } else if(num % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(num);
    }
}

// solution 2
for(let num = 1; num <= 100; num++) {
    let numbers = '';

    if(num % 3 === 0) {
        numbers += 'Fizz';
    }
    if(num % 5 === 0) {
        numbers += 'Buzz';
    }
    console.log(numbers || num);
}