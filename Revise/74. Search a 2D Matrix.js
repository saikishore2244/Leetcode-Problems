//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(rows+col)
Space Complexity - O(1)
*/






/*
Not a best solution. Accepted Solution coded by me. TC - O(rows+cols) SC- O(1)
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let cols = matrix[0].length;
    for(let i=0;i<matrix.length;i++){
        if(target > matrix[i][cols-1]){
            continue;
        }
        for(let j=0;j<cols;j++){
            if(matrix[i][j] == target){
               return true;
            }
        }
    }
    return false;
};