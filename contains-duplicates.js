/* 
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, 
and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = function (nums) {
    // boolean to track if we have duplicates
    let hasDupes = false;
    // create a hash table to store items from the array as keys
    // so we can check if we have encountered this item previously
    let hashTable = {};
    // for each item in the array
    nums.forEach(item => {
        // check to see if it exists in the hash table
        if (item in hashTable) {
            // if it exists set duplicates bool to true
            hasDupes = true;
        }
        else {
            // otherwise add it to the hash table
            hashTable[item] = true;
        }
    });

    return hasDupes;
};

const containsDuplicateRefactor = function (nums) {
    // create a new Set from the nums array, a Set will not store duplicates
    let set = new Set(nums);
    // if there were duplicates in the array the set will be smaller
    // return the comparison of the set size and the array length
    return set.size < nums.length
}