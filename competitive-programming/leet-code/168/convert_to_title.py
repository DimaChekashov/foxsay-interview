class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        output = ""
        while columnNumber > 0:
            output = chr(ord('A') + (columnNumber - 1) % 26) + output
            columnNumber = (columnNumber - 1) // 26
        return output

if __name__ == "__main__":
    solution = Solution()
    print(solution.convertToTitle(1))
    print(solution.convertToTitle(28))
    print(solution.convertToTitle(701))