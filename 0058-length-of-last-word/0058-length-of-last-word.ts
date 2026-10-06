/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s: string): number => {
    return s.trim().split(" ").pop()?.trim().length || 0;
};
