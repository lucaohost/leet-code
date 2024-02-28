function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    if (head === null) {
        return head;
    }
    let currentNode: ListNode = head;
    let nextNode: ListNode | null = head.next;
    while (nextNode !== null) {
        const greatestCommonDivisor: number = calculateGreatestCommonDivisor(currentNode.val, nextNode.val);
        currentNode.next = new ListNode(greatestCommonDivisor, nextNode);
        currentNode = nextNode;
        nextNode = currentNode.next;
    }
    return head;
};

function calculateGreatestCommonDivisor(firstVal: number, secondVal: number): number {
    const firstDivisor: number = firstVal > secondVal ? firstVal : secondVal;
    for (let divisor = firstDivisor; divisor > 0; divisor--) {
        if (firstVal % divisor === 0 && secondVal % divisor === 0) {
            return divisor;
        }
    }
    return 1;
}