/*
 * @lc app=leetcode.cn id=380 lang=typescript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
class RandomizedSet {

    //存储的数组
    private nums: number[];

    //存储元素索引的map
    private indexMap: Map<number, number>;

    constructor() {
         this.nums = [];
         this.indexMap = new Map<number, number>();
    }

    insert(val: number): boolean {
        if (this.indexMap.has(val)) return false;

        this.nums.push(val);
        this.indexMap.set(val, this.nums.length - 1);
        return true;
    }

    remove(val: number): boolean {
        if (!this.indexMap.has(val)) return false;

        const len = this.nums.length - 1;
        const lastNum = this.nums[len];
        const index = this.indexMap.get(val);
        this.nums[index] = lastNum;
        this.indexMap.set(lastNum, index);
        this.nums.pop();
        this.indexMap.delete(val);
        
        return true;
    }

    getRandom(): number {
        const len = this.nums.length;
        const randomIndex = Math.floor(Math.random() * len);
        return this.nums[randomIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

