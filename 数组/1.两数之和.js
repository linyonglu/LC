/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    //使用统一解题思路
    //1. 先对数组进行排序
    //2. 左右指针

    nums.sort();

    //有序数组
    //左右指针
    //左右指针对应的指要小于结果值
    //如果左右指针相加的值大于结果值，那么就移动右指针
    //如果左右指针相加的值小于结果值，那么就移动左指针

    const len = nums.length - 1;
    let left = 0, right = len;
    let res;

    while(left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            res = [left + 1, right + 1];
            break;
        } else if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        }
    }

    return res ? res : [];
};
// @lc code=end

