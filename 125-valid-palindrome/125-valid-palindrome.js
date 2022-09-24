/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let palindromeStr = '';
    
    for (let i = 0; i < s.length; i++) {
        if (!/^[a-zA-Z0-9]+$/.test(s[i])) {
            continue;
        }
        palindromeStr += s[i].toLowerCase();
    }
    
    if (palindromeStr === palindromeStr.split("").reverse().join("")) {
        return true;
    } else return false;
};