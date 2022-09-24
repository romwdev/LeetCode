/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    if (n < 3) {
        return n;
    }
    
    let first = 1;
    let second = 2;
    
    for (let i = 3; i <= n; i++) {
        let current = first + second;
        first = second;
        second = current;
    }
    
    return second;
};