/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.split(' ');
    let idx = words.length - 1;
    
    while (idx >= 0) {
        if (words[idx].length > 0) {
            return words[idx].length;
        }
        idx -= 1;
    }
};