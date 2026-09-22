var topKFrequent = function (words, k) {
    const freq = new Map();
    for (let word of words) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }
    const sorted = Array.from(freq.entries()).sort((a, b) => {
        if (b[1] === a[1]) return a[0].localeCompare(b[0]);
        return b[1] - a[1];
    });
    return sorted.slice(0, k).map(pair => pair[0]);
};