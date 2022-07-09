//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(n)
Space Complexity - O(n) Map is created and stores all values
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    let charMap = new Map();
    let charSet = new Set();
    for(let i=0; i<s.length; i++){
        let char1 = s.charAt(i);
        let char2 = t.charAt(i);
        if(charMap.has(char1)){
            if(charMap.get(char1) !== char2){
                return false;
            }
        }else{
            
            if(charSet.has(char2)) return false;
            
            charMap.set(s[i],t[i]);   
            charSet.add(char2);
        }
    }
    return true;
};

console.log(isIsomorphic('paper','title'));
console.log(isIsomorphic('baba','badc'));
console.log(isIsomorphic('foo','bar'));
console.log(isIsomorphic('egcd','bdrd'));