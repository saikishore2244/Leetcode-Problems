//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(n^2)
Space Complexity - O(1) 
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    var res = [];
    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        let target = 0-nums[i];
        let start = i+1;
        let end = nums.length-1;
        while(start < end){
            let sum = nums[start] + nums[end];
            if(sum > target){
                end--
            }else if(sum < target){
                start++
            }else{
                res.push([nums[i],nums[start],nums[end]]);                
                while(nums[start] == nums[start+1]) start++;
                while(nums[end] == nums[end-1]) end--;
                start++
                end--
            }
        }
    }
    return res;
};

//Error Solution - Time limit exceeded
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSumError = function(nums) {
    nums.sort((a,b)=>a-b)
    var res = [];
    var indexSum = new Set();
    var result = new Map();
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k] === 0){
                    res.push([nums[i],nums[j],nums[k]])
                }
            }
        }
    }
    let uniqueArray = res.filter(( t={}, a=> !(t[a]=a in t) ));
    return uniqueArray;
};