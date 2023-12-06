/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {

    //记录走了那几步
    const step: number[] = [];
    const len = nums.length;

    //结果数组
    const res: number[][] = [];
    
    const dfs = (nums: number[]) => {

        //basecase
        if (step.length === len) {
            res.push([...step]);
            return;
        }

        for(let i = 0; i < len; i++) {
            if (step.includes(nums[i])) continue;

            step.push(nums[i]);

            dfs(nums);

            step.pop();

        }

    }

    dfs(nums);
    return res;
};
// @lc code=end

