//********************** BEST SOLUTION **********************************/
/*
Time Complexity - O(n)
Space Complexity - O(1)
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    var buy = prices[0];
    let maxProfit = 0;
     
    for(let i=1;i<prices.length;i++){
        if(buy > prices[i]) buy = prices[i];
        else if(prices[i]-buy > maxProfit) maxProfit = prices[i]-buy;
    }
    return maxProfit;
};