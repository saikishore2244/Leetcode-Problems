//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(logn)
Space Complexity - O(1) 
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums,target) {
    
    binarySearch = (low,high) => {
        let midIndex = Math.floor(low + (high-low)/2);
        if(low > high) return -1;
        if(target === nums[midIndex]){
           return midIndex;
        }
        if(target < nums[midIndex]){
            return binarySearch(low,midIndex-1);
        }
        if(target > nums[midIndex]){
            return binarySearch(midIndex+1,high);
        }
        
    }
    return binarySearch(0,nums.length-1);
};

//Iterative Method
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums,target) {
    let low = 0,high = nums.length-1;
    while(low <= high){
        let mid = Math.floor(low + (high-low)/2);
        if(target === nums[mid]) return mid;
        else if(target < nums[mid]) high = mid-1;
        else if(target > nums[mid]) low = mid+1;
    }
    return -1;
};