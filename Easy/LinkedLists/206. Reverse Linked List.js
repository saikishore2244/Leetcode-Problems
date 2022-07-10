//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(n)
Space Complexity - O(1)
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 *   null      A      ->    B  -> C  ->  D
 *   prev     curr   next
 */
var reverseList = function(head) {
    let currentP = head, prevP = null;
    while(currentP !== null){
        const nextP = currentP.next;
        currentP.next = prevP;
        prevP = currentP;
        currentP = nextP;
    }
    return prevP;  
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let values = [];
    let current = new ListNode();
    let dummy = current;
    while(head !== null){
        values.push(head.val);
        head = head.next;
    }
    for(let i= values.length-1; i>=0;i-- ){
        current.next = new ListNode(values[i],undefined);
        current = current.next;
    }
    return dummy.next
};