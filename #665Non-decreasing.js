/**
* @param {number[]} nums
* @return {boolean}
*/
var checkPossibility = function (nums) {
    let count = 0;
    for (i = 0; i < nums.length - 1 ; i++) {
       if(nums[i]>nums[i+1]){
           if(i>0){
               if(nums[i-1] > nums[i+1]){
                   nums[i+1] = nums[i]
               }
               else{
                   nums[i] = nums[i-1];
               }
           }
           count++;
       }
    }
    if(count<=1){
        return true;
    } 
    else return false;
    
};
console.log(checkPossibility([3,4,2,3]));