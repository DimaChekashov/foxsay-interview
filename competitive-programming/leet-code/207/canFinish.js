var canFinish = function (numCourses, prerequisites) {
    const adj = Array.from({ length: numCourses }, () => []);
    for (const [course, pre] of prerequisites) {
        adj[pre].push(course);
    }

    const vis = new Array(numCourses).fill(false);
    const path = new Array(numCourses).fill(false);

    const dfs = (node) => {
        vis[node] = path[node] = true;

        for (const next of adj[node]) {
            if (!vis[next]) {
                if (dfs(next)) return true;
            } else if (path[next]) {
                return true;
            }
        }

        path[node] = false;
        return false;
    };

    for (let i = 0; i < numCourses; i++) {
        if (!vis[i]) {
            if (dfs(i)) return false;
        }
    }

    return true;
};