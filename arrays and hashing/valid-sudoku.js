const board = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


function verifyMatrix(matrix, width, height, startingX, startingY) {

    const widthBound = startingX + width;
    const heightBound = startingY + height;

    const verificationMap = new Map();

    for(let i = startingX; i < widthBound; i++) {
        for(let j = startingY; j < heightBound; j++) {

            if (verificationMap.has(matrix[i][j])) {
                return false 
            }

            if (matrix[i][j] !== ".")
                verificationMap.set(matrix[i][j])

        }
    }

    return true;

}

function isValid(board) {

    for(let i = 0; i < board.length; i++) {
        const validationMap = new Map();

        const grid = board[i].filter((value) => value !== ".");
        for(let j = 0; j < grid.length; j++) {
            if(validationMap.has(grid[j]))
                return false;

            validationMap.set(grid[j])
        }
    }

    for(let i = 0; i < board.length; i++) {

        const validationMap = new Map();

        for(let j = 0; j < board.length; j++) {


            if(validationMap.has(board[j][i]))
                return false;

            if(board[j][i] !== ".")
                validationMap.set(board[j][i])
        }
    }


    for(let i = 0; i < board.length; i = i + 3) {
        for(let j = 0; j < board.length; j = j + 3) {
            if (!verifyMatrix(board, 3, 3, i, j)) {
                return false;
            }
        }
    }

    return true;
}

console.log(isValid(board))