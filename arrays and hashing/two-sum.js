const arr = [34, 54 , 1, 3, 4, 45, 12, 9, 23, 53, 102, 99, 33, 7, 11, 17];
const target = 48;


for (let i = 0; i < arr.length; i++) {
    const number1 = arr[i];

    for (let j = i; j < arr.length; j++) {

        const number2 = arr[j];

        if (number1 + number2 === target) {
            console.log (`${i} and ${j}`);
        }
    }
}

let map = new Map();

for (let i = 0; i < arr.length; i++) {
    map.set(target - arr[i], i)

    if (map.has(arr[i])) {
        console.log(`${map.get(arr[i])} and ${i}`)
    }
}


const length = ar.length;
for (let i = 0; i <  length; i++) {
    let start = 0;
    let end = 0;
}
