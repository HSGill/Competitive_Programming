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
var middleIndex = function (head) {
    var length = 1;
    var current = head;
    while (current.next !== null) {
        length++;
        current = current.next;
    }
    if (length % 2 !== 0) { return Math.floor(length / 2); }
    else {
        return (length / 2 ) ;
    }
}


var middleNode = function (head) {
 var index = middleIndex(head);
 let current =head;
 while (index>0  ){
     current = current.next;
     index--;
 }
 return current;
};
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
var middleIndex = function (head) {
    var length = 1;
    var current = head;
    while (current.next !== null) {
        length++;
        current = current.next;
    }
    if (length % 2 !== 0) { return Math.floor(length / 2); }
    else {
        return (length / 2 ) ;
    }
}


var middleNode = function (head) {
 var index = middleIndex(head);
 let current =head;
 while (index>0  ){
     current = current.next;
     index--;
 }
 return current;
};
