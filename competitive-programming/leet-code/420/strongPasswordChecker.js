/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function (password) {
  const n = password.length;

  let hasLower = /[a-z]/.test(password);
  let hasUpper = /[A-Z]/.test(password);
  let hasDigit = /\d/.test(password);
  let missingTypes = !hasLower + !hasUpper + !hasDigit;

  const repeats = [];
  let i = 0;
  while (i < n) {
    let j = i;
    while (j < n && password[j] === password[i]) j++;
    const len = j - i;
    if (len >= 3) repeats.push(len);
    i = j;
  }

  if (n < 6) {
    return Math.max(missingTypes, 6 - n);
  }

  if (n > 20) {
    let deletions = n - 20;
    let totalDeletions = deletions;
    let changes = 0;

    for (let len of repeats) {
      if (len >= 3 && deletions > 0) {
        const reduce = Math.min(len - 3, deletions);
        len -= reduce;
        deletions -= reduce;
      }
      if (len >= 3) {
        changes += Math.floor(len / 3);
      }
    }

    return totalDeletions + Math.max(changes, missingTypes);
  }

  let changes = repeats.reduce((sum, len) => sum + Math.floor(len / 3), 0);
  return Math.max(changes, missingTypes);
};