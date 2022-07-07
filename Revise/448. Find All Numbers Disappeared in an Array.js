//********************** BEST SOLUTION **********************************/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    nums.unshift(-1);
    let res = [];

    for(let i = 1;i < nums.length;i++){
        const idx = Math.abs(nums[i]);
        nums[idx] > 0 && (nums[idx] *= -1);        
    }
    for(let i = 1;i < nums.length;i++)
        nums[i] > 0 && res.push(i);

    return res;
};