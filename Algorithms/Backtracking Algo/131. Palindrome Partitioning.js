//********************** BEST SOLUTION **********************************/
/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalindrome = (string,start,end) =>{

    while(start < end){
        if(string[start] !== string[end])  return false;
        start++;
        end--;
    }
    return true;
}
var partition = function(s) {
    var stack = [];
    const res = [];
    
    const backTrack = (s,i) =>{
        if(i == s.length){
            res.push(stack.slice());
            return;
        }
        for(let j=i;j<s.length;j++){
            if(isPalindrome(s,i,j)){
                stack.push(s.slice(i,j+1));
                backTrack(s,j+1);
                stack.pop();
            }
        }
    }
    backTrack(s,0);
    return res;
};