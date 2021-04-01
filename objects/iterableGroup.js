class Group {
    constructor() {
        this.group = [];
    }

    add(value) {
        if(!this.has(value)) {
            this.group.push(value);
        }
    }

    delete(value) {
        this.group = this.group.filter(element => element != value);
    }

    has(value) {
        return this.group.indexOf(value) === -1 ? false : true;
    }

    static from(obj) {
        const group = new Group();
        for(let val of obj) {
            group.add(val);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.group.length) {
          return {done: true};
        } else {
          let result = {value: this.group.group[this.position],
                        done: false};
          this.position++;
          return result;
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}