/*
Given the root of a binary tree where each node contains an integer, 
determine the sum of all of the integer values in the tree.

Example:

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
The expected output given the above tree is 
5 + 4 + 8 + 11 + 13 + 4 + 7 + 2 + 1, 
so your function should return 55.
*/

// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
let sum = 0;
function tree_paths_sum(root) {
    // keep track of the total
    // traverse the entire tree adding each node's value to the total
    // when we visit a node add its value to the sum
    sum += root.value;

    // if it has a left node keep traversing
    if (root.left) {
        tree_paths_sum(root.left);
    }
    // if it has a left node keep traversing
    if (root.right) {
        tree_paths_sum(root.right);
    }
    // once all nodes have been visited return the sum
    return sum;
}
