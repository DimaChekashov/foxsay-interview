function dijkstra(graph, startNode) {
  const distances = {};
  for (let node in graph) {
    distances[node] = node === startNode ? 0 : Infinity;
  }

  const visited = {};

  while (true) {
    let minDistance = Infinity;
    let closestNode = null;
    for (let node in distances) {
      if (!visited[node] && distances[node] < minDistance) {
        minDistance = distances[node];
        closestNode = node;
      }
    }

    if (closestNode === null) {
      break;
    }

    visited[closestNode] = true;

    for (let neighborNode in graph[closestNode]) {
      let distanceToNeighbor = graph[closestNode][neighborNode];
      let totalDistance = distances[closestNode] + distanceToNeighbor;
      if (totalDistance < distances[neighborNode]) {
        distances[neighborNode] = totalDistance;
      }
    }
  }

  return distances;
}

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};

const startNode = 'A';
const shortestDistances = dijkstra(graph, startNode);
console.log(shortestDistances);
