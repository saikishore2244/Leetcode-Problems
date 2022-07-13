//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(n)
Space Complexity - O(1)
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(r, m) {
    let mMap = new Map();
    for(let i=0;i<m.length;i++){
        if(mMap.has(m[i])) mMap.set(m[i],mMap.get(m[i])+1);
        else mMap.set(m[i],1);
    }
    for(let i=0;i<r.length;i++){
        if(!mMap.has(r[i]) || mMap.get(r[i]) <= 0) return false;
        mMap.set(r[i],mMap.get(r[i])-1);
    }
    return true;
};

/*
Not a best solution. Accepted Solution coded by me. TC - O(n) SC- O(1) Max Space occupied is 26 as english alphabets are 26
*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(r, m) {
    let mMap = new Map();
    let rMap = new Map();
    for(let i=0;i<m.length;i++){
        if(mMap.has(m[i])) mMap.set(m[i],mMap.get(m[i])+1);
        else mMap.set(m[i],1);
    }
    for(let i=0;i<r.length;i++){
        if(!mMap.has(r[i])) return false;
        if(rMap.has(r[i])) rMap.set(r[i],rMap.get(r[i])+1);
        else rMap.set(r[i],1);
    }
    for(let key of rMap.keys()){
        if(!(rMap.get(key) <= mMap.get(key))) return false;
    }
    return true;
};