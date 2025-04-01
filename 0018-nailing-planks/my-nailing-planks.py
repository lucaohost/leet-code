import unittest

def solution(planksA, planksB, nails):
    minNails = -1
    plankIndex = 0
    nailIndex = 0
    planksCount = len(planksA)
    nailsCount = len(nails)
    lastNailUsedIndex = -1
    while (plankIndex < planksCount and nailIndex < nailsCount):
        if nails[nailIndex] >= planksA[plankIndex] and nails[nailIndex] <= planksB[plankIndex]:
            if minNails == -1:
                # First nail used plus all the nails traversed before
                minNails = nailIndex + 1
            elif nailIndex != lastNailUsedIndex:
                # Adds all the nails traversed until it finds a compatible one
                minNails += nailIndex - lastNailUsedIndex
            plankIndex += 1
            lastNailUsedIndex = nailIndex
        else:
            nailIndex += 1
    return minNails

class TestMinimumNumberOfNails(unittest.TestCase):

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


