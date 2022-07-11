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
//slow and fast pointers dont take extra space
 var middleNode = head=>{
    let slow = fast = head;
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next;
    }
    return slow;
};



//Solution tried by me working but can be better.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// TC = O(N), SC = O(1)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let middle = head;
    let count = 0;
    while(head !== null){
        count++;
        head = head.next;
    }
    let middleVal = Math.floor(count/2);
    while(middleVal !== 0){
        middle = middle.next;
        middleVal--;
    }
    return middle;
};