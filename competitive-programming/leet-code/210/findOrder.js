var findOrder = function (numCourses, prerequisites) {

    const adj = Array.from(
        { length: numCourses },
        () => []
    );

    const indegree = new Array(numCourses).fill(0);

    for (const [course, prereq] of prerequisites) {
        adj[prereq].push(course);
        indegree[course]++;
    }

    const q = [];

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            q.push(i);
        }
    }

    const ans = [];

    while (q.length) {

        const curr = q.shift();
        ans.push(curr);

        for (const neig of adj[curr]) {

            indegree[neig]--;

            if (indegree[neig] === 0) {
                q.push(neig);
            }
        }
    }

    return ans.length === numCourses ? ans : [];
};