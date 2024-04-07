/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = (s: string, t: string): number => {
    if (s.length !== t.length) return -1;
    const sFreq: Map<string, number> = new Map();
    for (let char of s) {
        sFreq.set(char, (sFreq.get(char) || 0) + 1);
    }
    let steps: number = 0;
    for (let char of t) {
        if (sFreq.has(char) && sFreq.get(char)! > 0) {
            sFreq.set(char, sFreq.get(char)! - 1);
        } else {
            steps++;
        }
    }
    return steps;
};
