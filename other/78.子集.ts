/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    
    const len = nums.length;
    const step: number[] = [];
    const res: number[][] = [[]];

    if (len === 0) return [];

    const dfs = () => {
        for (let item of nums) {
            //basecase
            if (step.length === len) return;
            
            if (step.includes(item)  ) continue;
            step.push(item);
            res.push([...step]);
            dfs();

            step.pop();
        }
    }

    dfs();
    return res;
};
// @lc code=end

