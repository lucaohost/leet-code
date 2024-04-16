/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    if (depth === 1) {
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }

    const dfs = (node: TreeNode | null, currDepth: number) => {
        if (!node) return;

        if (currDepth === depth - 1) {
            const leftNode = new TreeNode(val);
            const rightNode = new TreeNode(val);
            leftNode.left = node.left;
            rightNode.right = node.right;
            node.left = leftNode;
            node.right = rightNode;
            return;
        }

        dfs(node.left, currDepth + 1);
        dfs(node.right, currDepth + 1);
    };

    dfs(root, 1);
    return root;
}