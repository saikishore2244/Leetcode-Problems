//********************** BEST SOLUTION **********************************/
/*
Time Complexity - The time complexity is O(V+E), where V is the number of vertices and E is the number of edges.
Space Complexity - The space complexity is O(h), where h is the maximum height of the tree.
*/
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/***************************BEST RECURSIVE SOLUTION*********************/
/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root,result=[]) {
    if(!root) return [];
    result.push(root.val);
    for(let child of root.children)
        preorder(child,result);
    return result;
};




/*
Not a best solution. Accepted Solution coded by me. 
TC - The time complexity is O(V+E), where V is the number of vertices and E is the number of edges.
SC- The space complexity is O(h), where h is the maximum height of the tree.
*/

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    if(!root) return [];
    let result =[root.val];
    
    getAllValues = (root,result) =>{
        let currentChild = root.children;
        let i=0;
        while(i< currentChild.length){
            result.push(currentChild[i].val);
            getAllValues(currentChild[i],result);
            i++;
        }
    }
    getAllValues(root,result);
    return result;
};

//TODO: Solve using Iterative Method