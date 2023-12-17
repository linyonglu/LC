/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    //有序数组
    //左右指针
    //左右指针对应的指要小于结果值
    //如果左右指针相加的值大于结果值，那么就移动右指针
    //如果左右指针相加的值小于结果值，那么就移动左指针

    const len = numbers.length - 1;
    let left = 0, right = len;
    let res;

    while(left < right) {
        let sum = numbers[left] + numbers[right];
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

