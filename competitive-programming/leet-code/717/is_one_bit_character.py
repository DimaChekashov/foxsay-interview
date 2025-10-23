from typing import List

class Solution:
    def isOneBitCharacter(self, bits: List[int]) -> bool:
        ret = True
        for bit in bits[-2::-1]:
            if bit: ret = not ret
            else: break
        return ret
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.isOneBitCharacter([1,0,0]))
    print(solution.isOneBitCharacter([1,1,1,0]))