//********************** BEST SOLUTION **********************************/
/* 
Hash Table, String, Greedy
Time Complexity - O(n)
Space Complexity - O(n) Map is created and stores all values
*/



//Not a best solution. Accepted Solution coded by me. TC - O(n) SC- 0(n)
/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    let stack = [],key=0,palMap = new Map();
    for(let i=0;i<s.length;i++){
        if(palMap.has(s[i])) palMap.set(s[i],palMap.get(s[i])+1);
        else palMap.set(s[i],1);
    }
    s = [...palMap.keys()].join();
    let highestOdd = [1], count=0;
    for(let val of palMap.values()){
        if(val%2 == 1 && highestOdd[0] <= val) {
            highestOdd[0] = val;
            highestOdd.push([...palMap.keys()][count]);
        }
        count++
    }
    for(let i= 0;i<s.length;i++){
        if(s[i]==highestOdd[1]){
            let k = palMap.get(s[i]);
            while(k > 0){
                stack.splice(Math.floor((stack.length-1)/2),0,s[i]);
                k--;
            }
        }
        else{
            let j = palMap.get(s[i]);
            while(j > 1){
                stack.push(s[i]);
                stack.unshift(s[i]);
                j = j-2;
            }
        }
    }
    return stack.length;
};