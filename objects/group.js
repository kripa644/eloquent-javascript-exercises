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
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.add(30);
group.delete(10);
console.log(group.has(10));
console.log(group.has(30));