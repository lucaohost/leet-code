class SinglyLinkedListNode {
    data: any;
    next: SinglyLinkedListNode | null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}

class HasCycle {
    static hasCycle(head: SinglyLinkedListNode | null): boolean {
        const visitedNodes: Map<SinglyLinkedListNode, boolean> = new Map();
        let node: SinglyLinkedListNode | null = head;

        while (node !== null) {
            if (visitedNodes.has(node)) {
                return true;
            }
            visitedNodes.set(node, true);
            if (node.next !== null) {
                node = node.next;
            } else {
                break;
            }
        }
        return false;
    }
}
