var titleToNumber = function (columnTitle) {
  let ans = 0;

  for (const ch of columnTitle) {
    ans = ans * 26 + (ch.charCodeAt(0) - 'A'.charCodeAt(0) + 1);
  }

  return ans;
};