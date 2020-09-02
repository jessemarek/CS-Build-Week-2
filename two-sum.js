/* 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    // get the sum of each combination of numbers in the array
    // get the index numbers for the 2 numbers whose sum equals the target

    const indices = {}

    // loop through the array and add up every combination of numbers
    nums.forEach((n1, i1) => {
        // store the sum in an object as the key with and array of the 2 indices as the value
        nums.forEach((n2, i2) => {
            if (i1 !== i2) {
                indices[n1 + n2] = [i2, i1]
            }
        });
    });
    // return the value at object[target]
    return indices[target]
};

const twoSumRefactored = function (nums, target) {
    // get the sum of each combination of numbers in the array
    // get the index numbers for the 2 numbers whose sum equals the target

    const hashTable = {};
    const answer = [];

    // loop through array
    nums.forEach((num, idx) => {
        // at each element check if that number is in the hashTable
        if (hashTable[num] >= 0) {
            // if the number is in the hashtable we have found our answer
            // push the indices for the 2 numbers onto the answer array
            answer.push(hashTable[num], idx)
        } else {
            // store a key in the hashtable as the difference of the target and current number
            // and store the current number index as the value
            hashTable[target - num] = idx;
        }
    });

    return answer;
};