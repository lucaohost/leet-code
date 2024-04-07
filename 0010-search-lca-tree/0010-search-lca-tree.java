public static Node lca(Node root, int v1, int v2) {
    // Check if v1 and v2 are on the left subtree
    if (root.data > v1 && root.data > v2)
        return lca(root.left, v1, v2);
        
    // Check if v1 and v2 are on the right subtree
    if (root.data < v1 && root.data < v2)
        return lca(root.right, v1, v2);

    // If v1 and v2 are on different subtrees, the current root is the LCA
    return root;
}