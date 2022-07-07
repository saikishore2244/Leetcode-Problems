//********************** BEST SOLUTION **********************************/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return  nonUnique = [...new Set(nums)].length != nums.length;
     
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) =>{
    var numsMap = new Map();
    var duplicates = false;
    for(let i=0;i<nums.length;i++){
        if(numsMap.has(nums[i])){
            duplicates = true;
            break;
        }else{
            numsMap.set(nums[i],1);
        }
    }
    return duplicates;
};