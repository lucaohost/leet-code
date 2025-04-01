import unittest
import numpy as np

def solution(A, B, C):
    """
    Given planks described by arrays A and B, and nails given by C (each nail's position),
    returns the minimum number of nails (taken sequentially from C) needed so that each plank
    [A[i], B[i]] contains at least one nail.
    
    If not all planks can be nailed, returns -1.
    
    This implementation uses a vectorized sparse table built with numpy to answer many
    range-minimum queries quickly. (It is particularly designed to handle large inputs.)
    """
    n_planks = len(A)
    m_nails = len(C)
    # Define an INF value that is greater than any valid nail index.
    INF_val = m_nails + 1
    
    # Find the maximum position we care about.
    max_pos = max(max(B), max(C))
    
    # Create an array P of length (max_pos+1) that will store, for each position,
    # the earliest nail index that hits that position (or INF_val if none).
    P = np.full(max_pos + 1, INF_val, dtype=np.int32)
    # Note: nails in C are given in order; for each nail, update P at that position.
    for i, pos in enumerate(C):
        # pos is assumed to be in 1..max_pos; if multiple nails hit pos, we want the earliest.
        if i < P[pos]:
            P[pos] = i
    
    # --- Build a sparse table for range minimum queries over P ---
    # Let L = max_pos+1 (the length of P).
    L = max_pos + 1
    # Compute K = floor(log2(L)) + 1.
    K = int(np.floor(np.log2(L))) + 1
    # Create the sparse table as a 2D numpy array of shape (K, L) with dtype int32.
    # ST[0, :] is P.
    ST = np.empty((K, L), dtype=np.int32)
    ST[0, :] = P
    
    # Build the table:
    # For each k from 1 to K-1, for every index i such that i + 2^(k)-1 < L,
    # ST[k, i] = min(ST[k-1, i], ST[k-1, i + 2^(k-1)]).
    for k in range(1, K):
        step = 1 << (k - 1)
        # For indices i from 0 to L - 2^k
        # Use vectorized minimum over the two halves.
        end = L - (step << 1) + 1
        # For indices i in 0...end-1, we can compute directly.
        ST[k, :end] = np.minimum(ST[k-1, :end], ST[k-1, step:step+end])
        # For the remaining indices, we must fill only partially.
        for i in range(end, L - (step << 1) + 1):
            # (This loop will be very short in practice.)
            ST[k, i] = min(ST[k-1, i], ST[k-1, i + step])
        # For indices where the window would exceed L, we simply copy ST[k-1] (they won’t be used).
        ST[k, L - (step << 1) + 1:] = ST[k-1, L - (step << 1) + 1:]
    
    # Precompute a log table for numbers 1..L (so that for a window of length x, we have floor(log2(x))).
    log_table = np.empty(L + 1, dtype=np.int32)
    log_table[1] = 0
    for i in range(2, L + 1):
        log_table[i] = log_table[i // 2] + 1

    # Convert A and B to numpy arrays (if they aren’t already) for vectorized queries.
    A_np = np.array(A, dtype=np.int32)
    B_np = np.array(B, dtype=np.int32)
    
    # For each plank, we want to know the minimum nail index in the interval [A[i], B[i]].
    # We vectorize this: For each query, let l = A_np and r = B_np.
    # The window length is (r - l + 1) and j = floor(log2(r - l + 1)).
    lengths = B_np - A_np + 1
    js = log_table[lengths]
    
    # Compute the candidate minimum nail index for each plank:
    # For each plank, the minimum is:
    #    min(ST[j, l], ST[j, r - 2^j + 1])
    # Use vectorized indexing.
    offset = (1 << js) - 1  # vector of offsets for each query.
    # For vectorized access, use advanced indexing.
    mins1 = ST[js, A_np]
    mins2 = ST[js, B_np - offset]
    min_indices = np.minimum(mins1, mins2)
    
    # If any plank has min nail index INF_val, then that plank was never nailed.
    if np.any(min_indices == INF_val):
        return -1
    # Otherwise, the answer is max(min_indices) + 1.
    # (Because nail indices are 0-based, so we add 1.)
    return int(np.max(min_indices)) + 1


# --- Unit tests ---

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

if __name__ == '__main__':
    unittest.main()
