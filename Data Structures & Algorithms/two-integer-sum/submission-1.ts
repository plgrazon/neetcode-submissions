class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        if (nums.length === 2) return [0, 1];

        let mapDiff = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            let diff = target - nums[i];

            if (mapDiff.has(diff)) {
                return [mapDiff.get(diff), i];
            }

            mapDiff.set(curr, i);
        }
    }
}
