/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let p1 = 0
    let p2 = numbers.length - 1

    while (p1 < numbers.length - 1 && p2 > 0) {

        const sum = numbers[p1] + numbers[p2]
        console.log (sum)

        if (target === sum) {
            return [p1 + 1,p2 + 1]
        }

        if (sum > target) {
            p2--
        }
        else {
            p1++
        }
    }
    
};

twoSum([2,7,11,15], 9)

