/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
         this.next = null;
         this.val = val;
       }
var mergeTwoLists = function(l1, l2) {
    
    while(l1 && l2){
     if(l1.val <= l2.val){
         let l1Next = l1.next;
         l1.next = l2;
         l2.next = l1Next;
     }
     else {
         let l2Next = l2.next;
         l2.next = l1;
         l1.next = l2Next;
     }

    }
};