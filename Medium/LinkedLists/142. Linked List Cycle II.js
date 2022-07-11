//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(n)
Space Complexity - O(1)
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(current) {
    while(current){
        if(!current.isVisited){
            current.isVisited = true;
        }else{
            break;
        }
        current = current.next;
    }
    
    return current;
};