/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    const final = [];
    const len = tokens.length;

    for (let i = 0; i < len; i++) {
        const item = tokens[i]

        if (item === "+") {
            const op1 = final[final.length - 1];
            const op2 = final[final.length - 2];

            final.pop();
            final.pop()

            final.push(op2 + op1)
        }
        else if (item === "-") {

            const op1 = final[final.length - 1];
            const op2 = final[final.length - 2];

            final.pop();
            final.pop()

            final.push(op2 - op1)
        }
        else if (item === "*") {
            const op1 = final[final.length - 1];
            const op2 = final[final.length - 2];

            final.pop();
            final.pop()

            final.push(op2 * op1)
        }
        else if(item === "/") {
            const op1 = final[final.length - 1];
            const op2 = final[final.length - 2];

            final.pop();
            final.pop()

            final.push(Math.trunc(op2 / op1))
        }
        else {
            final.push(Number(item))
        }
    }


    return final[0]
};

tokens = ["2","1","+","3","*"]

console.log(evalRPN(tokens))