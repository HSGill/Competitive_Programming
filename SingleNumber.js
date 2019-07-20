/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    /* let temp = [] ;

for (let i=0;i<nums.length;i++){
    if(temp.includes(nums[i])){
        temp.splice(temp.indexOf(nums[i],1));
    }
    else(temp.push(nums[i]));
}
      return temp;
 */
    let temp = {};
    let key = 1;
    for (let i = 0; i < nums.length; i++) {
        if (!temp[nums[i]]) {
            temp[nums[i]] = key;
        }
        else {
            temp[nums[i]] = key + 1;
        }

    }

    for (let x in temp) {
        //console.log(temp[x])
        if (temp[x] == 1) {
            return x;
        }
    }
    return "no duplicates"


};



console.log(singleNumber([6, 5, 2, 2, 5, 7, 7, 6, 1, 1, 190]));
