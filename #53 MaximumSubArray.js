/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = 0;
    for(let i=0;i<nums.length;i++){
        let maxStart = 0;
        for(let j=i;j<nums.length;j++){
            maxStart += nums[j];
            max = Math.max(max,maxStart);
        }
    }
    return console.log(max);
}     
maxSubArray([1, -2, 3, 4, -9, 6]);