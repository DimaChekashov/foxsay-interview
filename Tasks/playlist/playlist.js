function playlist(songs) {
    var _a;
    var map = new Map();
    for (var _i = 0, songs_1 = songs; _i < songs_1.length; _i++) {
        var song = songs_1[_i];
        var remind = song % 60;
        map.set(remind, ((_a = map.get(remind)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    console.log(map);
    var pairs = 0;
    for (var _b = 0, map_1 = map; _b < map_1.length; _b++) {
        var _c = map_1[_b], remind = _c[0], count = _c[1];
        var substruct = 60 - remind;
        if (substruct === remind) {
            pairs += Math.floor((count * (count - 1)) / 2);
        }
        else {
            pairs += map.get(substruct) * count;
            map["delete"](substruct);
        }
    }
    return pairs;
}
// console.log(playlist([30, 20, 150, 100, 40]));
console.log(playlist([15, 63, 451, 213, 37, 209, 343, 319]));
