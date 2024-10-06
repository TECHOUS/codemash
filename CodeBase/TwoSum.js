/**
 * PROBLEM: Two Sum in JavaScript language
 * AUTHOR: Shubham0523
 **/

function twoSum(nums, target) {
    let obj = {}; // Create an empty object to store the indices of numbers
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (obj[target - n] >= 0) {
            return [obj[target - n], i];
        } else {
            obj[n] = i; // Store the index of the current number
        }
    }; 
}