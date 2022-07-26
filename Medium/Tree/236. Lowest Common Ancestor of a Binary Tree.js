//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(n) 
Space Complexity - O(n) [call stack - O(h) but O(n) in case of skewed tree]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    if(!root) {
        return null;
    }
	// recursive call to left and right child of each node
    const left = lowestCommonAncestor(root.left, p, q),
          right = lowestCommonAncestor(root.right, p, q);
    
	// if either both left and right child return a node or the root node value matches p or q node value,
	// return the node
    if((left && right) || root.val === p.val || root.val === q.val) {
        return root;
    } else if(left) {    // if only one of the p or q node is found at the left child, return that
        return left;
    } else if(right) {    // if only one of the p or q node is found at the right child, return that
        return right;
    }
    return null;    // none of the nodes is found when this node is processed completely, so return null
};