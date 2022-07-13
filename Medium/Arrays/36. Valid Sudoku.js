//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(n^2)
Space Complexity - O(n) 
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let rows = new Set();
      let cols = new Set();
      let boxes = new Set();
      let curRowElem;
      let curColElem;
      let curBoxElem;

      for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[0].length; j += 1) {
          curRowElem = board[i][j]
          curColElem = board[j][i]
          curBoxElem = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][((i * 3) % 9) + (j % 3)]

          if (rows.has(curRowElem)) return false;
          if (curRowElem !== ".") rows.add(curRowElem);

          if (cols.has(curColElem)) return false;
          if (curColElem !== ".") cols.add(curColElem);

          if (boxes.has(curBoxElem)) return false;
          if (curBoxElem !== ".") boxes.add(curBoxElem);
        }

        rows.clear()
        cols.clear()
        boxes.clear()
      }

      return true;
};




//Code not working - Initial thoughts
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudokuError = function(board) {
    let rows = cols = board.length-1;
    while(rows > -1){
        let rowMap = new Map();
        for(let i=0;i<=cols;i++){
            if(board[rows][i] === '.') continue;
            else{
                if(rowMap.has(board[rows][i])) return false;
                rowMap.set(board[rows][i],1);
            }
        }
        rows--;
    }
    rows = cols;
    while(cols > -1){
        
        let colMap = new Map();
        for(let i=0;i<=rows;i++){
            if(board[i][cols] === '.') continue;
            else{
                if(colMap.has(board[i][cols])) return false;
                colMap.set(board[i][cols],1);
            }
        }
        
        cols--;
    }
    //Not Correct Code
    let k =j=0;
    while(k<=9){
        while(j < k+3){
            let smallBoard = Array.from(Array(1), () => new Array(1));
            smallBoard[0].push(board[j].slice(k,k+3));
            console.log(smallBoard);
            j++;
        }
        //isValidSudoku(smallBoard);
        k= k+3;
    }
    return true;
};