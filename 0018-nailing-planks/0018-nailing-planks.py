import unittest

def minNails(planksA, planksB, nails):
    minNails = -1
    plankIndex = 0
    nailIndex = 0
    planksCount = len(planksA)
    nailsCount = len(nails)
    lastNailUsedIndex = -1
    while (plankIndex < planksCount and nailIndex < nailsCount):
        if nails[nailIndex] >= planksA[plankIndex] and nails[nailIndex] <= planksB[plankIndex]:
            if minNails == -1:
                minNails = 1
            elif lastNailUsedIndex != -1 and nailIndex != lastNailUsedIndex:
                # Adds all the nails traversed until it finds a compatible one
                minNails += nailIndex - lastNailUsedIndex
            plankIndex += 1
            lastNailUsedIndex = nailIndex
        else:
            nailIndex += 1
    return minNails

class TestMinimumNumberOfNails(unittest.TestCase):

    def test_example_case(self):
        A = [1, 4, 5, 8]
        B = [4, 5, 9, 10]
        C = [4, 6, 7, 10, 2]
        self.assertEqual(minNails(A, B, C), 4)

    def test_all_planks_nailed_by_first_nail(self):
        A = [1, 2, 3]
        B = [5, 5, 5]
        C = [5, 4, 3, 2, 1]
        self.assertEqual(minNails(A, B, C), 1)

    def test_impossible_to_nail_all_planks(self):
        A = [1, 3, 5]
        B = [2, 4, 6]
        C = [7, 8, 9]
        self.assertEqual(minNails(A, B, C), -1)

    def test_minimum_input_size(self):
        A = [1]
        B = [2]
        C = [1]
        self.assertEqual(minNails(A, B, C), 1)

    def test_large_input(self):
        N = 2000000
        M = 2000000
        A = list(range(1, N+1))
        B = list(range(2, N+2))
        C = list(range(1, M+1))
        self.assertTrue(minNails(A, B, C) <= M)

if __name__ == "__main__":
    unittest.main()


