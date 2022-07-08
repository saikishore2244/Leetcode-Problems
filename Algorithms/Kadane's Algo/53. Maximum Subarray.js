//********************** BEST SOLUTION **********************************/
/**
 * Kadane's Algorithm
 * Kadane's Algorithm is an iterative dynamic programming algorithm. It calculates the maximum sum subarray ending 
 * at a particular position by using the maximum sum subarray ending at the previous position. 
 * Time Complexity - O(N)
 * Space Complexity - O(1) -No extra space occupied
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = nums=> {
    let solution=nums[0];
    for(let i=1;i<nums.length;i++){
        nums[i] = Math.max(nums[i],nums[i]+nums[i-1]);
        solution = Math.max(solution,nums[i]);
    }
    return solution; //Nums - [-2,1,-2,4,3,5,6,6,6]
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);

//Solve by Divide and Conquer Time complexity will O(NlogN)