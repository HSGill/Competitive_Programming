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
         this.val = val;
         this.next = null;
     }
    
var addTwoNumbers = function(l1, l2) {
  let List = new ListNode(0);
  let head  = List;
    let carry = 0;
    let sum  =0;
    while(l1!==null || l2 !== null){
        
         sum = carry + l1.val + l2.val;
         if(sum>=10){
             carry = 1;
             sum = sum-10;
         }
         l1 = l1.next;
         l2 = l2.next;

    }
};