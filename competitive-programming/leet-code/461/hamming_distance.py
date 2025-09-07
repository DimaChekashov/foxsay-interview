class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        hamming_distance = 0
        while x != 0 or y != 0:
            if x % 2 != y % 2:
                hamming_distance += 1
            x = x >> 1
            y = y >> 1
        return hamming_distance
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.hammingDistance(1, 4))
    print(solution.hammingDistance(3, 1))