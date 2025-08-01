from typing import List

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        if numRows == 1:
            return [[1]]
        
        prevRows = self.generate(numRows - 1)
        newRow = [1] * numRows
        
        for i in range(1, numRows - 1):
            newRow[i] = prevRows[-1][i - 1] + prevRows[-1][i]
        
        prevRows.append(newRow)
        return prevRows
    

if __name__ == "__main__":
    solution = Solution()
    print(solution.generate(5))
    print(solution.generate(1))