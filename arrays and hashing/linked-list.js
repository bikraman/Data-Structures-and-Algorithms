function Node(value, previous) {
    this.value = value
    this.previous = previous
}

function LinkedList() {

}

let start = new Node(100, null)
let previous = start;

for (let i = 0; i < 1e1; i++) {
    if (i === 0) {
        let node = new Node(i, previous);
        previous = node;
    }
    else {
        let node = new Node(i, previous);
        previous = node;
    }
}


while (previous.previous !== null) {
    console.log(previous.__proto__);
    previous = previous.previous;
}
