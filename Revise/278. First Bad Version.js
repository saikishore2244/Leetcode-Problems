//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(logN)
Space Complexity - O(1)
*/
/**
 * Was not able to understand the question initially. Below working Recursive soln tried on my own
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low =1, high =n;
        while(low<high){
            let mid = Math.floor(low + (high-low)/2);
            if(isBadVersion(mid)) high = mid;
            else low = mid+1;
        }
        return low;
    };
};

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        binarySearch = (low,high)=>{
            let mid = Math.floor(low + (high-low)/2);
            if(high <= low) return low;
            if(isBadVersion(mid)) return binarySearch(low, mid);
            else return binarySearch(mid+1,high);
        }
        return binarySearch(1,n);
    };
};