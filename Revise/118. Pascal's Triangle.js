//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(n^2)
Space Complexity - O(n*(n+1)/2) 
*/
var generate = function(numRows) {
    if (!numRows) return [];
    let matrix = [[1]];
    for (let i = 1; i < numRows; i++) {
        let row = [1], j = 1;
        while (j < i) {
            row.push(matrix[i-1][j-1]+matrix[i-1][j]);
            j++;
        }
        row.push(1);
        matrix.push(row);
    }
    return matrix;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let count =0 ,res=[];
    while(count < numRows){
        let stack = new Array(count+1);
        stack[0] = 1;
        stack[stack.length-1] = 1;
        if(res.length > 1){
            for(let i=0;i<res[count-1].length-1;i++){
                stack[i+1]= res[count-1][i]+res[count-1][i+1];
            }
        }
        res.push(stack);
        count++;
    }
    return res;
};