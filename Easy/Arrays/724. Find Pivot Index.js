//********************** BEST SOLUTION **********************************/
/**
 * Prefix Sum
 * Time Complexity - O(N)
 * Space Complexity - O(1) -Space Occupied by sum,leftSum
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((a,b) => a+b,0);
    let leftSum = 0;
    for(let i = 0; i<nums.length; i++){
        if(leftSum === sum - leftSum - nums[i]){ //subtracting nums[i] as we need to exclude it from total sum if it is pivot index
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};
/**
 * @param {number[]} nums
 * @return {number}
*/
var pivotIndex1 = function(nums) {
    for(let i = 0; i<nums.length; i++){
        let leftSum = 0;
        let rightSum = 0;
        let j = i-1;
        let k = i+1;
        while(j >= 0){
            leftSum += nums[j];
            j-- ;
        }
        while(k < nums.length){
            rightSum += nums[k];
            k++;
        }
        if(leftSum === rightSum){
            return i;
        }
    }
    return -1;
};

console.log(pivotIndex([1,3,7,6,5,6]));