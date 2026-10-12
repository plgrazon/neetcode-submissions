class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let result = {};

        for (let str of strs) {
            let sortedStr = str.split("").sort().join("");

            if (!result.hasOwnProperty(sortedStr)) result[sortedStr] = [];

            result[sortedStr].push(str);
        }

        return Object.values(result);
    }
}
