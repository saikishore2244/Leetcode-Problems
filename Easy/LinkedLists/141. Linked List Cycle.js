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
/*
    Floyd's cycle finding algorithm - 2 pointers
    one moves double the speed of the other, eventually :-
    if(they coincide) means cycle exists
    else if exception is thrown end of the linked list came , no cycle was detected
*/
const hasCycleFloyds = function(head) {
    try {
        let slowPointer =head, fastPointer = head;
        while (true) {
            slowPointer = slowPointer.next
            fastPointer = fastPointer.next.next
            if (slowPointer === fastPointer)
                return true
        }
    } catch (e) {
        return false
    }
};