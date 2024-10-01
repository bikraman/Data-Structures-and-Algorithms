/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i] 
        if (row[0] <= target && row[row.length - 1] >= target) {
            return search(row, target)
        }
    }

    return false
    
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    const size = nums.length;

    for (let i = 0; i < size/2; i++) {
        
        if (nums[i] === target) {
            return true;
        }
        else if (nums[size - i - 1] === target) {
            return true;
        }

    }

    return false

};

const isFound = searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)
console.log(isFound)