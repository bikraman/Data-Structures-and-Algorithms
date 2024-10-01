function searchSum(target, nums) {

    nums = nums.splice(0,1)

    if (getSum(nums) === target) {
        return nums
    }
    else if(nums.length === 1)
        return nums
    else {
        searchSum(target, nums)
    }
}

function getSum(nums) {
    return nums.reduce((previous, current) => {
        return previous + current;
    })
}

const input = [2,4,5,1,5,10]

let sorted = input.sort((a, b) => a - b)

console.log(sorted)

const sum = input.reduce((previous, current) => {
    return previous + current;
})

console.log(sum)

const final = searchSum(51, [2,4,5,1,5,10])
console.log(final)