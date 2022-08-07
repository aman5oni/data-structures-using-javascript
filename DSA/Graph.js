class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.unDirectedAdjList = new Map();
    this.directedAdjList = new Map();
    this.weightedAdjList = new Map();
  }

  addUndirectedVertex = (vertex) => {
    this.unDirectedAdjList.set(vertex, []);
  };

  addDirectedVertex = (vertex) => {
    this.directedAdjList.set(vertex, []);
  };

  addWeightedVertex = (vertex) => {
    this.weightedAdjList.set(vertex, []);
  };

  addWeightedEdge = (vertexA, vertexB, weight) => {
    this.weightedAdjList.get(vertexA).push({
      vertex: vertexB,
      weight
    });
    
  };

  addUnDirectedEgde = (vertexA, vertexB) => {
    this.unDirectedAdjList.get(vertexA).push(vertexB);
    this.unDirectedAdjList.get(vertexB).push(vertexA);
  };

  addDirectedEgde = (vertexA, vertexB) => {
    this.directedAdjList.get(vertexA).push(vertexB);
  };

  printDirectedGraph = () => {
    console.log("-----   Directed Graph   -----");
    let getKeys = this.directedAdjList.keys();

    for (let i of getKeys) {
      let getValues = this.directedAdjList.get(i);
      let conc = "";

      for (let j of getValues) conc += j + " ";

      console.log(i + " -> " + conc);
    }
    console.log("-----   Directed Graph   -----");
  };

  printWeightedGraph = () => {
    console.log("-----   Wieghted Graph   -----");
    let getKeys = this.weightedAdjList.keys();
    for (let i of getKeys) {
      let getValues = this.weightedAdjList.get(i);
      for (let j of getValues) {
        console.log(`${i} -> ${j.weight} -> ${j.vertex}`)
      }
    }
    console.log("-----   Weighted Graph   -----");
  };

  printUnDirectedGraph = () => {
    console.log("-----   Undirected Graph   -----");
    let getKeys = this.unDirectedAdjList.keys();

    for (let i of getKeys) {
      let getValues = this.unDirectedAdjList.get(i);

      let conc = "";
      for (let j of getValues) {
        conc += j + " ";
      }

      console.log(i + " -> " + conc);
    }
    console.log("-----   Undirected Graph   -----");
  };
}

// Undirected Graph
const objForUndirected = new Graph();
objForUndirected.addUndirectedVertex("A");
objForUndirected.addUndirectedVertex("B");
objForUndirected.addUndirectedVertex("C");
objForUndirected.addUnDirectedEgde("A", "B");
objForUndirected.addUnDirectedEgde("C", "A");
objForUndirected.printUnDirectedGraph();

// Directed Graph
const objForDirected = new Graph();
objForDirected.addDirectedVertex("A");
objForDirected.addDirectedVertex("B");
objForDirected.addDirectedVertex("C");
objForDirected.addDirectedEgde("A", "B");
objForDirected.addDirectedEgde("C", "A");
objForDirected.printDirectedGraph();

// Weighted Graph
const objForWeighted = new Graph();
objForWeighted.addWeightedVertex("A");
objForWeighted.addWeightedVertex("B");
objForWeighted.addWeightedVertex("C");
objForWeighted.addWeightedEdge("A", "B",23);
objForWeighted.addWeightedEdge("C", "A",34);
objForWeighted.addWeightedEdge("B","C",20)
objForWeighted.addWeightedEdge("C","B",35)
objForWeighted.printWeightedGraph();
