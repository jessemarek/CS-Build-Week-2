/*
Given a package with a weight limit limit and an array of integers items of where each integer represents the weight of an item, implement a function merge_packages that finds the first two items in the items array whose sum of weights equals the given weight limit limit.

Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

Examples:

Input: items = [4, 6, 10, 15, 16], limit = 21
Output: [3, 1]
Explanation: The weight of the items at indices 3 and 1 sum up to the specified limit.
*/

function merge_packages(items, limit) {
    // items is an array of ints representing weights
    // limit is an int that represents the total weight limit of a package

    // create a hash table to look up values
    const weights = {};

    // iterate over the items and add the limit - the item to our hash table
    for (let i = 0; i < items.length; i++) {
        // if the limit - the current weight is in our HT then we have found the 2 items we need
        if (items[i] in weights) {
            // return the indices in descending order ([i, j] where i > j)
            return [weights[items[i]], i].sort().reverse();
        }
        // otherwise we need to store the limit - the item
        else {
            weights[limit - items[i]] = i;
        }
    }
    // if we made it here there is no combo of items that works
    return [];
}
