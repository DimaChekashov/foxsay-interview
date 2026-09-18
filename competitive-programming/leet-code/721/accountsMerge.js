class DisjointSet {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = new Array(n).fill(0);
    }
    find(i) {
        if (this.parent[i] === i) return i;
        return this.parent[i] = this.find(this.parent[i]);
    }
    union(i, j) {
        let rootI = this.find(i), rootJ = this.find(j);
        if (rootI !== rootJ) {
            if (this.rank[rootI] < this.rank[rootJ]) this.parent[rootI] = rootJ;
            else if (this.rank[rootI] > this.rank[rootJ]) this.parent[rootJ] = rootI;
            else { this.parent[rootI] = rootJ; this.rank[rootJ]++; }
        }
    }
}

var accountsMerge = function (accounts) {
    const n = accounts.length;
    const ds = new DisjointSet(n);
    const emailMap = new Map();

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
            const email = accounts[i][j];
            if (emailMap.has(email)) {
                ds.union(i, emailMap.get(email));
            } else {
                emailMap.set(email, i);
            }
        }
    }

    const merged = new Map();
    for (const [email, index] of emailMap.entries()) {
        const root = ds.find(index);
        if (!merged.has(root)) merged.set(root, []);
        merged.get(root).push(email);
    }

    const result = [];
    for (const [root, emails] of merged.entries()) {
        emails.sort();
        result.push([accounts[root][0], ...emails]);
    }
    return result;
};