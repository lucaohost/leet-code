from collections import Counter, defaultdict

def minWindow(s: str, t: str) -> str:
    if not s or not t:
        return ""
    
    dict_t = Counter(t)
    
    required = len(dict_t)
    
    # Initialize the window's character counter
    window_counts = defaultdict(int)
    
    l, r = 0, 0
    formed = 0
    ans = float("inf"), None, None  # (window length, left, right)
    
    while r < len(s):
        character = s[r]
        window_counts[character] += 1
        
        if character in dict_t and window_counts[character] == dict_t[character]:
            formed += 1
        
        while l <= r and formed == required:
            character = s[l]
            
            if r - l + 1 < ans[0]:
                ans = (r - l + 1, l, r)
            
            window_counts[character] -= 1
            if character in dict_t and window_counts[character] < dict_t[character]:
                formed -= 1
            
            l += 1
        
        r += 1
    
    return "" if ans[0] == float("inf") else s[ans[1]: ans[2] + 1]

s = "ADOBECODEBANC"
t = "ABC"
print(minWindow(s, t))
