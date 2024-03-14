static boolean hasCycle(SinglyLinkedListNode head) {
    Map<SinglyLinkedListNode, Boolean> visitedNodes = new HashMap<>();
    SinglyLinkedListNode node = head;
    while (node != null) {
        if (visitedNodes.get(node) != null) {
            return true;
        }
        visitedNodes.put(node, true);
        node = node.next;
    }
    return false;
}