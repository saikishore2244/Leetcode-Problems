//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(n)
Space Complexity - O(1)
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
 var deleteDuplicates = function(head) {
    let cur = head;
    while (cur) cur.val === cur.next?.val ? cur.next = cur.next.next : cur = cur.next;
    return head;
  };

/*
-> Not a best solution. Accepted Solution coded by me. TC - O(n) SC- O(n)
-> The number of nodes in the list is in the range [0, 300].
-> -100 <= Node.val <= 100
-> The list is guaranteed to be sorted in ascending order.
*/

 var deleteDuplicates = function(head) {
    if(head === null) return head
    let current = new ListNode(-101);         //Because -100 <= Node.val <= 100
    let dummy = current;
    while(head !== null){
        if(head.val === current.val){
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