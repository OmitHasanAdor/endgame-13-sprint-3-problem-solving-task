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
    let write = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[write] = nums[i]
            write++
        }
    }
    for (let i = write; i < nums.length; i++) {
        nums[i] = 0
    }
}
// // console.log(moveZeroes([0, 1, 0, 3, 12])) 
// let nums = [0,0, 1, 0, 3, 12]
// moveZeroes(nums)
// console.log(nums)

// 03. Valid Anagram
var isAnagram = function(s, t) {
    // your code goes here   
    s=s.split('').sort().join('')
    t=t.split('').sort().join('')
    if (s===t) {
        return true
    }
    return false
};
console.log(isAnagram("anagram", "nagaram"))
