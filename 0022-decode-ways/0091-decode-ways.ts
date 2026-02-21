function numDecodings(s: string): number {
  const n = s.length;
  const dp: number[] = Array(n + 1).fill(0);

  dp[0] = 1; // Empty string can be decoded in one way

  // Check each digit in the string
  for (let i = 1; i <= n; i++) {
    // If the current digit is not '0', it can be mapped to a letter
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1];
    }

    // Check if the previous two digits form a valid mapping (between 10 and 26)
    if (i > 1 && s[i - 2] !== '0' && parseInt(s.substring(i - 2, i), 10) <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}