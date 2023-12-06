/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {

    const length = s.length;
    let l = 0, r = length - 1;
    
    //判断是否为回文字符串
    function isPalindrome(left: number, right: number): boolean {
        if (left === right) return false;

        //截取出字符串
        const newStr = s.slice(left, right + 1);

        while(left < right) {
            if (newStr[left] !== newStr[right]) return false;

            left++;
            right--;
        }

        return true;
    }

    //基本思路：滑动窗口
    //


};
// @lc code=end

