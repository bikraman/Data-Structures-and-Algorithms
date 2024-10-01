/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const stack = []

    const chars = s.split("");

    const len = chars.length;
    for (let i = 0; i < len; i++) {
        if (i === 0) 
            stack.push(chars[i])
        else if (stack[stack.length - 1] === "(" && chars[i] === ")") 
            stack.pop()
        else if (stack[stack.length - 1] === "{" && chars[i] === "}") 
            stack.pop()
        else if (stack[stack.length - 1] === "[" && chars[i] === "]") 
            stack.pop()
        else
            stack.push(chars[i])
    }

    if (stack.length === 0)
        return true;
    else 
        return false;

};

isValid("{}[]")