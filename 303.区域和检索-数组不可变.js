/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    //使用前缀和技巧

    this.prefix = new Array(nums.length + 1);
    for (var i = 1; i < this.prefix.length; i++) {
        // 计算 nums 的累加和
        this.prefix[i] = this.prefix[i - 1] + nums[i - 1];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    // console.log('left', this.preNums[left - 1]);
    // console.log('right', this.preNums[right]);
    return this.prefix[right + 1] - this.prefix[left]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

