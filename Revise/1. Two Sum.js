//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(n)
Space Complexity - O(n) Map is created and stores all values
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numsMap.has(complement)) {
      return [numsMap.get(complement), i];
    }
    numsMap.set(nums[i], i);
  }
};

let nums = [3, 4, 5, 6, 3];
let target = 7;
console.log(nums, target);
console.log(twoSum(nums, target));
