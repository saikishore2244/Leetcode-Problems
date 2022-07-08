//********************** BEST SOLUTION **********************************/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    let numsMap = new Map();
    let dup = [];
    for(let i=0;i<nums.length;i++){
        if(numsMap.has(nums[i])){
            dup.push(nums[i]);
        }
        numsMap.set(nums[i],i);
    }
    return dup;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates1 = function(nums) {
    let arr = [];
    for(let i=0;i<nums.length;i++){
        if(arr[nums[i]] == undefined || arr[nums[i]] == NaN) arr[nums[i]] =0;
        arr[nums[i]] = arr[nums[i]] +1;
    }
    return arr.flatMap((e,i) => e === 2 ? i : [])
};