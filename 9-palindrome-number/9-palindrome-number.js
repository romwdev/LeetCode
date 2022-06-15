/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let reversedNum = x.toString().split('').reverse().join('');
    
    if (x.toString() === reversedNum) {
        return true;
    } else return false;
   
    
};