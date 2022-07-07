//********************** BEST SOLUTION **********************************/
/*
Backtracking problem
1.Open Parentheses Count < n
2.Closed Parentheses Count < Open Parentheses Count
3.Open Parentheses Count = Closed Parentheses Count then return
*/
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    var stack = [];
    var res = [];
    
    var backTrack = (openN,closedN) => {
        console.log(openN,closedN,n);
        if(openN == n && closedN == n){
            res.push(stack.join(''));
            return;
        }
        if(openN < n){
            stack.push('(');
            backTrack(openN+1,closedN);
            stack.pop();
        }
        
        if(closedN < openN){
            stack.push(')');
            backTrack(openN,closedN+1);
            stack.pop();
        }
    }
    
    backTrack(0,0);
    return res;
};