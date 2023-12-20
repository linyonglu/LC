/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {

    //思路和三数之和一样

    const len = nums.length;
    const res = [];

    //先排序
    nums.sort((a, b) => a - b);


    //遍历数组的每个元素
    //固定一位，从剩下的元素中找到合为-nums[i]的，有就添加进结果数组中

    for (let i = 0; i < len; i++) {
        //固定一位，并且去除重复元素

        const threesum = threeSum(nums, i + 1, target - nums[i]);

        if (threesum.length > 0) {
            for (let item of threesum) {
                res.push([nums[i], ...item]);
            }
        }

        while (i < len - 1 && nums[i] === nums[i + 1]) i++;
    }

    return res;
};

var threeSum = function (nums, start, target) {

    const len = nums.length;
    const res = [];

    //先排序
    nums.sort((a, b) => a - b);

    //遍历数组的每个元素
    //固定一位，从剩下的元素中找到合为-nums[i]的，有就添加进结果数组中

    for (let i = start; i < len; i++) {
        //固定一位，并且去除重复元素

        const twosum = twoSum(nums, i + 1, target - nums[i]);

        if (twosum.length > 0) {
            for (let item of twosum) {
                res.push([nums[i], ...item]);
            }
        }

        while (i < len - 1 && nums[i] === nums[i + 1]) i++;
    }

    return res;
};

//两数之和
/**
* 
* @param {*} nums 
* @param {*} start 
* @param {*} target 
*/
var twoSum = function (nums, start, target) {
    //排序
    nums.sort((a, b) => a - b);

    //左右指针
    const len = nums.length - 1;
    let lo = start, hi = len;

    //结果数组
    const res = [];

    //遍历找目标值，如果有重复元素直接跳过
    while (lo < hi) {
        //折半找，先写出模板
        let sum = nums[lo] + nums[hi];
        //记录左右值
        let left = nums[lo], right = nums[hi];
        if (sum > target) {
            while (lo < hi && right === nums[hi]) hi--;
        } else if (sum < target) {
            while (lo < hi && left === nums[lo]) lo++;
        } else if (sum === target) {
            //找到结果
            //跳过重复元素
            res.push([nums[lo], nums[hi]]);
            while (lo < hi && left === nums[lo]) lo++;
            while (lo < hi && right === nums[hi]) hi--;
        }
    }

    return res;
}
// @lc code=end

