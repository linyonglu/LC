/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //回文链表有两种方法
    //1. 先将链表反转，然后比对前后的链表是否对等，相等的话就说明是回文链表
    //2. 使用后序遍历，模拟双指针

    let left = head;

    //反转的递归函数
    const traverse = (right) => {
        //basecase
        if (!right) return true;

        let res = traverse(right.next);

        //res为true的话就说明是回文链表，我们再往下比较，不然这个是没有意义的，不用向下比较了
        res = res && (left.val === right.val);

        //left也要向左边移动，模仿双指针
        left = left.next;

        return res;
    }

    return traverse(head);
};
// @lc code=end

