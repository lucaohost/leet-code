from collections import deque

def subArraysSum(nums, k):
    continuosSubArrays = 0
    sum = 0
    queue = deque()
    for num in nums:
        sum += num
        print(sum)
        queue.append(num)
        if (sum > k):
            # Removes first element from sum and queue
            sum -= queue[0]
            queue.popleft()
            # TODO: Maybe use a while to keep popping left until sum is lower or equal k
        if (sum == k):
            continuosSubArrays += 1
    return continuosSubArrays

# print(subArraysSum([1,2,3,4], 5) == 1)
# print(subArraysSum([1, 1, 1], 2) == 2)
print(subArraysSum([1, 2, 3], 3) == 2) # Test Failing
# print(subArraysSum([1, 2, 3, 4], 5) == 2)
# print(subArraysSum([3, 4, 7, 2, -3, 1, 4, 2], 7) == 4)
# print(subArraysSum([1, -1, 0], 0) == 3)
# print(subArraysSum([1, 2, 1, 2, 1], 3) == 4)
# print(subArraysSum([-1, -1, 1], 0) == 1)
# print(subArraysSum([0, 0, 0, 0, 0], 0) == 15)
# print(subArraysSum([10000, -10000, 10000, -10000, 10000], 10000) == 3)
# print(subArraysSum([], 0) == 0)
