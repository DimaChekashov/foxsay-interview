DIGITS = [
    ["0", 25, [14]],
    ["2", 22, [14]],
    ["4", 20, [5, 14]],
    ["6", 23, [18, 8]],
    ["8", 6, [8, 7]],
    ["5", 5, [8]],
    ["7", 18, []],
    ["3", 7, []],
    ["9", 8, []],
    ["1", 14, []]
]

def original_digits(S: str) -> str:
    fmap = [0] * 26
    ans = [""] * 10
    
    for ch in S:
        fmap[ord(ch) - ord('a')] += 1
    
    for i in range(10):
        dig, char, rems = DIGITS[i]
        count = fmap[char]
        
        for rem in rems:
            fmap[rem] -= count
        
        ans[i] = dig * count
    
    return "".join(ans)