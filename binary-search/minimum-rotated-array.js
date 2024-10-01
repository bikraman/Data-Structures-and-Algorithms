/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] > nums[i + 1]) {
            console.log("min element: " + nums[i + 1])
            return nums[i + 1]
        }
    }

    console.log("min element: " + nums[0])
    return nums[0]
    
};

findMin([3,4,5,1,2])
findMin([4,5,6,7,0,1,2])
findMin([11,13,15,17])


