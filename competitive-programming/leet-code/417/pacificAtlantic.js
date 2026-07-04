let pacificAtlantic = function (heights) {
    const m = heights.length;
    const n = heights[0].length;
    const pacific = Array.from({ length: m }, () => Array(n).fill(false));
    const atlantic = Array.from({ length: m }, () => Array(n).fill(false));
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    function dfs(r, c, visited, prevHeight) {
        if (r < 0 || c < 0 || r >= m || c >= n || visited[r][c] || heights[r][c] < prevHeight) return;

        visited[r][c] = true;

        for (const [dr, dc] of dirs) dfs(r + dr, c + dc, visited, heights[r][c]);
    }

    for (let i = 0; i < m; i++) dfs(i, 0, pacific, -1);
    for (let j = 0; j < n; j++) dfs(0, j, pacific, -1);
    for (let i = 0; i < m; i++) dfs(i, n - 1, atlantic, -1);
    for (let j = 0; j < n; j++) dfs(m - 1, j, atlantic, -1);

    const result = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) result.push([i, j]);
        }
    }

    return result;
}