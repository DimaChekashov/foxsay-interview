var mincostTickets = function (days, costs) {
  const dp = Array(366).fill(0);
  const visited = Array(366).fill(0);

  for (let i = 0; i < days.length; i++) {
    visited[days[i]] = 1;
  }

  dp[0] = 0;

  for (let i = 1; i <= 365; i++) {
    if (visited[i]) {
      dp[i] = dp[i - 1] + costs[0];

      if (dp[i - 1] + costs[0] > costs[1]) {
        const day = i - 7 > 0 ? i - 7 : 0;
        dp[i] = Math.min(dp[day] + costs[1], dp[i]);
      }

      if (dp[i - 1] + costs[0] > costs[2]) {
        const day = i - 30 > 0 ? i - 30 : 0;
        dp[i] = Math.min(dp[day] + costs[2], dp[i]);
      }
    } else {
      dp[i] = dp[i - 1];
    }
  }

  return dp[days[days.length - 1]];
};
