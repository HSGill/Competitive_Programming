/**
* @param {number[]} nums
* @return {boolean}
*/
var checkPossibility = function(nums) {
   let count =0;
   for (i=0;i<nums.length-1;i++){
       if(nums[i]>nums[i+1]){
            if(i>=0){
                if(nums[i-1]<=nums[i+1]){
                    nums[i] = nums[i-1];
                }
                else{
                    nums[i+1] = nums[i];

                }
                count++;
                if(count>1){
                    return false;
                }
            }
            return true;
       }
   }
};
console.log(checkPossibility([4,2,1]));