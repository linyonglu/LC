/*
 * @lc app=leetcode.cn id=1109 lang=typescript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
function corpFlightBookings(bookings: number[][], n: number): number[] {

    //构造出原始数组
    //根据二位数组的第一项先构造出原始数组
    const preArr: number[] = new Array(n).fill(0);

    for(let i = bookings[0][0] - 1; i < bookings[0][1]; i++) {
        preArr[i] = bookings[0][2];
    }

    //根据原始数组构造差分数组
    //差分数组构造规则：diffArr[i] = preArr[i] - preArr[i-1];
    const diffArr: number[] = new Array(n).fill(0);
    diffArr[0] = preArr[0];
    for(let i = 1; i < n; i++) {
        diffArr[i] = preArr[i] - preArr[i-1];
    }
    for(let i = 1; i < bookings.length; i++) {
        diffArr[bookings[i][0] - 1] += bookings[i][2];
        if (bookings[i][1] < n) diffArr[bookings[i][1]] -= bookings[i][2];
    }
    //根据差分数组推导出原始数组
    //规则：resArr[i] = diffArr[i] + preArr[i-1]
    // const resArr: number[] = new Array(n).fill(0);
    preArr[0] = diffArr[0];
    for(let i = 1; i < n; i++) {
        preArr[i] = diffArr[i] + preArr[i-1];
    }
    return preArr;
};
// @lc code=end

