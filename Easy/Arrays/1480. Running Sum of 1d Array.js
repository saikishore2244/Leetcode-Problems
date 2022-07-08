//********************** BEST SOLUTION **********************************/
/**
 * Prefix Sum
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    for(let i=1;i<nums.length;i++){
        nums[i] = nums[i-1] + nums[i];
    }
    return nums;
};