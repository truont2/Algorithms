/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {TreeNode} root
* @return {boolean}
*/

var isSymmetric = function(root) {
    if(root === null) {
        return true;
    }
    // now you know there are two subbranches so compare
    return symmetryChecker(root.left, root.right);

    function symmetryChecker(left, right) {
        // check if they are both leafs
        if(left === null && right === null) {
            return true;
        }

        // check if either one of them still has children or not when they should be the same
        if(left == null || right == null) {
            return false;
        }

        // compare values to see if symmetric
        if(left.val !== right.val) {
            return false; 
        }
        // check both direction of the tree, one function goes right the other goes left 
        return symmetryChecker(left.left, right.right) && symmetryChecker(left.right, right.left);
    }
}