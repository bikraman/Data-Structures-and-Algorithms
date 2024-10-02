/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {

        const elem = nums[i]

        if (map.has(elem)) {
            let val = map.get(elem)
            map.set(elem, ++val)
        }
        else
            map.set(elem, 1)
    }


    const sorted = map.entries()

    const items = []
    
    for(item of sorted) {
        items.push(item)
    }

    const grouped = items.sort((a,b) => b[1] - a[1])

    return grouped.slice(0, k).map(value => value[0])
};

topKFrequent([2,2,3,1,1,1], 2)