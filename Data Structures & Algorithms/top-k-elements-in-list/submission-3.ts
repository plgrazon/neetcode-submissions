class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count: Record<number, number> = {};

        if (nums.length < k) return [];

        for (let i = 0; i < nums.length; i++) {
            const curr = nums[i];
            if (!count.hasOwnProperty(curr)) {
                count[curr] = 1;
            } else {
                count[curr] += 1;
            }
        }

        const numEntries = Object.entries(count);
        const sortedEntries = numEntries.sort(([numA, countA], [numB, countB]) => {
            return countB - countA;
        });
        console.log(sortedEntries);
        const result = sortedEntries.reduce((acc, [num, count]) => {
            if (k !== 0) {
                acc.push(num);
                k--;
            }
            return acc;
        }, []);

        return result;
    }
}
