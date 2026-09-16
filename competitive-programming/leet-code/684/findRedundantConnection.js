var findRedundantConnection = function (edges) {
    const parent = Array(edges.length + 1).fill(0).map((_, i) => i);

    const find = (u) => {
        while (u !== parent[u]) {
            parent[u] = parent[parent[u]];
            u = parent[u];
        }
        return u;
    };

    const union = (u, v) => {
        let rootU = find(u), rootV = find(v);
        if (rootU === rootV) return false;
        parent[rootV] = rootU;
        return true;
    };

    for (const [u, v] of edges) {
        if (!union(u, v)) return [u, v];
    }

    return [];
};