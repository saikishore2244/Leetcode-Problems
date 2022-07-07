//********************** BEST SOLUTION **********************************/
//Can be solved using bitwise operator XOR
/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let result = nums.length
    for(let i = 0; i < nums.length; i++){
        result =  result ^ i ^ nums[i]
    }
    return result
};


/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = (nums)=>{
    var missingNo = -1;
    for(let i = 0;i<nums.length;i++){
        if(nums.includes(i)){
           continue;
        }else{
            missingNo = i ;
        }
    }
    return missingNo == -1 ? nums.length : missingNo;
};

//Sum of Numberslength  -  Sum of given nos.
/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let n = nums.length, sum = n * (n + 1) / 2
    let s1 = nums.reduce((acc, val) => acc + val, 0)
    return sum - s1
};


