//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(n)
Space Complexity - O(n) Map is created and stores all values
*/
//indexOf method has startIndex as second parameter 
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    for(let i=0;i<s.length;i++){
        if(s.indexOf(s[i]) === i && s.indexOf(s[i],i+1)  === -1) return i;
    }
    return -1;
};

/*
Not a best solution because. Accepted Solution coded by me. TC - O(n) SC- O(1) Max Space occupied is 26 as english alphabets are 26
*/
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let sMap = new Map();
    for(let i=0;i<s.length;i++){
        if(sMap.has(s[i])) sMap.set(s[i],sMap.get(s[i])+1);
        else sMap.set(s[i],1);
    }
    for(let key of sMap.keys()){
        if(sMap.get(key) == 1){
            return s.indexOf(key);
            break;
        }
    }
    return -1;
};