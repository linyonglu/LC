/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    //使用栈，尾部对齐后相加
    //构建新链表

    let dummy = new ListNode(-1);
    let cur = new ListNode(-1);
    cur = dummy;
    let stack1 = [], stack2 = [], resStac = [];
    let carry = 0;

    while (l1 !== null) {
        stack1.push(l1);
        l1 = l1.next;
        // console.log('stack1', stack1);
    }

    while (l2 !== null) {
        stack2.push(l2);
        l2 = l2.next;
    }
    const len1 = stack1.length;
    const len2 = stack2.length;
    const maxLen = Math.max(len1, len2);

    for (let i = 0; i < maxLen; i++) {
        let val1 = stack1.pop()?.val || 0;
        let val2 = stack2.pop()?.val || 0;
        let curVal = val1 + val2;
        resStac.push(curVal);
    }
    console.log(resStac.length);
    for(let i = 0; i < resStac.length; i++) {
        const value = resStac[i];
        const curVal = value % 10;
        // const curVal = Math.floor(value);
        if (curVal !== 0) {
            
        }

        cur.next = new ListNode(value);
        cur = cur.next;
    }

    return dummy.next;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end