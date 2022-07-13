//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(n) where n is the number of nodes in the binary tree
Space Complexity - O(n)
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 var levelOrder = function(root) {
    let q = [root], ans = []
    while (q[0]) {
        let qlen = q.length, row = []
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()
            row.push(curr.val)
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        ans.push(row)            
    }
    return ans
};
/*
Not a best solution. Accepted Solution coded by me. 
TC - The time complexity is O(n)  where n is the number of nodes in the binary tree
SC- The space complexity is O(n) result array
*/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root],res=[[root.val]];
    while(queue.length !== 0){
        
        let leftRight = [],qln = queue.length;
        for(let i=0;i<qln;i++){
            let head = queue.shift();
            if(head.left){
                leftRight.push(head.left.val);
                queue.push(head.left);
            }
            if(head.right){
                leftRight.push(head.right.val);
                queue.push(head.right);
            }
        }
        if(leftRight.length > 0) res.push(leftRight);
    }
    return res;
};