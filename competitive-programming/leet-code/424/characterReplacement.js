var characterReplacement = function (s, k) {
    let freqs = {};
    let res = 0, i = 0, maxFreq = 0;

    for (let j = 0; j < s.length; j++) {
        freqs[s[j]] = (freqs[s[j]] || 0) + 1;
        maxFreq = Math.max(maxFreq, freqs[s[j]]);

        while ((j - i + 1) - maxFreq > k) {
            freqs[s[i]] -= 1;
            i++;
        }

        res = Math.max(res, j - i + 1);
    }

    return res;
};