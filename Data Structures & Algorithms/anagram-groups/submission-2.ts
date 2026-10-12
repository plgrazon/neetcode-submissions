class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // create copyArray that has each string sorted
        const sortedArray = strs.map((word) => word.split("").sort().join(""));

        const sortedMap = sortedArray.reduce((acc: Record<string, [number]>, word, i) => {
            Array.isArray(acc[word]) ? acc[word].push(i) : (acc[word] = [i]);
            return acc;
        }, {});

        const valuesIdx = Object.values(sortedMap);
        const result = [];

        for (let i = 0; i < valuesIdx.length; i++) {
            const innerArr = valuesIdx[i];
            const mappedArr = innerArr.map((idx) => strs[idx]);
            result.push(mappedArr);
        }

        return result;
    }
}
