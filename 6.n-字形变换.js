/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    //问题转换成每一行应该放哪些字符
    //数组索引为0表示为z字形的第一行，依次类推
    let arr = Array(numRows).fill('');
    let isTop = true;
    let res = '';

    //当前行
    let currentRow = 0;

    //如果是一行，直接返回
    if (numRows === 1) return s;

    //遍历输入的字符串
    //1
    for(let c of s) {
        arr[currentRow] = arr[currentRow] + c;

        if(isTop) {
            currentRow++;
        } else {
            currentRow--;
        }


        //到达边界反转方向
        if(currentRow === 0 || currentRow === numRows - 1) {
            isTop = !isTop;
        }
    }

    //将生成的数组拼接成字符串
    for(let c of arr) {
        res += c;
    }

    return res;
};
// @lc code=end

