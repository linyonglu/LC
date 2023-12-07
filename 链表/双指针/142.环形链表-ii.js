/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    //先判断有无环，有环的话快慢指针会在某个结点相遇
    //将其中一个结点移到链表开头，现在每个指针只移动一步，最后相遇的就是入环结点

    let slow = fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            break;
        }
    }

    //两种情况会走到这个地方
    //1.无环
    //2.有环但被break了

    if (!fast || !fast.next ) return null;

    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};
// @lc code=end

