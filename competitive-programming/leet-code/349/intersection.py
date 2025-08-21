from typing import List

class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        mp = {}
        for num in nums1:
            mp[num] = mp.get(num, 0) + 1
        
        result = []
        for num in nums2:
            if num in mp:
                result.append(num)
                del mp[num]
        
        return result

if __name__ == "__main__":
    solution = Solution()
    print(solution.intersection([1,2,2,1], [2,2]))
    print(solution.intersection([4,9,5], [9,4,9,8,4]))