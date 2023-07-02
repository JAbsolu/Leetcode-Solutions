// const axios = require('axios');

// try {
//   const response = axios.request({
//     method: 'GET',
//     url: 'https://api-basketball.p.rapidapi.com/bets',
//     headers: {
//       'X-RapidAPI-Key': '52f9330da8msh2c6be0a096fffaap18f69ejsne7443c5751d0',
//       'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com',
//     },
//     body: {
//       get: 'bets',
//       paramaters: [],
//       errors: [],
//       results: 90,
//       response:[]
//     }
//   })
//   const data = response.data;
  
//   for (let key in data){
//     console.log(data[key]);
//     break;
//   }
// } catch(error) {
//   console.error(`Uh oh, there is an ${error}`);
// }















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


















