/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //左右指针
    //左指针找到对应的值；右指针统计长度，并且把对应值统一到末尾

    // const len = nums.length;
    // let left = 0, right = len - 1, flag = false;
    // if (len === 0) return 0;

    // while (left < right) {

    //     if (nums[left] === val) {
    //         if (nums[right] === val) right --;
    //         nums[left] = nums[right];
    //         right --;
    //     }
    //     left ++;
    // }

    // if (left === right && nums[left] === val) return left; 

    // return right + 1;

    //第一种方法尝试未果
    //使用快慢指针
    //快指针探路，慢指针赋值

    const len = nums.length;
    let slow = 0, fast = 0;

    if (len === 0) return 0;

    while(fast < len) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast ++;
    }

    return slow;
};
// @lc code=end

