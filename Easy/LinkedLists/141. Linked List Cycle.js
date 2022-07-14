/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    //End Cases
    if(head === null) return false;
    //Base Case
    if (head.isVisited) return true;
    
    head.isVisited = true;
    
    return hasCycle(head.next);
};