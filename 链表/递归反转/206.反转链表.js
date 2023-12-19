/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    //函数定义：输入头节点，返回翻转后的头结点

    if (!head || !head.next) return head;

    let last = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return last;
};
// @lc code=end

