/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 const addBinary = (a, b) => {
    while (a.length > b.length) b = '0' + b;
    // 先对齐
    while (a.length < b.length) a = '0' + a;
    let res = new Array(a.length);
    let sum = 0;
    // 进位
    let carry = 0; 
    for (let i = a.length - 1; i >= 0; i--) {
      sum = Number(a[i]) + Number(b[i]) + carry;
      if (sum >= 2) {
        res[i] = sum - 2;
        carry = 1;
      } else {
        res[i] = sum;
        carry = 0;
      }
    }
    if (carry) res.unshift(1); // 循环结束还要进1，则在res数组前端加一个1
    return res.join('');
  };
// @lc code=end

