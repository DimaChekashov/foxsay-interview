from typing import List

class Solution:
    def constructRectangle(self, area: int) -> List[int]:
        for l in range(int(area**0.5), 0, -1):            
            if area % l == 0: 
                return [area // l, l]
            
            
if __name__ == "__main__":
    solution = Solution()
    print(solution.constructRectangle(4))
    print(solution.constructRectangle(37))
    print(solution.constructRectangle(122122))