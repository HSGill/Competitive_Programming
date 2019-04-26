/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let length = nums.length;
    let i = 0;
    for(j=1;j<nums.length;j++){
if(nums[j]!=nums[i]){
  //console.log(nums)
  i++;
  nums[i] = nums[j];
}

    }
   return nums;
};
console.log(removeDuplicates([0,0,1,1,1,2,3,4]));