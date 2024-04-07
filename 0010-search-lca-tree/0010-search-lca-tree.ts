class Nodee {
    data: number;
    left: Nodee | null;
    right: Nodee | null;
    
    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function lca(root: Nodee | null, v1: number, v2: number): Nodee | null {
    if (!root) return null;

    // Check if v1 and v2 are on the left subtree
    if (root.data > v1 && root.data > v2)
        return lca(root.left, v1, v2);
        
    // Check if v1 and v2 are on the right subtree
    if (root.data < v1 && root.data < v2)
        return lca(root.right, v1, v2);

    // If v1 and v2 are on different subtrees, the current root is the LCA
    return root;
}

// Example usage
const root = new Nodee(20);
root.left = new Nodee(10);
root.right = new Nodee(30);
root.left.left = new Nodee(5);
root.left.right = new Nodee(15);
root.right.left = new Nodee(25);
root.right.right = new Nodee(35);

// Test cases
console.log("Lowest Common Ancestor of 5 and 15:", lca(root, 5, 15)?.data); // Expected output: 10
console.log("Lowest Common Ancestor of 25 and 35:", lca(root, 25, 35)?.data); // Expected output: 30
console.log("Lowest Common Ancestor of 5 and 25:", lca(root, 5, 25)?.data); // Expected output: 20

