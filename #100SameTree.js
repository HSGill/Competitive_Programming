/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */


var isSameTree = function(p, q) {
    if (p == null && q == null) return true;
     // one of p and q is null
     if (q == null || p == null) return false;
     if (p.val != q.val) return false;
     return isSameTree(p.right, q.right) &&
             isSameTree(p.left, q.left);
   }
 
 