### **Problem Title: Subarray Sum Equals K**

**Difficulty:** Medium  
**Description:**  
Given an array of integers `nums` and an integer `k`, return the total number of continuous subarrays whose sum equals to `k`.

---

#### **Example 1:**
**Input:**  
`nums = [1, 1, 1]`  
`k = 2`  
**Output:**  
`2`  
**Explanation:** There are two subarrays `[1, 1]` that sum to `2`.

---

#### **Example 2:**
**Input:**  
`nums = [1, 2, 3]`  
`k = 3`  
**Output:**  
`2`  
**Explanation:** The subarrays `[1, 2]` and `[3]` sum to `3`.

---

#### **Constraints:**
1. \(1 \leq nums.length \leq 2 \times 10^4\)
2. \(-10^4 \leq nums[i] \leq 10^4\)
3. \(-10^7 \leq k \leq 10^7\)

---

The subarray need to be sequential?

Yes, the subarray must be sequential! Subarrays are defined as contiguous sequences of elements in an array. For example, in the array [1, 2, 3]:

Valid subarrays are [1], [2], [3], [1, 2], [2, 3], and [1, 2, 3].
Invalid subarrays would be [1, 3] because the elements are not contiguous.