/**
 * All Solutions are Same
 * Time Complexity - O(N)
 * Space Complexity - O(N);
 */

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
 var construct2DArray = function(original, m, n) {
    if (m*n !== original.length) return [];
    var DArray = new Array(m);
    var index = 0;
    for(let i=0;i<m;i++){
        DArray[i] = new Array(n);
        for(let j=0;j<n;j++){
            DArray[i][j] = original[index];
            index++;
        }
    }
    return DArray;
};

var construct2DArray = function (original, m, n) {
    if (n * m != original.length) return [];
  
    let res = Array.from({ length: m }, () => []);
  
    for (let i = 0; i < original.length; i++) {
      res[Math.floor(i / n)][i % n] = original[i];
    }
  
    return res;
};

var construct2DArray = function(original, m, n) {
    if (m*n !== original.length) return [];
    var DArray = new Array(m);
    var index = 0;
    var row = 0;
    var column = 0;
    for(let i=0;i<m;i++){
        DArray[i] = new Array(n);
    }
    while(index < original.length){
        DArray[row][column] = original[index];
        index++;
        column++;
        if(column == n){
            column = 0;
            row++;
        }
    }
    return DArray;
};