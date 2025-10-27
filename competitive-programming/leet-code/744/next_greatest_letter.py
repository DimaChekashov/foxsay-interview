from typing import List

class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        if target >= letters[-1] or target < letters[0]:
            return letters[0]
        
        low = 0
        high = len(letters)-1
        while low <= high:
            mid = (high+low)//2
            
            if  target >= letters[mid]:
                low = mid+1
            
            if target < letters[mid]:
                high = mid-1
                
        return letters[low]
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.nextGreatestLetter(["c","f","j"], "a"))
    print(solution.nextGreatestLetter(["c","f","j"], "c"))
    print(solution.nextGreatestLetter(["x","x","y","y"], "z"))