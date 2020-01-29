/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let cache = [];
      if(n<2) return 1;
      if(cache[n]) return cache[n];
      
      return cache[n] = climbStairs(n-1) + climbStairs(n-2);
   };

   console.log(climbStairs(5));