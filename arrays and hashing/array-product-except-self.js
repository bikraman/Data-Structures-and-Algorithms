nums = [1,2,3,4]
nums2 = [-1,1,0,-3,3]

function product(nums) {

    const len = nums.length;

    const final = []

    let prod = 1;

    const prevProdMap = new Map();
    const nextProdMap = new Map();

    for (let i = 0; i < len; i++) {
        let num = nums[i]

        prevProdMap.set(i, prod)
        prod = num * prod;
    }


    prod = 1;

    for(let i = len - 1; i >= 0; i--) {
        let num = nums[i]

        nextProdMap.set(i, prod)
        prod = num * prod;
    }


    for (let i = 0; i < len; i++) {
        final.push(prevProdMap.get(i) * nextProdMap.get(i))
    }

    return final;
}

console.log(product(nums2))