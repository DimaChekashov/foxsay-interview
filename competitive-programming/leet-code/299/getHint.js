var getHint = function (secret, guess) {
  let map = {}
  let bulls = 0, cows = 0

  for (let char of secret) {
    map[char] = map[char] + 1 || 1
  }

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] == secret[i]) {
      bulls++;
      if (map[guess[i]] <= 0) cows--;
    } else if (map[guess[i]] > 0) cows++;

    map[guess[i]] = map[guess[i]] - 1;
  }

  return `${bulls}A${cows}B`;
};