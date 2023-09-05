/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 */


function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;
    const queue: any | null = [root.left, root.right]

    while (queue.length > 0){
        const left = queue.shift();
        const right = queue.shift();

        if (!left && !right) continue;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;

        queue.push(left.left);
        queue.push(right.right);
        queue.push(left.right);
        queue.push(right.left);
    }
    return true;
};