// 01. Contains Duplicate
var containsDuplicate = function (nums) {
    // your code goes here   
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};
// console.log(containsDuplicate([1, 2, 3, 1]))

// 02. Move Zeroes
var moveZeroes = function(nums) {
     // your code goes here      
};
