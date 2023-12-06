/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;
    let startIndex = -1;
    let endIndex = -1;
  
    // 寻找左侧边界
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target) {
        right = mid - 1;
        if (nums[mid] === target) {
          startIndex = mid;
        }
      } else {
        left = mid + 1;
      }
    }
  
    // 如果左侧边界未找到，说明数组中不存在目标元素
    if (startIndex === -1) {
      return [-1, -1];
    }
  
    // 寻找右侧边界
    left = startIndex;
    right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target) {
        left = mid + 1;
        if (nums[mid] === target) {
          endIndex = mid;
        }
      } else {
        right = mid - 1;
      }
    }
  
    return [startIndex, endIndex];
  }
// @lc code=end

