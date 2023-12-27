/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    //回溯

    //结果数组
    let res = [], track = [];

    const dfs = function(root) {
        if (root === null) return;
        if (root.left === null && root.right === null) {
            res.push(track.join('') + root.val);
            return;
        }

        track.push(root.val, '-', '>');
        dfs(root.left);
        dfs(root.right);
        track.pop();
        track.pop();
        track.pop();
    }

    dfs(root);
    return res;
};
// @lc code=end

