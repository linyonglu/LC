/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {

    //滑动窗口
    //通过map去维护

    const recordStr = t;

    const map: Map<string, number> = new Map();

    //左右指针
    let left = 0, right = 0;

    const sLength: number = s.length, tLength: number = t.length;

    //扩大
    while(right < sLength) {

        //记录的字符串为0时，说明已找到覆盖淄川了，可以开始缩小窗口
        if (recordStr.length === 0) {
            if (recordStr.indexOf(s[left])) {

            }
        }
    }

    var minWindow = function(s, t) {
        // 哈希表 need 记录需要匹配的字符及对应的出现次数
        // 哈希表 window 记录窗口中满足 need 条件的字符及其出现次数
        let need = new Map();
        let window = new Map();
        for (let i = 0; i < t.length; i++) {
            if (need.has(t[i])) {
                need.set(t[i], need.get(t[i]) + 1);
            } else {
                need.set(t[i], 1);
            }
        }
        let left = 0, right = 0;
        let valid = 0;
        // 记录最小覆盖子串的起始索引及长度
        let start = 0, len = Infinity;
        while (right < s.length) {
            // c 是将移入窗口的字符
            let c = s[right];
            // 扩大窗口
            right++;
            // 进行窗口内数据的一系列更新
            if (need.has(c)) {
                if (window.has(c)) {
                    window.set(c, window.get(c) + 1);
                } else {
                    window.set(c, 1);
                }
                if (window.get(c) === need.get(c)) {
                    valid++;
                }
            }
            // 判断左侧窗口是否要收缩
            while (valid === need.size) {
                // 在这里更新最小覆盖子串
                if (right - left < len) {
                    start = left;
                    len = right - left;
                }
                // d 是将移出窗口的字符
                let d = s[left];
                // 缩小窗口
                left++;
                // 进行窗口内数据的一系列更新
                if (need.has(d)) {
                    if (window.get(d) === need.get(d)) {
                        valid--;
                    }
                    window.set(d, window.get(d) - 1);
                }
            }
        }
        // 返回最小覆盖子串
        return len === Infinity ? '' : s.substr(start, len);
    };


};
// @lc code=end

