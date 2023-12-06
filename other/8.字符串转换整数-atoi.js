/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    //1.过滤空格
    //2.找出正负
    //3.找出限制

    s = s.trim();

    //正负标记位
    let sign = 1;

    //索引，从0开始
    let i = 0;
    let res = 0;

    const len = s.length;
    
    //定义边界值
    const maxNumber = Math.pow(2, 31) - 1;
    const minNumber = -Math.pow(2, 31);

    if (s.indexOf('-+') > -1 || s.indexOf('+-') > -1) return 0;

    if (s[i] === '-') {
        sign = -1;
        i++;
    } 

    if (s[i] === '+') i++;

    while (i < len && s[i] >= '0' && s[i] <= '9') {
        res = res * 10 + parseInt(s[i], 10);
        i++;
    }

    res = res * sign;
    if (res >= maxNumber) res = maxNumber;
    if (res <= minNumber) res = minNumber;

    return res;
};
// @lc code=end

