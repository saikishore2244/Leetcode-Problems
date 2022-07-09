//********************** BEST SOLUTION **********************************/
/**
 * Time Complexity - O(n) - n2 length
 * Space Complexity - O(1)
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1
    let k = m + n - 1
    
    while (j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums2[j]
            j--
        }
        k--
    }
};


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge1 = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length-m);
    nums1.push(...nums2);
    nums1.sort((a,b)=>a-b); //-> TC : O(nlogn) ; SC : O(n)
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge2 = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length-m);
    for(let i = 0;i<n;i++){
        let push = true;
        for(let j=0;j<nums1.length;j++){
            if(nums2[i] < nums1[j]){
                nums1.splice(j,0,nums2[i]);
                push = false;
                break;
            }
        }
        if(push) nums1.push(nums2[i]);
    }
};