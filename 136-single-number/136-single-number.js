/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    
    let foundNums = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (foundNums.includes(nums[i])) {
            foundNums.splice(foundNums.indexOf(nums[i]), 1);
        } else {
            foundNums.push(nums[i]);
        }
    }
    return foundNums[0];
    
};