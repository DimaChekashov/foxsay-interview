var findLongestWord = function (s, dictionary) {
    const isSubsequence = (word) => {
        let i = 0;
        for (let c of s) {
            if (c === word[i]) i++;
            if (i === word.length) return true;
        }
        return false;
    };

    dictionary.sort((a, b) => {
        if (b.length !== a.length) return b.length - a.length;
        return a.localeCompare(b);
    });

    for (let word of dictionary) {
        if (isSubsequence(word)) return word;
    }

    return "";
};