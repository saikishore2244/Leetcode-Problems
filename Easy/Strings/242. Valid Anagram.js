//********************** BEST SOLUTION **********************************/
/*
SAME SOLUTION AS PROBLEM 383 -RANSOM NOTE
Time Complexity - O(n)
Space Complexity - O(1)
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(r, m) {
    if(r.length !== m.length) return false;
    let mMap = new Map();
    for(let i=0;i<m.length;i++){
        if(mMap.has(m[i])) mMap.set(m[i],mMap.get(m[i])+1);
        else mMap.set(m[i],1);
    }
    for(let i=0;i<r.length;i++){
        if(!mMap.has(r[i]) || mMap.get(r[i]) <= 0) return false;
        mMap.set(r[i],mMap.get(r[i])-1);
    }
    //if(m.split('').sort().join('') !== r.split('').sort().join('')) return false;
    return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if (s.length!==t.length) return false
    let sourceMap = {};
    for (let i of t) {
        if (sourceMap[i]===undefined) sourceMap[i] = [];
        sourceMap[i]++
    }
    for (let i of s) {
        if (sourceMap[i]===undefined) return false
        sourceMap[i]--;
        if (sourceMap[i]===0) sourceMap[i] = undefined
    }
    return true
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(r, m) {
    return m.split('').sort().join('') !== r.split('').sort().join('')
};