class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // const sSet = new Set(s);
        // const tSet = new Set(t);
        // return sSet.isSubsetOf(tSet);

        if (s.length !== t.length) return false;

        const chars: Record<string, number> = {};

        for (let char of s) {
            if (chars[char]) {
                chars[char]++;
            } else {
                chars[char] = 1;
            }
        }

        for (let char of t) {
            if (chars[char]) {
                chars[char]--;

                if (chars[char] === 0) {
                    delete chars[char];
                }
            } else {
                return false;
            }
        }

        return true;
    }
}
