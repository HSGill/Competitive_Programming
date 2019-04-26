/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let resultArray = [];
    let index = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let map = {};
        let key=0;
        for (j = i + 1; j < nums.length; j++) {
            let twoSum = -(nums[i] + nums[j]);


            if ( twoSum in map) {
                resultArray[index] = [twoSum, nums[i], nums[j]];
                index++;
                //console.log(resultArray[index]);
            }
            else {
                map[key] = nums[j];
                key++;
            }

        }
      
    }
  return resultArray;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));