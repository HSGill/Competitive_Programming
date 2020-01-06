/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length-1;
    let j = b.length-1;
    let result = "";
    let carry  = 0;
    while (i>=0 || j>=0){
        let  sum = carry;
         if(i>=0){
             sum += a.charAt(i)-'0' ; 
         }
         if(j>=0){
             sum += b.charAt(j)-'0';
         }
         result = sum%2 + result;
         carry = Math.floor(sum/2);
         i--;j--;
        }
        if (carry>0){
            result = 1+result;
        }
        return result;
 };

console.log(addBinary("11", "111"));