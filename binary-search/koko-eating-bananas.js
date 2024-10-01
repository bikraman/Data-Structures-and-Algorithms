/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {

    let max = piles.sort((a, b) => b - a)[0]

    let s = 1

    while (s <= max) {

        let sum = 0

        for (let i = 0; i < piles.length; i++) {
            sum += Math.floor(piles[i]/s)
        }

        console.log(sum + " " + s)

        if (sum === h)
            return s

        s++
    }

    console.log("=====")

    return -1
    
    
};

console.log(minEatingSpeed([3,6,7,11], 8))
console.log(minEatingSpeed([30,11,23,4,20], 5))
console.log(minEatingSpeed([30,11,23,4,20], 6))
// console.log(minEatingSpeed([312884470]), 312884469)