/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [];

    //题目numRows给的是非负数，要考虑0的情况
    if (!numRows) return res;

    /**
     * 规律
     * 1. 生成numRows行
     * 2. 第n行生n个数（n指当前的行数）
     * 3. 当前行的第一个数和最后一个数都为1
     * 4. 除去第一个数和最后一个数，中间的数为上一行中的两个数之和，公式为：arr[i] = res[i - 1][i - 1] + res[i - 1][i]
     */

    //两个for循环，外层控制生成行，内层控制生成行中的每一个数
    for (let i = 0; i < numRows; i++) {
        const arr = [];

        for (let j = 0; j <= i; j++) {
            //第一项和最后一项
            if (j === 0 || j === i) {
                arr[j] = 1;
            } else {
                arr[j] = res[i - 1][j - 1] + res[i - 1][j];
            }
        }

        res.push(arr);
    }

    return res;
};
// @lc code=end

