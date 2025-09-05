class Solution:
    def findContentChildren(self, g, s):
        g.sort()
        s.sort()
        
        count = 0
        i, j = 0, 0
        
        while i < len(g) and j < len(s):
            if g[i] <= s[j]:
                count += 1
                i += 1
            j += 1
        
        return count
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.findContentChildren([1,2,3], [1,1]))
    print(solution.findContentChildren([1,2], [1,2,3]))