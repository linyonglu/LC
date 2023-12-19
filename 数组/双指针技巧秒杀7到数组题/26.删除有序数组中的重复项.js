/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    //快慢指针
    //快指针找出与慢指针不同的元素，然后交换

    let slow = fast = 0;
    const len = nums.length;

    while (fast <= len) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            let temp = nums[slow];
            nums[slow] = nums[fast];
            nums[fast] = temp;
        }
        fast++;
    }
    return slow;
};
// @lc code=end

