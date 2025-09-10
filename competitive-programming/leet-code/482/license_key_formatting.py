class Solution:
    def licenseKeyFormatting(self, S: str, K: int) -> str:
        
        S = S.replace('-', '')
        
        head = len(S) % K
        
        grouping = []
        
        if head:
            grouping.append( S[:head] )
        
        for index in range(head, len(S), K ):
            grouping.append( S[ index : index+K ] )
        
        return '-'.join( grouping ).upper()
    
if __name__ == "__main__":
    solution = Solution()
    print(solution.licenseKeyFormatting("5F3Z-2e-9-w", 4))
    print(solution.licenseKeyFormatting("2-5g-3-J", 2))