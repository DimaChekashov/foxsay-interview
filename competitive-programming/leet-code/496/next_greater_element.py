from typing import List

class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        stack = []
        hashmap = {}
        output = []

        for i in reversed(nums2):
            while stack:
                if stack[-1] > i:
                    hashmap[i] = stack[-1]
                    stack.append(i)
                    break
                else: 
                    stack.pop()
            
            if not stack:
                hashmap[i] = -1
                stack.append(i)
        
        for j in nums1:
            output.append(hashmap[j])
        return output

if __name__ == "__main__":
    solution = Solution()
    print(solution.nextGreaterElement([4,1,2], [1,3,4,2]))
    print(solution.nextGreaterElement([2,4], [1,2,3,4]))