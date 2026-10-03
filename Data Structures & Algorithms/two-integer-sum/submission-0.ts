class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        if (nums.length === 2) return [0, 1];

        let slow = 0;
        let fast = 1;

        for (let i = 0; i < nums.length - 1; i++) {
            let diff = 0;
            let slowNum = nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                let fastNum = nums[j];

                if (slowNum + fastNum === target) return [i, j];
            }
        }

        return [slow, fast];
    }
}
