/*

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
*/



const sudoku = (board) => {
    const col = {}
    const row = {};
    const box = {};

    for (let i = 0; i < board.length; i+=1) {
        for (let j = 0; j < board.length; j+=1) {
            const value = board[i][j];

            if (value !== '.') {
                const boxId = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (
                    row[`${i}-${value}`] || 
                    col[`${j}-${value}`] || 
                    box[`${boxId}-${value}`]
                ) return false;

                row[`${i}-${value}`] = true;
                col[`${j}-${value}`] = true;
                box[`${boxId}-${value}`] = true;
            }
        }
    }
    return true;
};



// Second solution using 1 for loop, 2 indexes (same time complexity, less code)
const sudoku2 = (board) => {
    const col = {};
    const row = {};
    const box = {};

    const dimension =(board.length * board.length);

    for (let index = 0; index < dimension; index+=1){
        let i = Math.floor(index / 9);
        let j = Math.floor(index % 9);

        const value = board[i][j];

        if (value !== '.') {
            const boxKey = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (
                col[`${i}-${value}`] ||
                row[`${j}-${value}`] ||
                box[`${boxKey}-${value}`]
            ) return false;

            col[`${i}-${value}`] = true; 
            row[`${j}-${value}`] = true;
            box[`${boxKey}-${value}`] = true;
        }
    }
    return true;
}

console.log(sudoku(board = 
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]));

console.log(sudoku(board = 
    [["8","3",".",".","7",".","7",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]));



console.log(sudoku2(board = 
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]));

console.log(sudoku2(board = 
    [["8","3",".",".","7",".","7",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]));