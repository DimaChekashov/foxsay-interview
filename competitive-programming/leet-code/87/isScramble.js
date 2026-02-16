var isScramble = function (s1, s2) {
  const memo = new Map();

  const helper = (a, b) => {
    const key = a + '#' + b;
    if (memo.has(key)) return memo.get(key);

    if (a === b) return true;
    if (a.length !== b.length) return false;

    const count = Array(26).fill(0);
    for (let i = 0; i < a.length; i++) {
      count[a.charCodeAt(i) - 97]++;
      count[b.charCodeAt(i) - 97]--;
    }
    if (count.some(c => c !== 0)) {
      memo.set(key, false);
      return false;
    }

    for (let i = 1; i < a.length; i++) {
      if (helper(a.slice(0, i), b.slice(0, i)) && helper(a.slice(i), b.slice(i))) {
        memo.set(key, true);
        return true;
      }

      if (helper(a.slice(0, i), b.slice(-i)) && helper(a.slice(i), b.slice(0, -i))) {
        memo.set(key, true);
        return true;
      }
    }

    memo.set(key, false);
    return false;
  };

  return helper(s1, s2);
};