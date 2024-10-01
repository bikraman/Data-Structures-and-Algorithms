let temperatures = [55,38,53,81,61,93,97,32,43,78]

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

    let stack = [];
    let result = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length !== 0 && temperatures[stack.at(-1)] < temperatures[i])  { //'>=' can be substitute for any operation reqd
            let curr = stack.pop()
            result[curr] = i - curr;
        }            
        stack.push(i) // append current index's item to stack
    }

    for (let i = 0; i < stack.length; i++) {
        result[stack[i]] = 0;
    }

    return result;
};

dailyTemperatures(temperatures);