/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //短板效应
    //左右指针

    const len = height.length - 1;
    let left = 0, right = len;
    let res = 0;

    while(left < right) {
        let area;
        if (height[left] < height[right]) {
            area = (right - left) * height[left];
            left++;
        } else {
            area = (right - left) * height[right];
            right--;
        }

        res = Math.max(res, area);
    }

    return res;
};
// @lc code=end

