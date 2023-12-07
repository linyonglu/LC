/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    //双指针
    //核心为消除长度差异
    //1.同时遍历两条链表
    //2.当一条链表遍历到尾结点时，再把它指向另一条链表的头部
    //返回相遇结点
    let pA = headA;
    let pB = headB;

    while (pA !== pB) {
        pA = pA ? pA.next : headB; // pA 遍历链表 A，然后切换到链表 B
        pB = pB ? pB.next : headA; // pB 遍历链表 B，然后切换到链表 A
    }

    return pA; // 返回相交节点（如果相交）或 null（如果不相交）
};
// @lc code=end

