class Graph {
    constructor() {
      this.adjList = new Map();
    }
  
    // Add vertex to the graph
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, []);
      }
    }
  
    // Add edges between vertices
    addEdge(vertex, neighbor) {
      if (!this.adjList.has(vertex)) {
        this.addVertex(vertex);
      }
      if (!this.adjList.has(neighbor)) {
        this.addVertex(neighbor);
      }
      this.adjList.get(vertex).push(neighbor);
    }
  
    // Depth First Search algorithm
    dfs(startingNode, visited = new Set()) {
      visited.add(startingNode);
      console.log(startingNode);
      const neighbors = this.adjList.get(startingNode);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this.dfs(neighbor, visited);
        }
      }
    }
  }
  
  // Example usage:
  const graph = new Graph();
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('B', 'E');
  graph.addEdge('C', 'F');
  
  console.log('DFS traversal:');
  graph.dfs('A', new Set());
  