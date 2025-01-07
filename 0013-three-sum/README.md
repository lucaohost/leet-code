Problem: 3Sum
LeetCode Problem #15

Description:
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that:

i != j, i != k, and j != k
nums[i] + nums[j] + nums[k] == 0
Notice that the solution set must not contain duplicate triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0
nums[0] + nums[4] + nums[3] = (-1) + (-1) + 2 = 0
The distinct triplets are [-1,-1,2] and [-1,0,1].
Notice that the order of the output and the order of the triplets does not matter.

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only triplet that sums up to 0 is [0,0,0].

Constraints:

0 <= nums.length <= 3000
-10^5 <= nums[i] <= 10^5