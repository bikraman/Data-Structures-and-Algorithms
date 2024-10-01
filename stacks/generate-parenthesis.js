
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    const core = []
    const set = new Set();

    for(let i = 1; i <= n; i++) {
        core.push("(")
        core.push(")")
    }

};

generateParenthesis(8);

