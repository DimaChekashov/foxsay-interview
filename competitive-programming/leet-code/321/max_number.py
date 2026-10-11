from typing import List


def max_number(nums1: List[int], nums2: List[int], k: int) -> List[int]:
    def max_subseq(nums: List[int], q: int) -> List[int]:
        stack = []
        if q == 0:
            return stack

        allowed_drops = len(nums) - q

        for num in nums:
            while allowed_drops > 0 and stack and stack[-1] < num:
                stack.pop()
                allowed_drops -= 1
            stack.append(num)

        return stack[:q]

    def lex_greater(a: List[int], i: int, b: List[int], j: int) -> bool:
        while i < len(a) and j < len(b):
            if a[i] > b[j]:
                return True
            elif a[i] < b[j]:
                return False
            i += 1
            j += 1
        return len(a) - i > len(b) - j

    def merge(a: List[int], b: List[int]) -> List[int]:
        res = []
        i = j = 0
        while i < len(a) or j < len(b):
            if lex_greater(a, i, b, j):
                res.append(a[i])
                i += 1
            else:
                res.append(b[j])
                j += 1
        return res

    start = max(0, k - len(nums2))
    end = min(len(nums1), k)
    ans = []

    for i in range(start, end + 1):
        seq1 = max_subseq(nums1, i)
        seq2 = max_subseq(nums2, k - i)
        curr = merge(seq1, seq2)
        if lex_greater(curr, 0, ans, 0):
            ans = curr

    return ans