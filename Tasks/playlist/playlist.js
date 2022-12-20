// Time complexity: O(n^2) 
// Space complexity: O(1)
function playlistEasy(songs) {
    let pairs = 0;
    for (let i = 0; i < songs.length; i++) {
        for (let j = i + 1; j < songs.length; j++) {
            if (!((songs[i] + songs[j]) % 60)) {
                pairs++;
            }
        }
    }
    return pairs;
}
// Time complexity: O(n)
// Space complexity: O(n)
function playlistMedium(songs) {
    var _a;
    const map = new Map();
    for (const song of songs) {
        const remind = song % 60;
        map.set(remind, ((_a = map.get(remind)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    let pairs = 0;
    for (const [remind, count] of map) {
        const substruct = 60 - remind;
        if (substruct === remind || remind === 0) {
            pairs += Math.floor((count * (count - 1)) / 2);
        }
        else if (map.has(substruct)) {
            pairs += map.get(substruct) * count;
            map.delete(substruct);
        }
    }
    return pairs;
}
// Time complexity: O(n)
// Space complexity: O(1)
function playlistHard(songs) {
    var _a, _b;
    const c = new Array(60);
    let res = 0;
    for (const t of songs) {
        res += ((_a = c[(600 - t) % 60]) !== null && _a !== void 0 ? _a : 0);
        c[t % 60] = ((_b = c[t % 60]) !== null && _b !== void 0 ? _b : 0) + 1;
    }
    return res;
}
