/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const findNthFromEnd = (head, n) => {
        //核心目标：走totle - n步
        //先让第一个指针走n步
        //走到之后再定义另一个指针到链表头部
        //跟第一个指针同步走，第一个指针走到null的时候，第二个指针的位置就是倒数第n个位置

        let p1 = head, p2 = head;

        for (let i = 0; i < n; i++) {
            p1 = p1.next;
        }

        while (p1 !== null) {
            p1 = p1.next;
            p2 = p2.next;
        }

        return p2;
    }
    let dummy = new ListNode(-1);
    dummy.next = head;

    //找到n+1上的节点
    const newNode = findNthFromEnd(dummy, n + 1);


    newNode.next = newNode.next.next;

    return dummy.next;
};
// @lc code=end

