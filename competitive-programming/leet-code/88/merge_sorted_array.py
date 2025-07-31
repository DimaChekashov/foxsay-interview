from typing import List

class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        if n == 0 :return
        len1 = len(nums1)
        end_idx = len1-1
        while n > 0 and m > 0 :
            if nums2[n-1] >= nums1[m-1]:
                nums1[end_idx] = nums2[n-1]
                n-=1
            else:
                nums1[end_idx] = nums1[m-1]
                m-=1
            end_idx-=1
        while n > 0:
            nums1[end_idx] = nums2[n-1]
            n-=1
            end_idx-=1
            

if __name__ == "__main__":
    solution = Solution()
    print(solution.merge([1,2,3,0,0,0], 3, [2,5,6], 3))
    print(solution.merge([1], 1, [], 0))
    print(solution.merge([0], 0, [1], 1))