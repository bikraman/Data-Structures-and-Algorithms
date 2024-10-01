/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    if (nums[0] < nums[nums.length - 1]) {
        return nums[0]
    }

    let start = 0
    let end = nums.length - 1

    let pivot = Math.floor((start + end)/2)

    let flag = true

    while(flag) {

        if (nums[pivot] > nums[pivot + 1]) {
            flag = false
            return nums[pivot + 1]
        }

        if (nums[pivot] > nums[start]) {
            start = pivot
        }
        else {
            end = pivot
        }

        pivot = Math.floor((start + end)/2)
    }
    
};

findMin([3,4,5,1,2])
findMin([4,5,6,7,0,1,2])
findMin([11,13,15,17])


