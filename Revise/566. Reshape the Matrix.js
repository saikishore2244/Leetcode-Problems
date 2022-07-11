//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(nm)
Space Complexity - O(nm)
*/
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let singleArr = mat.flat();
    let res = [];
    
    if(r*c !== singleArr.length) return mat;
    while(r--){
       res.push(singleArr.slice(res.length*c,res.length*c+c));
    }
    return res;
};
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    let singleArr = [];
    let res = Array.from(Array(r), () => new Array(c));
    for(let i=0;i<mat.length;i++){
        singleArr = [...singleArr,...mat[i]]
    }
    if(r*c !== singleArr.length) return mat;
    let k = 0;
    while(k<singleArr.length){
       for(let row = 0;row<r;row++){
            for(let col =0;col< c;col++){
                res[row][col] = singleArr[k];
                k++;
            }
        }
    }
    return res;
};