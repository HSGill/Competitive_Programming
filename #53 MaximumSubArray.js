/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max =-Number.MAX_VALUE ;
  for(let i=0;i<nums.length;i++){
      let maxStart = 0;
      for(let j=i;j<nums.length;j++){
          maxStart += nums[j];
       max = Math.max(max,maxStart);
      }
  }
 return max;
}     

/* function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return console.log(maxSum);
  }
   */
  
  maxSubArray([-1, -2, -3, -4, -9, -6]);