class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const noDupes: Set<number> = new Set(nums);
        
        return noDupes.size !== nums.length;
    }
}
