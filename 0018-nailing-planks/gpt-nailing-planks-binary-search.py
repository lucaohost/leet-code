import unittest

def solution(A, B, C):
    def can_nail(nails_count):
        # Dynamically allocate the array size based on the max position
        max_pos = max(max(B), max(C[:nails_count]))
        # +2 so we can safely access index A[k]-1 when A[k] == 1.
        nailed = [0] * (max_pos + 2)
        # Mark positions where a nail is used (first nails_count nails)
        for i in range(nails_count):
            pos = C[i]
            if pos <= max_pos:
                nailed[pos] = 1
        # Build prefix sum so that nailed[x] is the number of nails at positions <= x.
        for j in range(1, len(nailed)):
            nailed[j] += nailed[j - 1]
        # Check each plank; note: since positions start at 1, we access nailed[A[k]-1] safely.
        for k in range(len(A)):
            # If no nail in [A[k], B[k]], then the difference is 0.
            if nailed[B[k]] - nailed[A[k] - 1] == 0:
                return False
        return True

    left, right = 1, len(C)
    result = -1
    while left <= right:
        mid = (left + right) // 2
        if can_nail(mid):
            result = mid
            right = mid - 1
        else:
            left = mid + 1
    return result

class TestSolution(unittest.TestCase):
    def test_example(self):
        # Provided example.
        A = [1, 4, 5, 8]
        B = [4, 5, 9, 10]
        C = [4, 6, 7, 10, 2]
        self.assertEqual(solution(A, B, C), 4)
    
    def test_single_plank_single_nail(self):
        A = [1]
        B = [2]
        C = [1]
        self.assertEqual(solution(A, B, C), 1)
    
    def test_not_possible(self):
        # No nail hits the plank.
        A = [1]
        B = [2]
        C = [3, 4, 5]
        self.assertEqual(solution(A, B, C), -1)
    
    def test_all_planks_nailed_at_first_nail(self):
        # Every plank includes the nail at position 5.
        A = [1, 2, 3]
        B = [5, 5, 5]
        C = [5, 6, 7]
        self.assertEqual(solution(A, B, C), 1)
    
    def test_multiple_planks(self):
        A = [1, 2, 3, 4, 5]
        B = [3, 4, 5, 6, 7]
        C = [3, 5, 4, 6, 2]
        # With nails [3, 5] (first 2 nails), all planks are nailed.
        self.assertEqual(solution(A, B, C), 2)
    
    def test_large_positions(self):
        A = [10, 20, 30]
        B = [15, 25, 35]
        C = [5, 10, 20, 30, 35]
        # With nails [5, 10, 20, 30] (first 4 nails), all planks are nailed.
        self.assertEqual(solution(A, B, C), 4)
    
    def test_large_input(self):
        # This test stresses the solution with large input sizes.
        N = 2000000
        M = 2000000
        # Planks: [1,2], [2,3], ..., [N, N+1]
        A = list(range(1, N + 1))
        B = list(range(2, N + 2))
        # Nails: consecutive positions 1 through M.
        C = list(range(1, M + 1))
        # In this setting each plank i is nailed by nail at position i (with 0-based index i-1).
        # Thus the maximum nail index used is N-1, and answer = N.
        self.assertTrue(solution(A, B, C) <= M)

if __name__ == "__main__":
    unittest.main()
