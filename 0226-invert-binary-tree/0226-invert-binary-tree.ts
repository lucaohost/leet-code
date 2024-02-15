// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root != null) {
        let aux: TreeNode = root.right;
        root.right = root.left;
        root.left = aux;
        invertTree(root.right);
        invertTree(root.left);
    }
    return root;
};