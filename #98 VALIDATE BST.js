/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function TreeNode(val) {
         this.val = val;
         this.left = this.right = null;
     }

var isValidBST = function(root) {
    root = new TreeNode(val);
    let currentNode = root;
    let queue = [];
    queue.push(currentNode);
    while(queue.length >0){
      currentNode = queue.shift();
      if(currentNode.left && currentNode.left.val <currentNode.val){
        queue.push (currentNode.left);
      }
      else{return false;}
       if(currentNode.right && currentNode.right.val >currentNode.val){
        queue.push (currentNode.right);
      }
      else{
        return false;
        }
    }
    return true;

};

console.log(isValidBST([5,1,4,null,null,3,6]));