function lengthOfLongestSubstring(s: string): number {
    let n = s.length;
    let set = new Set<string>();
    let maxLength = 0, i = 0, j = 0;

    while (i < n && j < n) {
        if (!set.has(s[j])) {
            set.add(s[j++]);
            maxLength = Math.max(maxLength, j - i);
        } else {
            set.delete(s[i++]);
        }
    }

    return maxLength;
}
