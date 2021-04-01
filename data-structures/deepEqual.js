function deepEqual(obj1, obj2) {
    if(obj1 === obj2) {
        return true;
    }
    if((typeof obj1 == 'object' && obj1 == null) && (typeof obj1 == 'object' && obj1 == null)) {
        return false;
    }
    const obj1Keys = Object.keys(obj1), obj2Keys = Object.keys(obj2);
    
    if(obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    for(let property of obj1Keys) {
        if(!obj2.hasOwnProperty(property)) {
            return false;
        }
        if(!obj2Keys.includes(property)) {
            return false;
        }
        if(!deepEqual(obj1[property], obj2[property])) {
            return false;
        }
    }

    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));