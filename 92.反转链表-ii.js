/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

    let p = head;
    let pre = new ListNode(-1);
    pre.next = head;
    for (let i = 1; i < left; i++) {
        p = p.next;
        pre = pre.next;
    }

    const [head1, last] = reverseList(head, right - left);

    pre.next = last;
    head1.next.next = 
};

//反转
//返回头结点和尾结点
var reverseList = function(head, right) {
    if (!head) return null;
    if (n === 1) return head;

    let last = reverseList(head.next, right - 1);
    head.next.next = head;
    head.next = null;

    retrun [head, last];

}
// @lc code=end

