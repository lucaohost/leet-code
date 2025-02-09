### **Breadth-First Search (BFS)**
BFS is a graph traversal algorithm that explores all neighbors of a node before moving to the next level of nodes. It uses a **queue (FIFO - First In, First Out)** to keep track of nodes to be visited.

### **How BFS Works:**
1. Start at a given node.
2. Add the starting node to a queue.
3. While the queue is not empty:
   - Dequeue a node.
   - Process the node.
   - Add all its unvisited neighbors to the queue.

(The exact order might vary depending on the structure of the graph.)

This implementation ensures each node is visited once and all its neighbors are explored before moving deeper into the graph.