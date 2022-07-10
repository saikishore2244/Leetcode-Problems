//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(n+m+Max(n,m))
Space Complexity - O(n)
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let nums1Map = new Map();
    let nums2Map = new Map();
    let res = [];
    for(let val of nums1){
        if(nums1Map.has(val)){
           nums1Map.set(val,nums1Map.get(val)+1);
         }else{
             nums1Map.set(val,1);
         }
    }
    for(let val of nums2){
        if(nums2Map.has(val)){
           nums2Map.set(val,nums2Map.get(val)+1);
         }else{
             nums2Map.set(val,1);
         }
    }
    let maxLength = Math.max(nums1.length,nums2.length);
    console.log(nums1Map,nums2Map,maxLength);
    for(let i =0; i<maxLength;i++){
        if(nums1[i] != null){
            if(nums2.includes(nums1[i]) && !res.includes(nums1[i])){
                let nums1c = nums1Map.get(nums1[i]); 
                let nums2c = nums2Map.get(nums1[i]);
                let min = Math.min(nums1c,nums2c);
                while(min!==0){
                    res.push(nums1[i]);
                    min--;
                }
            }
        }
        console.log(res.includes(nums2[i]));
        if(nums2[i] != null){
            if(nums1.includes(nums2[i]) && !res.includes(nums2[i])){
                let nums11c = nums1Map.get(nums2[i]); 
                let nums22c = nums2Map.get(nums2[i]);
                let min12 = Math.min(nums11c,nums22c);
                console.log(min12);
                while(min12!==0){
                    res.push(nums2[i]);
                    console.log(res);
                    min12--;
                }
            }
        }
    }
    return res;
};