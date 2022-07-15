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
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    let current = new ListNode();
    let dummy = current;
    while(head !== null){
        if(head.val === val){
            head = head.next;
            continue;
        } 
        else current.next = head;
        
        head = head.next;
        current = current.next;
    }
    if(head === null) current.next = null
    return dummy.next;
};