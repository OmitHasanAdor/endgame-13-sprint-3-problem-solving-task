// 01. Contains Duplicate
var containsDuplicate = function (nums) {
    // your code goes here   
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};
// console.log(containsDuplicate([1, 2, 3, 1]))

// 02. Move Zeroes
var moveZeroes = function (nums) {
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
var isAnagram = function (s, t) {
    // your code goes here   
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
    if (s === t) {
        return true
    }
    return false
};
// console.log(isAnagram("anagram", "nagaram"))

// 04. Ransom Note
var canConstruct = function (ransomNote, magazine) {
    // your code goes here     
    let ransom = ransomNote.split('').sort().join('')
    let maga = magazine.split('').sort().join('')
    let i = 0
    let j = 0
    while (i < ransom.length && j < maga.length) {
        if (ransom[i] === maga[j]) {
            i++
            j++
        } else {
            j++
        }
    }
    return i === ransom.length
}
// console.log(canConstruct("aa", "aab"))

// 05. Majority Element
var majorityElement = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        if (count > nums.length / 2) {
            return nums[i];
        }
    }
};
// console.log(majorityElement([3,2,1, 2,3, 1, 1, 1, 2, 2,1,1,1]))

// 06. 3Sum
var majorityElement = function (nums) {
    // your code goes here  
    const result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};
// console.log(majorityElement([-1, 0, 1, 2, -1, -4]))