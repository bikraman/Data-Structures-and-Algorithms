/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let start = 0
    let end = nums.length
    let pivot = Math.floor(nums.length/2)

    while(nums[pivot] !== target) {

        if (end === start + 1)
            return -1

        if(nums[pivot] > target) {
            end = pivot;
        }
        else if (nums[pivot] < target) {
            start = pivot;
        }

        pivot = Math.floor((start + end)/2)

    }

    return pivot;
};

console.log(search([-1,0,3,5,9,12],9))
