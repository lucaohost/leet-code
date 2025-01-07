def threeSum(nums):
    nums.sort()
    result = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1
    return result

def test_threeSum():
    assert threeSum([-1, 0, 1, 2, -1, -4]) == [[-1, -1, 2], [-1, 0, 1]], "Test case 1 failed"
    assert threeSum([0, 0, 0]) == [[0, 0, 0]], "Test case 2 failed"
    assert threeSum([0, 1, 1]) == [], "Test case 3 failed"
    assert threeSum([]) == [], "Test case 4 failed"
    assert threeSum([1, 2, -2, -1]) == [], "Test case 5 failed"
    print("All test cases passed!")

test_threeSum()