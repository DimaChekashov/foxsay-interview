var lengthLongestPath = function (input) {
  const lines = input.split('\n');
  const depthMap = { 0: 0 };
  let maxLen = 0;

  for (const line of lines) {
    const level = line.lastIndexOf('\t') + 1;
    const name = line.slice(level);

    if (name.includes('.')) {
      maxLen = Math.max(maxLen, depthMap[level] + name.length);
    } else {
      depthMap[level + 1] = depthMap[level] + name.length + 1;
    }
  }

  return maxLen;
};